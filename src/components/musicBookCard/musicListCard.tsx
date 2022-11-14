import Image from "next/image";
import { FC, useState } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { useCardBgColorModeValue, useCardBorderColorModeValue } from "@lib/hooks";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { MusicCardProps } from "@src/types/musicBookCard";
import { ScrollableText } from "@components/scrollableText";

interface Props extends MusicCardProps {
  height?: number;
}

export const MusicListCard: FC<Props> = ({ music, height = 90, onClick }) => {
  const [isTitleScroll, setIsTitleScroll] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toast = useToast();
  const bgColor = useCardBgColorModeValue();
  const borderColor = useCardBorderColorModeValue();
  const {
    thumbnailSrc,
    songTitle,
    authorName,
    categoryName,
    broadcasterName,
    broadcasterProfileSrc,
    categoryColor,
  } = music;

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
          <Box
            position="absolute"
            bottom={0}
            left={0}
            width="max-content"
            p=".2em .5em"
            borderRadius="0 .8em 0 0"
            bg={categoryColor ? `${categoryColor}.100` : "green.100"}
            color={categoryColor ? `${categoryColor}.700` : "green.700"}
            fontSize="2xs"
            fontWeight="bold"
          >
            {categoryName}
          </Box>
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
            {songTitle}
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
            {authorName}
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
          <Box
            _hover={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
              toast({
                title: !isBookmarked ? "수록곡이 북마크됐어요!" : "수록곡 북마크가 해제됐어요",
                description: songTitle,
                status: "info",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            <Icon
              icon={faSolidBookmark}
              height={30}
              style={{
                position: "absolute",
                top: "-5px",
                right: "20px",
                color: isBookmarked ? "#4FD1C5" : "#ccccccaa",
                transition: "0.2s",
              }}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
