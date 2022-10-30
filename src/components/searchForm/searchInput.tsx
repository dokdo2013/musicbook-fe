import { FC } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchInput: FC = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon
          icon={faMagnifyingGlass}
          color="#718096"
          style={{ marginTop: "10px", marginLeft: "5px", height: "14px" }}
        />
      </InputLeftElement>
      <Input
        color="gray.7a00"
        focusBorderColor="teal.400"
        placeholder="스트리머, 곡명, 가수명 검색"
        size="lg"
        width={"100%"}
        style={{ fontSize: "14px" }}
      />
    </InputGroup>
  );
};
