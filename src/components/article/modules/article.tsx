import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { GLOBAL_PADDING_2, GLOBAL_PADDING_3, MUSICBOOK_URL_KEYS } from "@lib/constant";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { useArticleBlockBorderColorModeValue } from "@lib/hooks";

interface Props {
  children: ReactNode;
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

export const Article: FC<Props> = ({ children, page, pageParam }) => {
  const borderColor = useArticleBlockBorderColorModeValue();

  return (
    <>
      <Box
        id="article-wrap"
        display="block"
        overflowX="hidden"
        overflowY="scroll"
        w="full"
        height="100%"
        p={`${GLOBAL_PADDING_2}px`}
        borderRight="1px"
        borderColor={borderColor}
      >
        <Breadcrumb
          spacing="8px"
          mb={`${GLOBAL_PADDING_3}px`}
          ml=".5em"
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
      </Box>
    </>
  );
};
