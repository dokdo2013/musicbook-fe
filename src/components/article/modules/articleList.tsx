import { useColorModeValue } from "@chakra-ui/react";
import { useCardBorderColorModeValue } from "@lib/hooks";
import { FC, ReactNode } from "react";

interface ArticleListItemProps {
  category: ReactNode;
  title: string;
}

export const ArticleListItem: FC<ArticleListItemProps> = ({ category, title }) => {
  const borderColor = useCardBorderColorModeValue();

  return (
    <>
      <tr>
        <td>{category}</td>
        <td>{title}</td>
      </tr>
      <style jsx>{`
        tr {
          transition: 0.2s;
          border-bottom: 1px solid ${borderColor};

          &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.05);
          }

          &:nth-last-child(1) {
            border-bottom: none;
          }

          td {
            position: relative;
            padding: 5px 5px;
            text-align: center;
            font-size: 12px;
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
  const borderColor = useCardBorderColorModeValue();
  const headerBgColor = useColorModeValue("white", "#2d3748");

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
          border: 1px solid ${borderColor};
          border-radius: 10px;
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
                border-bottom: 2px solid ${borderColor};
                font-size: 14px;
                background-color: ${headerBgColor};

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
                  border-right: 1px solid ${borderColor};
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
