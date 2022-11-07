import { useResponsive } from "@/src/lib/hooks";
import { Stack } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { SideBar } from "./sideBar";
import { SideBarMenu } from "./sideBarMenu";
import { SearchInput, SearchCategory } from "@components/searchForm";
import { useDispatch } from "react-redux";
import { setSideBarOpen } from "@/src/redux/modules/common";
import { signOut, useSession } from "next-auth/react";
import { openLoginModal } from "@/src/lib/functions";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  mode?: "fixed" | "semi" | "hidden";
  align?: "left" | "right";
}

export const CommonSideBar: FC<Props> = ({ mode, align }) => {
  const dispatch = useDispatch();
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();
  const { status } = useSession();

  const logInOut = async () => {
    if (status === "unauthenticated") await openLoginModal(dispatch, true);
    else if (status === "authenticated")
      await signOut({ callbackUrl: `${window.location.origin}/` });
  };

  useEffect(() => {
    dispatch(setSideBarOpen(false));
  }, [isLoading, isPC, isTablet, isMobile]);

  return (
    <>
      <SideBar
        align={!align ? (isMobile ? "right" : "left") : align}
        mode={mode}
        openIcon={faMagnifyingGlass}
      >
        {status === "authenticated" && (
          <>
            <SideBarMenu>
              <span className="search-form-title">노래책 검색</span>
              <Stack spacing={4} direction="column" align="flex-start">
                <SearchInput />
                <SearchCategory />
              </Stack>
            </SideBarMenu>

            <SideBarMenu>내 노래책</SideBarMenu>
            <SideBarMenu>마이페이지</SideBarMenu>
          </>
        )}
        <SideBarMenu>이용안내</SideBarMenu>
        <SideBarMenu onClick={logInOut}>
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

export { SideBar, SideBarMenu };
