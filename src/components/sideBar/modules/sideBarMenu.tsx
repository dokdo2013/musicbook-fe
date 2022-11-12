import { FC, ReactNode } from "react";
import { GLOBAL_PADDING_1, GLOBAL_PADDING_3 } from "@lib/constant";
import { background, Box } from "@chakra-ui/react";
import { useArticleBlockBorderColorModeValue } from "@lib/hooks";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export const SideBarMenu: FC<Props> = ({ children, onClick }) => {
  const borderColor = useArticleBlockBorderColorModeValue();

  return (
    <>
      <Box
        display="block"
        position="relative"
        w="full"
        p={`${GLOBAL_PADDING_3}px ${GLOBAL_PADDING_1}px`}
        borderBottom="1px"
        borderColor={borderColor}
        fontWeight="bold"
        transition="0.2s"
        _hover={
          onClick
            ? {
                cursor: "pointer",
                backgroundColor: "#00000011",
              }
            : {}
        }
        onClick={onClick}
      >
        {children}
      </Box>
    </>
  );
};
