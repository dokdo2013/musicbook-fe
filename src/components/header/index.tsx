import mainLogo from "@public/images/main-logo.png";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  GLOBAL_PADDING_1,
  GLOBAL_PADDING_2,
  MAX_FRAME_WIDTH_PX,
  HEADER_HEIGHT_PX,
} from "@lib/constant";
import { useIsMobile } from "@lib/hooks";
import { openLoginModal } from "@lib/functions";
import { signOut, useSession } from "next-auth/react";
import { SearchCategory, SearchInput } from "@components/searchForm";

export const Header: FC = () => {
  const { status } = useSession();
  const dispatch = useDispatch();
  const [isMobile] = useIsMobile();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const logInOut = async () => {
    if (status === "unauthenticated") await openLoginModal(dispatch, true);
    else if (status === "authenticated") await signOut();
  };

  useEffect(() => {
    if (!isMobile) {
      setHamburgerOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <div className="header-wrap">
        <div className="content">
          <div className="content-left">
            <Link href="/">
              <Image src={mainLogo} alt="" height={40} />
            </Link>
          </div>
          <div className="content-right">
            {!isMobile ? (
              <Stack spacing={4} direction="row" align="center">
                {status === "authenticated" && (
                  <>
                    <Button colorScheme="teal" size="sm">
                      내 노래책
                    </Button>
                    <Button colorScheme="gray" size="sm">
                      마이페이지
                    </Button>
                  </>
                )}
                {status !== "authenticated" && (
                  <Button colorScheme="gray" size="sm">
                    이용안내
                  </Button>
                )}
                <Button
                  colorScheme={status === "unauthenticated" ? "teal" : "gray"}
                  size={"sm"}
                  isLoading={status === "loading" ? true : false}
                  onClick={logInOut}
                >
                  {status === "unauthenticated" ? "로그인" : "로그아웃"}
                </Button>
              </Stack>
            ) : (
              <>
                <Stack spacing={4} direction="row" align="center">
                  {status === "authenticated" && (
                    <Icon
                      className={`search-btn`}
                      icon={faMagnifyingGlass}
                      onClick={() => setHamburgerOpen(true)}
                    />
                  )}
                  <Icon
                    className={`hamburger-btn ${hamburgerOpen && "open"}`}
                    icon={hamburgerOpen ? faXmark : faBars}
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                  />
                </Stack>
                <div
                  className={`hamburger-menu-overlay ${hamburgerOpen && "open"}`}
                  onClick={() => setHamburgerOpen(false)}
                ></div>
                <div className={`hamburger-menu ${hamburgerOpen && "open"}`}>
                  {status === "authenticated" && (
                    <>
                      <div className="menu search-form">
                        <span className="search-form-title">노래책 검색</span>
                        <Stack spacing={4} direction="column" align="flex-start">
                          <SearchInput />
                          <SearchCategory />
                        </Stack>
                      </div>
                      <div className="menu">마이페이지</div>
                      <div className="menu">내 노래책</div>
                    </>
                  )}
                  <div className="menu">이용안내</div>
                  <div className="menu" onClick={logInOut}>
                    {status === "unauthenticated" ? "로그인" : "로그아웃"}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx global>{`
        .hamburger-btn,
        .search-btn {
          &.hamburger-btn {
            width: 30px;
            height: 30px;
          }
          &.search-btn {
            width: 26px;
            height: 26px;
          }
          path {
            fill: #319795;
            transition: 0.2s;
          }

          &:hover {
            cursor: pointer;
            path {
              fill: #268280;
            }
          }

          &.open {
            width: 35px;
            height: 35px;
            margin-right: -3px;
            margin-left: 14px;
          }
        }
      `}</style>
      <style jsx>{`
        .hamburger-menu-overlay {
          @keyframes intro {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          position: fixed;
          top: ${HEADER_HEIGHT_PX}px;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          animation: intro 0.4s ease-in-out forwards;

          &.open {
            display: block;
          }
        }
        .hamburger-menu {
          --padding: ${GLOBAL_PADDING_1}px;
          position: fixed;
          top: ${HEADER_HEIGHT_PX}px;
          right: -100%;
          width: 60%;
          height: calc(100% - ${HEADER_HEIGHT_PX}px + 100px);
          background-color: rgba(255, 255, 255, 1);
          transition: 0.4s;
          padding: var(--padding) 0 100px;

          &.open {
            right: 0;
          }

          .menu {
            --padding-1: ${GLOBAL_PADDING_1}px;
            --padding-2: ${GLOBAL_PADDING_2}px;
            position: relative;
            padding: var(--padding-2) var(--padding-1);
            border-bottom: 1px solid #eee;
            color: #666;
            font-size: 18px;
            font-weight: bold;
            transition: 0.2s;

            &:not(.search-form):hover {
              cursor: pointer;
              color: #242424;
              background-color: #e2e8f0;
            }
            .search-form-title {
              display: block;
              margin-bottom: 10px;
            }
          }
        }

        .header-wrap {
          position: sticky;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: ${HEADER_HEIGHT_PX}px;
          border-bottom: 1px solid #e2e8f0;
          background-color: #ffffff;
          z-index: 100;

          .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            max-width: ${MAX_FRAME_WIDTH_PX}px;
            padding: ${GLOBAL_PADDING_1}px;

            .content-left,
            .content-right {
              position: relative;
              height: 100%;
              display: flex;
              align-items: center;

              &.conntent-left {
                justify-content: flex-start;
              }
              &.conntent-right {
                justify-content: flex-end;
              }
            }
          }
        }
      `}</style>
    </>
  );
};
