import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { useCardBgColorModeValue, useCardBorderColorModeValue } from "@lib/hooks";
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
  height?: number;
  onClick?: () => void;
}

export const ListTypeCard: FC<Props> = ({
  thumbnailSrc,
  broadcasterProfileSrc,
  titleText,
  subTitleText,
  broadcasterName,
  bookMarkedText,
  unBookMarkedText,
  categoryName,
  categoryColor,
  height = 90,
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
        justifyContent="space-between"
        alignItems="center"
        w="full"
        height={`${height + 2}px`}
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
        <Box position="relative" display="block" width={`${height}px`} height={`${height}px`}>
          <Image src={thumbnailSrc} alt="" width={height} height={height} />
          <CategoryBadge categoryName={categoryName} categoryColor={categoryColor} />
        </Box>
        <Box
          position="relative"
          display="block"
          width={`calc(100% - ${height}px)`}
          height="100%"
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
            width="max-content"
            maxWidth="calc(100% - 10px)"
            fontSize="14px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {subTitleText}
          </Box>
          <Box
            position="absolute"
            bottom="10px"
            left="10px"
            display="block"
            width="max-content"
            maxWidth="calc(100% - 20px - 30px)"
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
          <BookMarkButton
            isBookmarked={isBookmarked}
            height={30}
            right="20px"
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
      </Flex>
    </>
  );
};
