import { IconButton, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { FC, ReactElement, useEffect, useState } from "react";

const QuickMenuButton: FC<{ children: ReactElement; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <>
      <IconButton
        width="50px"
        height="50px"
        borderRadius="50%"
        colorScheme="teal"
        opacity={0.7}
        aria-label="color mode button"
        icon={children}
        onClick={onClick}
      ></IconButton>
    </>
  );
};

export const QuickMenu: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [colorModeIcon, setColorModeIcon] = useState(<MoonIcon />);

  useEffect(() => {
    setColorModeIcon(colorMode === "light" ? <MoonIcon /> : <SunIcon />);
  }, [colorMode]);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        gap={1}
        position="fixed"
        bottom="80px"
        right="20px"
        zIndex="200"
      >
        <QuickMenuButton
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.getElementById("article-wrap")?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ChevronUpIcon fontSize="30px" />
        </QuickMenuButton>
        <QuickMenuButton onClick={toggleColorMode}>{colorModeIcon}</QuickMenuButton>
      </Stack>
    </>
  );
};
