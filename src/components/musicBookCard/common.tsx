import { FC } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";

export const BookMarkButton: FC<{
  isBookmarked: boolean;
  markedToastTitle: string;
  unmarkedToastTitle: string;
  description: string;
  height?: number;
  top?: string;
  right?: string;
  onClick?: () => void;
}> = ({
  isBookmarked,
  markedToastTitle,
  unmarkedToastTitle,
  description,
  height,
  top = "-5px",
  right,
  onClick,
}) => {
  const toast = useToast();
  return (
    <Box
      _hover={{ cursor: "pointer" }}
      onClick={(e) => {
        e.stopPropagation();
        toast({
          duration: 1000,
          title: isBookmarked ? unmarkedToastTitle : markedToastTitle,
          description,
          status: "info",
          isClosable: true,
        });
        if (onClick) onClick();
      }}
    >
      <Icon
        icon={faSolidBookmark}
        height={height}
        style={{
          position: "absolute",
          top,
          right,
          color: isBookmarked ? "#4FD1C5" : "#ccccccaa",
          transition: "0.2s",
        }}
      />
    </Box>
  );
};

export const CategoryBadge: FC<{
  categoryName?: string;
  categoryColor?: ColorSchemeType;
  fontSize?: string;
}> = ({ categoryName, categoryColor, fontSize = "2xs" }) => {
  return (
    <>
      {categoryName && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width="max-content"
          p=".2em .5em"
          borderRadius="0 .8em 0 0"
          bg={categoryColor ? `${categoryColor}.100` : "green.100"}
          color={categoryColor ? `${categoryColor}.700` : "green.700"}
          fontSize={fontSize}
          fontWeight="bold"
        >
          {categoryName}
        </Box>
      )}
    </>
  );
};
