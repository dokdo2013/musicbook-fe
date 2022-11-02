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
        <div className={`article-block-content ${!title ? "no-title" : ""}`}>{children}</div>
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
          overflow: hidden;

          .article-block-title {
            height: max-content;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #4a5568;
          }

          .article-block-content {
            position: relative;
            width: 100%;
            height: calc(100% - 50px);
            overflow-y: auto;

            &.no-title {
              height: 100%;
            }
          }
        }
      `}</style>
    </>
  );
};
