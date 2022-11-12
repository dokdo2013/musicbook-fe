import { useResponsive } from "@lib/hooks";
import { FC, useEffect } from "react";
import { SideBar, SideBarMenu } from "@components/sideBar/modules";
import { SearchInput, SearchCategory } from "@components/searchForm";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { getGoToHomeHref, logInOut, openSidebar } from "@lib/functions";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MUSICBOOK_URL, MUSICBOOK_URL_KEYS } from "@lib/constant";
import { useRouter } from "next/router";
import { Stack, Text } from "@chakra-ui/react";

interface Props {
  page?: MUSICBOOK_URL_KEYS;
  mode?: "fixed" | "semi" | "hidden";
  align?: "left" | "right";
}

export const CommonSideBar: FC<Props> = ({ page, mode, align }) => {
  const dispatch = useDispatch();
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    openSidebar(dispatch, false);
  }, [isLoading, isPC, isTablet, isMobile, dispatch]);

  return (
    <>
      <SideBar
        align={!align ? (isMobile ? "right" : "left") : align}
        mode={mode}
        openIcon={faMagnifyingGlass}
      >
        {status === "authenticated" && page && (page === "main" || page === "book") && (
          <SideBarMenu>
            <Text display="block" mb="10px" fontWeight="bold">
              노래책 검색
            </Text>
            <Stack spacing={4} direction="column" align="flex-start">
              <SearchInput />
              <SearchCategory />
            </Stack>
          </SideBarMenu>
        )}
        <SideBarMenu onClick={() => router.push(getGoToHomeHref(status))}>홈</SideBarMenu>
        {status === "authenticated" && (
          <>
            <SideBarMenu onClick={() => router.push(MUSICBOOK_URL.book)}>내 노래책</SideBarMenu>
            <SideBarMenu onClick={() => router.push(MUSICBOOK_URL.mypage)}>마이페이지</SideBarMenu>
          </>
        )}
        <SideBarMenu onClick={() => router.push(MUSICBOOK_URL.guide)}>이용안내</SideBarMenu>
        <SideBarMenu onClick={() => logInOut(dispatch, status)}>
          {status === "unauthenticated" ? "로그인" : "로그아웃"}
        </SideBarMenu>
      </SideBar>
    </>
  );
};
