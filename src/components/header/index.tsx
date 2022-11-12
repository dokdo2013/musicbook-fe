import mainLogo from "@public/images/main-logo.png";

import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  GLOBAL_PADDING_1,
  MAX_FRAME_WIDTH_PX,
  HEADER_HEIGHT_PX,
  MUSICBOOK_URL,
} from "@lib/constant";
import {
  useArticleBlockBgColorModeValue,
  useArticleBlockBorderColorModeValue,
  useResponsive,
  useTealColorModeValue,
} from "@lib/hooks";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { ReduxStates } from "@redux/modules";
import { getGoToHomeHref, logInOut, openSidebar } from "@lib/functions";

export const Header: FC = () => {
  const { status } = useSession();
  const dispatch = useDispatch();
  const sideBarOpen = useSelector(({ common }: ReduxStates) => common.sideBarOpen);
  const { isMobile } = useResponsive();
  const bgColor = useArticleBlockBgColorModeValue();
  const borderColor = useArticleBlockBorderColorModeValue();
  const tealColor = useTealColorModeValue();

  return (
    <>
      <Flex
        position="sticky"
        top="0"
        justifyContent="center"
        alignItems="center"
        w="full"
        height={`${HEADER_HEIGHT_PX}px`}
        borderBottom="1px"
        borderColor={borderColor}
        bg={bgColor}
        zIndex={100}
      >
        <Flex
          position="relative"
          w="full"
          height="100%"
          maxWidth={`${MAX_FRAME_WIDTH_PX}px`}
          p={`${GLOBAL_PADDING_1}px`}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex position="relative" height="100%" justifyContent="flex-start" align="center">
            <Link href={getGoToHomeHref(status)}>
              <Image src={mainLogo} alt="" height={40} />
            </Link>
          </Flex>
          <Flex position="relative" height="100%" justifyContent="flex-end" align="center">
            {!isMobile ? (
              <Stack spacing={4} direction="row" align="center">
                {status === "authenticated" && (
                  <>
                    <Link href={MUSICBOOK_URL.book}>
                      <Button colorScheme="teal" size="sm">
                        내 노래책
                      </Button>
                    </Link>
                    <Link href={MUSICBOOK_URL.mypage}>
                      <Button colorScheme="gray" size="sm">
                        마이페이지
                      </Button>
                    </Link>
                  </>
                )}
                {status !== "authenticated" && (
                  <Link href={MUSICBOOK_URL.guide}>
                    <Button colorScheme="gray" size="sm">
                      이용안내
                    </Button>
                  </Link>
                )}
                <Button
                  colorScheme={status === "unauthenticated" ? "teal" : "gray"}
                  size={"sm"}
                  isLoading={status === "loading" ? true : false}
                  onClick={() => logInOut(dispatch, status)}
                >
                  {status === "unauthenticated" ? "로그인" : "로그아웃"}
                </Button>
              </Stack>
            ) : (
              <>
                <Stack spacing={4} direction="row" align="center">
                  {status === "authenticated" && (
                    <Icon
                      style={{
                        color: tealColor,
                      }}
                      className={`search-btn`}
                      icon={faMagnifyingGlass}
                      onClick={() => openSidebar(dispatch, true)}
                    />
                  )}
                  <Icon
                    style={{
                      color: tealColor,
                    }}
                    className={`hamburger-btn ${sideBarOpen && "open"}`}
                    icon={sideBarOpen ? faXmark : faBars}
                    onClick={() => openSidebar(dispatch, !sideBarOpen)}
                  />
                </Stack>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
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
    </>
  );
};
