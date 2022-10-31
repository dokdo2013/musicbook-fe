import { FC, ReactNode } from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

interface Props {
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
