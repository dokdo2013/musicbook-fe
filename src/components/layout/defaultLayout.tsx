import { FC, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useResponsive } from "@lib/hooks";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { LoadingScreen } from "@components/loadingScreen";
import { RouterProgress } from "@components/routerProgress";

interface Props {
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  const { status } = useSession();
  const { isLoading } = useResponsive();

  return (
    <>
      <RouterProgress />
      <Header />
      {children}
      <Footer />
      <LoadingScreen isShow={isLoading || status === "loading"} />
    </>
  );
};
