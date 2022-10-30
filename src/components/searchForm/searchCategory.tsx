import { Button, Flex, Stack } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";

interface ToggleBtnProps {
  children: ReactNode;
  onClick?: () => void;
}

const ToggleBtn: FC<ToggleBtnProps> = ({ children, onClick }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Button
        colorScheme={clicked ? "purple" : "gray"}
        size="xs"
        fontWeight="bold"
        onClick={() => {
          if (onClick) onClick();
          setClicked(!clicked);
        }}
      >
        {children}
      </Button>
    </>
  );
};

export const SearchCategory: FC = () => {
  return (
    <>
      <div className="search-category-title">카테고리 (8)</div>
      <Flex justifyContent="flex-start" align="center" gap={1.5} wrap="wrap">
        <ToggleBtn>K-POP(0)</ToggleBtn>
        <ToggleBtn>J-POP(0)</ToggleBtn>
        <ToggleBtn>보컬로이드(0)</ToggleBtn>
        <ToggleBtn>애니메이션&게임&OST(0)</ToggleBtn>
        <ToggleBtn>Honeyworks(0)</ToggleBtn>
        <ToggleBtn>우타이테 오리지널(0)</ToggleBtn>
        <ToggleBtn>시드사운드(0)</ToggleBtn>
        <ToggleBtn>POP(0)</ToggleBtn>
      </Flex>
      <Stack spacing={1.5} align="flex-start" direction="column">
        <Button colorScheme={"gray"} size="xs" fontWeight="bold">
          더보기 (30개 항목)
        </Button>
        <Button colorScheme={"gray"} size="xs" fontWeight="bold">
          초기화
        </Button>
      </Stack>
      <style jsx>{`
        .search-category-title {
          font-size: 12px;
        }
      `}</style>
    </>
  );
};
