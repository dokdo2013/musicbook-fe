import { FC } from "react";
import { BookCardProps, CardType } from "@src/types/musicBookCard";
import { GridTypeCard } from "./gridTypeCard";
import { ListTypeCard } from "./listTypeCard";

interface Props extends BookCardProps {
  cardType?: CardType;
}

export const BookCard: FC<Props> = ({ book, onClick, cardType = "list" }) => {
  const bookMarkedText = "노래책이 북마크됐습니다!";
  const unBookMarkedText = "노래책 북마크가 해제됐습니다.";

  return (
    <>
      {cardType === "list" ? (
        <ListTypeCard
          thumbnailSrc={book.thumbnailSrc}
          broadcasterProfileSrc={book.broadcasterProfileSrc}
          titleText={book.bookTitle}
          subTitleText={`${book.registedSongCount}곡 수록`}
          broadcasterName={book.broadcasterName}
          bookMarkedText={bookMarkedText}
          unBookMarkedText={unBookMarkedText}
          onClick={onClick}
        />
      ) : (
        <GridTypeCard
          thumbnailSrc={book.thumbnailSrc}
          broadcasterProfileSrc={book.broadcasterProfileSrc}
          titleText={book.bookTitle}
          subTitleText={`${book.registedSongCount}곡 수록`}
          broadcasterName={book.broadcasterName}
          bookMarkedText={bookMarkedText}
          unBookMarkedText={unBookMarkedText}
          onClick={onClick}
        />
      )}
    </>
  );
};
