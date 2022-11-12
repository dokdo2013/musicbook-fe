import { Box, Breadcrumb, BreadcrumbItem, useColorMode } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { GLOBAL_PADDING_2, GLOBAL_PADDING_3, MUSICBOOK_URL_KEYS } from "@lib/constant";
import Link from "next/link";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

export const Article: FC<Props> = ({ children, page, pageParam }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        display="block"
        overflowX="hidden"
        overflowY="scroll"
        w="full"
        height="100%"
        p={`${GLOBAL_PADDING_2}px`}
        borderRight="1px solid #e2e8f0"
      >
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
      </Box>
    </>
  );
};
