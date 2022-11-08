import { useResponsive } from "@lib/hooks";
import { Stack } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { SideBar, SideBarMenu } from "@components/sideBar/modules";
import { SearchInput, SearchCategory } from "@components/searchForm";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { getGoToHomeHref, logInOut, openSidebar } from "@lib/functions";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MUSICBOOK_URL, MUSICBOOK_URL_KEYS } from "@lib/constant";

interface Props {
  page?: MUSICBOOK_URL_KEYS;
  mode?: "fixed" | "semi" | "hidden";
  align?: "left" | "right";
}

export const CommonSideBar: FC<Props> = ({ page, mode, align }) => {
  const dispatch = useDispatch();
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();
  const { status } = useSession();

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
            <span className="search-form-title">노래책 검색</span>
            <Stack spacing={4} direction="column" align="flex-start">
              <SearchInput />
              <SearchCategory />
            </Stack>
          </SideBarMenu>
        )}
        <Link href={getGoToHomeHref(status)}>
          <SideBarMenu>홈</SideBarMenu>
        </Link>
        {status === "authenticated" && (
          <>
            <Link href={MUSICBOOK_URL.book}>
              <SideBarMenu>내 노래책</SideBarMenu>
            </Link>
            <Link href={MUSICBOOK_URL.mypage}>
              <SideBarMenu>마이페이지</SideBarMenu>
            </Link>
          </>
        )}
        <Link href={MUSICBOOK_URL.guide}>
          <SideBarMenu>이용안내</SideBarMenu>
        </Link>
        <SideBarMenu onClick={() => logInOut(dispatch, status)}>
          {status === "unauthenticated" ? "로그인" : "로그아웃"}
        </SideBarMenu>
      </SideBar>

      <style jsx>{`
        .search-form-title {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};
