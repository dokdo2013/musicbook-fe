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
import {
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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsGrid1X2Fill } from "@react-icons/all-files/bs/BsGrid1X2Fill";
import { FaThList } from "@react-icons/all-files/fa/FaThList";
import { HiSortAscending } from "@react-icons/all-files/hi/HiSortAscending";
import { HiSortDescending } from "@react-icons/all-files/hi/HiSortDescending";
import { CardType } from "@src/types/musicBookCard";
import { SORT_ORDER_MAP } from "@lib/constant";
import { useArticleBlockBgColorModeValue, useTealColorModeValue } from "@lib/hooks";
import { ListAlign, ResponsiveGridAlign } from "@components/align";

interface Props {
  children: ReactNode;
  sortOrderState: [SortOrderType, Dispatch<SetStateAction<SortOrderType>>];
  sortOrderDirectionState: [SortOrderDirection, Dispatch<SetStateAction<SortOrderDirection>>];
  initCardType?: CardType;
  ungrid?: boolean;
  gridItemMinWidth?: number;
}

export const CardList: FC<Props> = ({
  children,
  initCardType = "list",
  sortOrderState,
  sortOrderDirectionState,
  ungrid = false,
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
              {SORT_ORDER_MAP[sortOrder]}
            </MenuButton>
            <MenuList>
              {Object.keys(SORT_ORDER_MAP).map((itm, idx) => (
                <MenuItem onClick={() => setSortOrder(itm as SortOrderType)} key={idx}>
                  {SORT_ORDER_MAP[itm as SortOrderType]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {cardType === "list" ? (
        <ListAlign>{listItems}</ListAlign>
      ) : ungrid ? (
        <>{listItems}</>
      ) : (
        <ResponsiveGridAlign itemMinWidth={gridItemMinWidth}>{listItems}</ResponsiveGridAlign>
      )}
    </>
  );
};
