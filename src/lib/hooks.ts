import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPC, setIsPC] = useState(false);

  const pc = useMediaQuery({
    query: "all and (min-width:1024px)",
  });
  const tablet = useMediaQuery({
    query: "all and (min-width:768px) and (max-width:1023px)",
  });
  const mobile = useMediaQuery({
    query: "all and (max-width:767px)",
  });

  useEffect(() => {
    setIsLoading(false);
    setIsPC(pc);
  }, [pc]);
  useEffect(() => {
    setIsLoading(false);
    setIsTablet(tablet);
  }, [tablet]);
  useEffect(() => {
    setIsLoading(false);
    setIsMobile(mobile);
  }, [mobile]);

  return { isLoading, isMobile, isTablet, isPC };
};

export const useArticleBlockBgColorModeValue = () => useColorModeValue("white", "gray.700");
export const useArticleBlockBorderColorModeValue = () => useColorModeValue("gray.200", "gray.900");
export const useTealColorModeValue = () => useColorModeValue("#319795", "#81E6D9");
export const useCardBgColorModeValue = () => useColorModeValue("#ffffff", "#2D3748");
export const useCardBorderColorModeValue = () => useColorModeValue("#eeeeee", "#1A202C");
