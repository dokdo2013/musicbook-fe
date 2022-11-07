import { FC, ReactNode } from "react";

interface ArticleListItemProps {
  category: ReactNode;
  title: string;
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ category, title }) => {
  return (
    <>
      <tr>
        <td>{category}</td>
        <td>{title}</td>
      </tr>
      <style jsx>{`
        tr {
          transition: 0.2s;
          border-bottom: 1px solid #eee;

          &:hover {
            cursor: pointer;
            background-color: rgb(249, 249, 249);
          }

          &:nth-last-child(1) {
            border-bottom: none;
          }

          td {
            position: relative;
            padding: 5px 5px;
            text-align: center;
            font-size: 12px;
            color: #4a5568;
          }
        }
      `}</style>
    </>
  );
};

interface ArticleListProps {
  children: ReactNode;
}

export const ArticleList: FC<ArticleListProps> = ({ children }) => {
  return (
    <>
      <div className="article-list-wrap">
        <table>
          <thead>
            <tr>
              <th>분류</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      <style jsx>{`
        .article-list-wrap {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          border: 1px solid #eee;
          overflow-y: auto;

          table {
            position: relative;
            width: 100%;

            thead {
              position: sticky;
              top: 0;
              z-index: 2;

              th {
                position: relative;
                padding: 10px 0;
                border-bottom: 2px solid #eee;
                font-size: 14px;
                color: #4a5568;
                background-color: #fff;

                &:nth-of-type(1) {
                  width: 100px;
                }

                &:nth-of-type(1)::after {
                  content: "";
                  position: absolute;
                  top: 50%;
                  right: 1px;
                  display: block;
                  height: calc(1em + 10px);
                  border-right: 1px solid #eee;
                  transform: translateY(-50%);
                }
              }
            }

            tbody {
              z-index: 1;
            }
          }
        }
      `}</style>
    </>
  );
};
