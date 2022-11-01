import { FC, ReactNode } from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { useSession } from "next-auth/react";
import { useResponsive } from "@/src/lib/hooks";
import { LoadingScreen } from "../loadingScreen";

interface Props {
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  const { status } = useSession();
  const { isMobile, isLoading } = useResponsive();

  return (
    <>
      <Header />
      {children}
      <Footer />
      <LoadingScreen isShow={isLoading || status === "loading"} />
    </>
  );
};
