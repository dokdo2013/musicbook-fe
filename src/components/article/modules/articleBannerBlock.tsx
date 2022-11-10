import { Box } from "@chakra-ui/react";
import { useArticleBlockBgColorModeValue, useArticleBlockBorderColorModeValue } from "@lib/hooks";
import { FC, ReactNode, Children, useState, useEffect } from "react";

interface Props {
  children: ReactNode;
  height?: string;
  intervalTime?: number;
}

export const ArticleBannerBlock: FC<Props> = ({ children, height, intervalTime = 5000 }) => {
  const [bannerItemCount, setBannerItemCount] = useState(Children.count(children));
  const [currentBannerItemIdx, setCurrentBannerItemIdx] = useState(0);
  const articleBlockBgColor = useArticleBlockBgColorModeValue();
  const articleBlockBorderColor = useArticleBlockBorderColorModeValue();

  useEffect(() => {
    setBannerItemCount(Children.count(children));
    setCurrentBannerItemIdx(0);

    if (bannerItemCount > 1) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx + 1 === bannerItemCount) idx = 0;
        else idx += 1;
        setCurrentBannerItemIdx(idx);
      }, intervalTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [children, intervalTime, bannerItemCount]);

  return (
    <>
      <Box
        position="relative"
        w="full"
        height={height ? height : "max-content"}
        mb="10px"
        overflow="visible"
      >
        <Box
          position="relative"
          w="full"
          height={height ? height : "max-content"}
          border="1px"
          borderColor={articleBlockBorderColor}
          borderRadius="10px"
          bg={articleBlockBgColor}
          overflow="hidden"
        >
          <Box
            position={"relative"}
            height={height ? height : "max-content"}
            transition="0.4s"
            style={{
              width: `${100 * bannerItemCount}%`,
              left: `${-100 * currentBannerItemIdx}%`,
            }}
          >
            {Children.map(children, (child, idx) => (
              <Box
                position="relative"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                width={`${100 / bannerItemCount}%`}
                height="100%"
                key={idx}
              >
                {child}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          position="absolute"
          bottom="10px"
          right="10px"
          p="0.1em 0.5em 0.15em"
          borderRadius="0.5em"
          fontSize="12px"
          textColor="white"
          bg="blackAlpha.400"
        >
          {currentBannerItemIdx + 1}/{bannerItemCount}
        </Box>
      </Box>
    </>
  );
};
