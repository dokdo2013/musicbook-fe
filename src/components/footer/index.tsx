import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FOOTER_HEIGHT_PX, GLOBAL_PADDING_1, MAX_FRAME_WIDTH_PX } from "@lib/constant";
import { useResponsive } from "@lib/hooks";
import { FC } from "react";

export const Footer: FC = () => {
  const { isMobile } = useResponsive();
  const footerBgColor = useColorModeValue("gray.400", "gray.600");

  return (
    <>
      <Flex
        position="relative"
        w="full"
        height={`${FOOTER_HEIGHT_PX}px`}
        p={0}
        justifyContent="center"
        alignItems="center"
        bg={footerBgColor}
      >
        <Flex
          position="relative"
          w="full"
          maxWidth={`${MAX_FRAME_WIDTH_PX}px`}
          height="max-content"
          p={`0 ${GLOBAL_PADDING_1}px`}
          justifyContent="center"
          alignItems="flex-start"
          direction="column"
        >
          <Text fontSize="12px">
            © 2022 <span className="bold">https://musicbook.tv</span>. All rights reserved.
          </Text>
          <Text fontSize="12px">앨범아트의 저작권 일체는 음원 소유자에게 있습니다.</Text>
        </Flex>
      </Flex>
    </>
  );
};
