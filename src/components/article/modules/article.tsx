import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { GLOBAL_PADDING_2, GLOBAL_PADDING_3, MUSICBOOK_URL_KEYS } from "@lib/constant";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

export const Article: FC<Props> = ({ children, page, pageParam }) => {
  return (
    <>
      <div className="article-wrap">
        <Breadcrumb
          spacing="8px"
          mb={`${GLOBAL_PADDING_3}px`}
          separator={<ChevronRightIcon color={"gray.500"} mb={"3px"} />}
        >
          {page !== "main" && (
            <BreadcrumbItem>
              <Link href="/main">홈</Link>
            </BreadcrumbItem>
          )}
          {page === "mypage" && (
            <BreadcrumbItem>
              <Link href="/mypage">마이페이지</Link>
            </BreadcrumbItem>
          )}
          {page === "guide" && (
            <BreadcrumbItem>
              <Link href="/guide">이용안내</Link>
            </BreadcrumbItem>
          )}
          {page === "book" && !pageParam && (
            <BreadcrumbItem>
              <Link href="/book">내 노래책</Link>
            </BreadcrumbItem>
          )}
          {page === "book" && pageParam && (
            <BreadcrumbItem>
              <Link href={`/book/${pageParam}`}>{pageParam}의 노래책</Link>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
        {children}
      </div>
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
