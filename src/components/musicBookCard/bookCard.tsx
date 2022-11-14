import { FC } from "react";
import { BookGridCard } from "./bookGridCard";
import { BookListCard } from "./bookListCard";
import { BookCardProps, CardType } from "@src/types/musicBookCard";

interface Props extends BookCardProps {
  cardType?: CardType;
}

export const BookCard: FC<Props> = ({ book, onClick, cardType = "list" }) => {
  return (
    <>
      {cardType === "list" ? (
        <BookListCard book={book} onClick={onClick} />
      ) : (
        <BookGridCard book={book} onClick={onClick} />
      )}
    </>
  );
};
