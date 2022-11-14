import Image from "next/image";
import { FC, useState } from "react";
import { useCardBgColorModeValue, useCardBorderColorModeValue } from "@lib/hooks";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { BookCardProps } from "@src/types/musicBookCard";
import { ScrollableText } from "@components/scrollableText";

interface Props extends BookCardProps {
  maxWidth?: number;
}

export const BookGridCard: FC<Props> = ({ book, maxWidth, onClick }) => {
  const [isTitleScroll, setIsTitleScroll] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toast = useToast();
  const bgColor = useCardBgColorModeValue();
  const borderColor = useCardBorderColorModeValue();
  const { thumbnailSrc, bookTitle, broadcasterName, broadcasterProfileSrc, registedSongCount } =
    book;

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
          <Box
            _hover={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
              toast({
                title: !isBookmarked ? "노래책이 북마크됐어요!" : "노래책 북마크가 해제됐어요",
                description: bookTitle,
                status: "info",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            <Icon
              icon={faSolidBookmark}
              height={50}
              style={{
                position: "absolute",
                top: "-5px",
                right: "10px",
                color: isBookmarked ? "#4FD1C5" : "#ccccccaa",
                transition: "0.2s",
              }}
            />
          </Box>
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
            {bookTitle}
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
            {registedSongCount}곡 수록
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
