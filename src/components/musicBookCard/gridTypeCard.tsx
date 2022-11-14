import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import { useCardBgColorModeValue, useCardBorderColorModeValue } from "@lib/hooks";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { ScrollableText } from "@components/scrollableText";
import { BookMarkButton, CategoryBadge } from "./common";

interface Props {
  thumbnailSrc: string | StaticImageData;
  broadcasterProfileSrc: string | StaticImageData;
  titleText: string;
  subTitleText?: string;
  broadcasterName: string;
  bookMarkedText: string;
  unBookMarkedText: string;
  categoryName?: string;
  categoryColor?: ColorSchemeType;
  maxWidth?: number;
  onClick?: () => void;
}

export const GridTypeCard: FC<Props> = ({
  thumbnailSrc,
  broadcasterProfileSrc,
  titleText,
  subTitleText,
  broadcasterName,
  bookMarkedText,
  unBookMarkedText,
  categoryName,
  categoryColor,
  maxWidth,
  onClick,
}) => {
  const [isTitleScroll, setIsTitleScroll] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toast = useToast();
  const bgColor = useCardBgColorModeValue();
  const borderColor = useCardBorderColorModeValue();

  return (
    <>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="space-between"
        direction="column"
        w="full"
        maxWidth={maxWidth && `${maxWidth}px`}
        height="max-content"
        border="1px"
        borderColor={borderColor}
        borderRadius="10px"
        bg={bgColor}
        boxShadow={`0 0 3px ${borderColor}`}
        transition="0.2s"
        overflow="hidden"
        onClick={onClick}
        onMouseEnter={() => setIsTitleScroll(true)}
        onMouseLeave={() => setIsTitleScroll(false)}
        _hover={{ cursor: "pointer" }}
      >
        <Box position="relative" display="block" w="full" height="max-content">
          <Image src={thumbnailSrc} alt="" style={{ width: "100%", height: "auto" }} />
          <CategoryBadge categoryName={categoryName} categoryColor={categoryColor} />
          <BookMarkButton
            isBookmarked={isBookmarked}
            height={50}
            right="10px"
            onClick={() => {
              setIsBookmarked(!isBookmarked);
              toast({
                title: !isBookmarked ? bookMarkedText : unBookMarkedText,
                description: titleText,
                status: "info",
                duration: 1000,
                isClosable: true,
              });
            }}
          />
        </Box>
        <Box
          position="relative"
          display="block"
          w="full"
          height="max-content"
          p="10px"
          overflow="hidden"
        >
          <ScrollableText
            isScroll={isTitleScroll}
            wrapStyle={{ fontSize: "14px", fontWeight: "bold", height: "1.5em" }}
          >
            {titleText}
          </ScrollableText>
          <Box
            position="relative"
            display="block"
            w="full"
            maxWidth="full"
            fontSize="12px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {subTitleText}
          </Box>
          <Box
            position="relative"
            display="block"
            w="full"
            maxWidth="calc(100% - 10px)"
            ml="auto"
            mr="0"
            mt="10px"
            textAlign="right"
            fontSize="14px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            <Image
              src={broadcasterProfileSrc}
              alt=""
              width={14}
              height={14}
              style={{
                display: "inline-block",
                marginBottom: "-2px",
                marginRight: "3px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
            {broadcasterName}
          </Box>
        </Box>
      </Flex>
    </>
  );
};
