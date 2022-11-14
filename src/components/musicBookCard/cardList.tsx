import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SystemStyleObject,
  Text,
} from "@chakra-ui/react";
import { BsGrid1X2Fill } from "@react-icons/all-files/bs/BsGrid1X2Fill";
import { FaThList } from "@react-icons/all-files/fa/FaThList";
import { HiSortAscending } from "@react-icons/all-files/hi/HiSortAscending";
import { HiSortDescending } from "@react-icons/all-files/hi/HiSortDescending";
import { ListAlign, ResponsiveGridAlign } from "@components/align";
import {
  Children,
  cloneElement,
  Dispatch,
  FC,
  isValidElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CardType } from "@src/types/musicBookCard";
import { useArticleBlockBgColorModeValue, useTealColorModeValue } from "@lib/hooks";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  children: ReactNode;
  sortOrderState: [SortOrderType, Dispatch<SetStateAction<SortOrderType>>];
  sortOrderDirectionState: [SortOrderDirection, Dispatch<SetStateAction<SortOrderDirection>>];
  initCardType?: CardType;
  gridItemMinWidth?: number;
}

export const CardList: FC<Props> = ({
  children,
  initCardType = "list",
  sortOrderState,
  sortOrderDirectionState,
  gridItemMinWidth,
}) => {
  const [listItems, setListItems] = useState<ReactNode>(null);
  const [cardType, setCardType] = useState<CardType>(initCardType);
  const tealColor = useTealColorModeValue();
  const bgColor = useArticleBlockBgColorModeValue();
  const [sortOrder, setSortOrder] = sortOrderState;
  const [sortOrderDirection, setSortOrderDirection] = sortOrderDirectionState;

  const cardTypeSelectIconOnHoverStyle: SystemStyleObject = {
    cursor: "pointer",
  };

  const sortOrderMap: Record<SortOrderType, string> = {
    newest: "최신순",
    popular: "인기순",
    songtitle: "곡명순",
    singername: "가수명순",
  };

  useEffect(() => {
    setListItems(
      Children.map(children, (child, idx) => {
        if (isValidElement(child)) {
          return cloneElement(child, { key: idx, cardType } as any);
        }
      }),
    );
  }, [children, cardType]);

  useEffect(() => {
    setCardType(initCardType);
  }, [initCardType]);

  return (
    <>
      <Flex
        position="sticky"
        top="0"
        direction="row"
        justifyContent="space-between"
        align="center"
        p="0 3px 10px"
        zIndex={2}
        bg={bgColor}
      >
        <Flex w="full" direction="row" justifyContent="flex-end" align="center" gap={2}>
          <Text mt="-2px">정렬방법</Text>
          <Icon
            as={FaThList}
            fontSize="20px"
            color={cardType === "list" ? tealColor : "gray"}
            onClick={() => setCardType("list")}
            _hover={cardTypeSelectIconOnHoverStyle}
          />
          <Icon
            as={BsGrid1X2Fill}
            fontSize="19px"
            color={cardType === "grid" ? tealColor : "gray"}
            onClick={() => setCardType("grid")}
            _hover={cardTypeSelectIconOnHoverStyle}
          />
          <Icon
            as={sortOrderDirection === "asc" ? HiSortAscending : HiSortDescending}
            fontSize="25px"
            color={tealColor}
            onClick={() => setSortOrderDirection(sortOrderDirection === "asc" ? "desc" : "asc")}
            _hover={cardTypeSelectIconOnHoverStyle}
          />
          <Menu>
            <MenuButton height="26px" fontSize="14px" as={Button} rightIcon={<ChevronDownIcon />}>
              {sortOrderMap[sortOrder]}
            </MenuButton>
            <MenuList>
              {Object.keys(sortOrderMap).map((itm, idx) => (
                <MenuItem onClick={() => setSortOrder(itm as SortOrderType)} key={idx}>
                  {sortOrderMap[itm as SortOrderType]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {cardType === "list" ? (
        <ListAlign>{listItems}</ListAlign>
      ) : (
        <ResponsiveGridAlign itemMinWidth={gridItemMinWidth}>{listItems}</ResponsiveGridAlign>
      )}
    </>
  );
};
