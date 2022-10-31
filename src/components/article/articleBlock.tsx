import { GLOBAL_PADDING_2 } from "@lib/constant";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  height?: string;
}
export const ArticleBlock: FC<Props> = ({ children, title, height }) => {
  return (
    <>
      <div className="article-block-wrap">
        {title && <div className="article-block-title">{title}</div>}
        {children}
      </div>
      <style jsx>{`
        .article-block-wrap {
          position: relative;
          width: 100%;
          padding: ${GLOBAL_PADDING_2}px;
          margin-bottom: 10px;
          background-color: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          ${height && `height: ${height};`}

          .article-block-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #4a5568;
          }
        }
      `}</style>
    </>
  );
};
