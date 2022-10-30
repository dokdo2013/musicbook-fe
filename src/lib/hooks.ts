import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  useEffect(() => {
    setIsLoading(false);
    setIsMobile(mobile);
  }, [mobile]);

  return [isMobile, isLoading];
};
