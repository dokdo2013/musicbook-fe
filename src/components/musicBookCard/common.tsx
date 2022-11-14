import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";

export const BookMarkButton: FC<{
  isBookmarked: boolean;
  height?: number;
  right?: string;
  onClick?: () => void;
}> = ({ isBookmarked, height, right, onClick }) => {
  return (
    <Box
      _hover={{ cursor: "pointer" }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      <Icon
        icon={faSolidBookmark}
        height={height}
        style={{
          position: "absolute",
          top: "-5px",
          right: right,
          color: isBookmarked ? "#4FD1C5" : "#ccccccaa",
          transition: "0.2s",
        }}
      />
    </Box>
  );
};

export const CategoryBadge: FC<{ categoryName?: string; categoryColor?: ColorSchemeType }> = ({
  categoryName,
  categoryColor,
}) => {
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
          fontSize="2xs"
          fontWeight="bold"
        >
          {categoryName}
        </Box>
      )}
    </>
  );
};
