import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { GLOBAL_PADDING_2 } from "@lib/constant";
import { useArticleBlockBgColorModeValue, useArticleBlockBorderColorModeValue } from "@lib/hooks";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  height?: string;
}
export const ArticleBlock: FC<Props> = ({ children, title, height }) => {
  const articleBlockBgColor = useArticleBlockBgColorModeValue();
  const articleBlockBorderColor = useArticleBlockBorderColorModeValue();
  const articleBlockTitleColor = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <Box
        position="relative"
        w="full"
        p={`${GLOBAL_PADDING_2}px`}
        mb="10px"
        bg={articleBlockBgColor}
        border="1px"
        borderColor={articleBlockBorderColor}
        borderRadius="10px"
        height={height ? height : "max-content"}
        overflow="hidden"
      >
        {title && (
          <Text
            height="max-content"
            fontSize="20px"
            fontWeight="bold"
            mb="20px"
            color={articleBlockTitleColor}
          >
            {title}
          </Text>
        )}
        <Box
          position="relative"
          w="full"
          height={!title ? "100%" : height ? "calc(100% - 50px)" : "max-content"}
          overflowY="auto"
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
