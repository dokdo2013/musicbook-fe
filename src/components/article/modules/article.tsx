import { GLOBAL_PADDING_2 } from "@lib/constant";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Article: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="article-wrap">{children}</div>
      <style jsx>{`
        .article-wrap {
          display: block;
          overflow-x: hidden;
          overflow-y: scroll;
          width: 100%;
          height: 100%;
          padding: ${GLOBAL_PADDING_2}px;
          background-color: #edf2f7;
          border-right: 1px solid #e2e8f0;
        }
      `}</style>
    </>
  );
};
