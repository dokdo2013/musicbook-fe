import { FC } from "react";
import { CardType, MusicBookCardProps } from "@src/types/musicBookCard";
import { useDispatch } from "react-redux";
import { selectMusicBook } from "@lib/functions";
import { GridTypeCard } from "./gridTypeCard";
import { ListTypeCard } from "./listTypeCard";

interface Props extends MusicBookCardProps {
  cardType?: CardType;
}

export const MusicBookCard: FC<Props> = ({ musicBook, cardType = "list", onClick }) => {
  const dispatch = useDispatch();
  const bookMarkedText = "수록곡이 북마크됐습니다!";
  const unBookMarkedText = "수록곡 북마크가 해제됐습니다.";
  const defaultOnClick = () => {
    selectMusicBook(dispatch, musicBook);
  };

  return (
    <>
      {cardType === "list" ? (
        <ListTypeCard
          thumbnailSrc={musicBook.music.thumbnailSrc}
          broadcasterProfileSrc={musicBook.music.broadcasterProfileSrc}
          titleText={musicBook.music.songTitle}
          subTitleText={musicBook.music.authorName}
          broadcasterName={musicBook.music.broadcasterName}
          bookMarkedText={bookMarkedText}
          unBookMarkedText={unBookMarkedText}
          categoryName={musicBook.music.categoryName}
          categoryColor={musicBook.music.categoryColor}
          onClick={onClick || defaultOnClick}
        />
      ) : (
        <GridTypeCard
          thumbnailSrc={musicBook.music.thumbnailSrc}
          broadcasterProfileSrc={musicBook.music.broadcasterProfileSrc}
          titleText={musicBook.music.songTitle}
          subTitleText={musicBook.music.authorName}
          broadcasterName={musicBook.music.broadcasterName}
          bookMarkedText={bookMarkedText}
          unBookMarkedText={unBookMarkedText}
          categoryName={musicBook.music.categoryName}
          categoryColor={musicBook.music.categoryColor}
          onClick={onClick || defaultOnClick}
        />
      )}
    </>
  );
};
