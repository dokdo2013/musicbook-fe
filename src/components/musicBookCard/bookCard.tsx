import { FC } from "react";
import { BookGridCard } from "./bookGridCard";
import { BookListCard } from "./bookListCard";
import { BookCardProps, CardType } from "@src/types/musicBookCard";

interface Props extends BookCardProps {
  cardType?: CardType;
}

export const BookCard: FC<Props> = ({
  thumbnailSrc,
  bookTitle,
  broadcasterName,
  broadcasterProfileSrc,
  cardType = "list",
}) => {
  return (
    <>
      {cardType === "list" ? (
        <BookListCard
          thumbnailSrc={thumbnailSrc}
          bookTitle={bookTitle}
          broadcasterName={broadcasterName}
          broadcasterProfileSrc={broadcasterProfileSrc}
        />
      ) : (
        <BookGridCard
          thumbnailSrc={thumbnailSrc}
          bookTitle={bookTitle}
          broadcasterName={broadcasterName}
          broadcasterProfileSrc={broadcasterProfileSrc}
        />
      )}
    </>
  );
};
