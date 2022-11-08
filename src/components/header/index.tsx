import mainLogo from "@public/images/main-logo.png";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Progress, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { GLOBAL_PADDING_1, MAX_FRAME_WIDTH_PX, HEADER_HEIGHT_PX } from "@lib/constant";
import { useResponsive } from "@lib/hooks";
import { openLoginModal } from "@lib/functions";
import { signOut, useSession } from "next-auth/react";
import { setSideBarOpen } from "@redux/modules/common";
import { useSelector } from "react-redux";
import { ReduxStates } from "@redux/modules";
import Router from "next/router";

export const Header: FC = () => {
  const { status } = useSession();
  const dispatch = useDispatch();
  const sideBarOpen = useSelector(({ common }: ReduxStates) => common.sideBarOpen);
  const { isMobile } = useResponsive();
  const [isProgress, setIsProgress] = useState(false);

  const getMainLogoHref = () =>
    status === "unauthenticated" || status === "loading" ? "/" : "/main";

  const logInOut = async () => {
    if (status === "unauthenticated") await openLoginModal(dispatch, true);
    else if (status === "authenticated")
      await signOut({ callbackUrl: `${window.location.origin}/` });
  };

  const routerChangeStartHandler = () => {
    setIsProgress(true);
  };
  const routerChangeDoneHandler = () => {
    setIsProgress(false);
  };

  Router.events.on("routeChangeStart", routerChangeStartHandler);
  Router.events.on("routeChangeComplete", routerChangeDoneHandler);
  Router.events.on("routeChangeError", routerChangeDoneHandler);

  return (
    <>
      <div className="header-wrap">
        {isProgress && (
          <div className="progress">
            <Progress size="xs" colorScheme="teal" isIndeterminate />
          </div>
        )}
        <div className="content">
          <div className="content-left">
            <Link href={getMainLogoHref()}>
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
                    <Link href={"/mypage"}>
                      <Button colorScheme="gray" size="sm">
                        마이페이지
                      </Button>
                    </Link>
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
                      onClick={() => dispatch(setSideBarOpen(true))}
                    />
                  )}
                  <Icon
                    className={`hamburger-btn ${sideBarOpen && "open"}`}
                    icon={sideBarOpen ? faXmark : faBars}
                    onClick={() => dispatch(setSideBarOpen(!sideBarOpen))}
                  />
                </Stack>
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

          .progress {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }

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
