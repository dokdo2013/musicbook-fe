import { Flex, Spinner } from "@chakra-ui/react";
import { Book, CardType } from "@src/types/musicBookCard";
import { BookCard } from "./bookCard";

export const renderBookCards = (
  books: Book[] | null,
  height: string,
  cardType?: CardType,
  emptyMsg = "등록된 노래책이 없습니다.",
) => {
  if (books === null) {
    return (
      <Flex justifyContent="center" alignItems="center" w="full" height={height}>
        <Spinner colorScheme="teal" size="lg" />
      </Flex>
    );
  } else if (books.length !== 0) {
    return books.map((itm, idx) => <BookCard key={idx} book={itm} cardType={cardType} />);
  } else {
    return (
      <Flex justifyContent="center" alignItems="center" height={height}>
        {emptyMsg}
      </Flex>
    );
  }
};
