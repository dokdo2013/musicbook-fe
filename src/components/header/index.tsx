import mainLogo from "@public/images/main-logo.png";

import {
  GLOBAL_PADDING_1,
  GLOBAL_PADDING_2,
  MAX_FRAME_WIDTH_PX,
  MAX_HEADER_HEIGHT_PX,
} from "@/src/lib/constant";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import { useIsMobile } from "@/src/lib/hooks";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Header: FC = () => {
  const isMobile = useIsMobile();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

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
                <Button colorScheme="gray" size={"lg"}>
                  이용안내
                </Button>
                <Button colorScheme="teal" size={"lg"}>
                  로그인
                </Button>
              </Stack>
            ) : (
              <>
                <Icon
                  className={`hamburger-btn ${hamburgerOpen && "open"}`}
                  icon={hamburgerOpen ? faXmark : faBars}
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                />
                <div className={`hamburger-menu ${hamburgerOpen && "open"}`}>
                  <div className="menu">로그인</div>
                  <div className="menu">이용안내</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx global>{`
        .hamburger-btn {
          width: 30px;
          height: 30px;
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
          }
        }
      `}</style>
      <style jsx>{`
        .hamburger-menu {
          --padding: ${GLOBAL_PADDING_1}px;
          position: fixed;
          top: ${MAX_HEADER_HEIGHT_PX}px;
          right: -100%;
          width: 100%;
          height: calc(100% - ${MAX_HEADER_HEIGHT_PX}px);
          background-color: white;
          transition: 0.4s;
          padding: var(--padding) 0;

          &.open {
            right: 0;
          }

          .menu {
            --padding-1: ${GLOBAL_PADDING_1}px;
            --padding-2: ${GLOBAL_PADDING_2}px;
            padding: var(--padding-2) var(--padding-1);
            border-bottom: 1px solid #eee;
            color: #666;
            font-size: 18px;
            font-weight: bold;
            transition: 0.2s;

            &:hover {
              cursor: pointer;
              color: #242424;
              background-color: #e2e8f0;
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
          height: ${MAX_HEADER_HEIGHT_PX}px;
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
