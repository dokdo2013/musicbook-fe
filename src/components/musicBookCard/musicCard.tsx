import { FC } from "react";
import { CardType, MusicCardProps } from "@src/types/musicBookCard";
import { useDispatch } from "react-redux";
import { selectMusic } from "@lib/functions";
import { GridTypeCard } from "./gridTypeCard";
import { ListTypeCard } from "./listTypeCard";

interface Props extends MusicCardProps {
  cardType?: CardType;
}

export const MusicCard: FC<Props> = ({ music, cardType = "list", onClick }) => {
  const dispatch = useDispatch();
  const bookMarkedText = "수록곡이 북마크됐습니다!";
  const unBookMarkedText = "수록곡 북마크가 해제됐습니다.";
  const defaultOnClick = () => {
    selectMusic(dispatch, music);
  };

  return (
    <>
      {cardType === "list" ? (
        <ListTypeCard
          thumbnailSrc={music.thumbnailSrc}
          broadcasterProfileSrc={music.broadcasterProfileSrc}
          titleText={music.songTitle}
          subTitleText={music.authorName}
          broadcasterName={music.broadcasterName}
          bookMarkedText={bookMarkedText}
          unBookMarkedText={unBookMarkedText}
          categoryName={music.categoryName}
          categoryColor={music.categoryColor}
          onClick={onClick || defaultOnClick}
        />
      ) : (
        <GridTypeCard
          thumbnailSrc={music.thumbnailSrc}
          broadcasterProfileSrc={music.broadcasterProfileSrc}
          titleText={music.songTitle}
          subTitleText={music.authorName}
          broadcasterName={music.broadcasterName}
          bookMarkedText={bookMarkedText}
          unBookMarkedText={unBookMarkedText}
          categoryName={music.categoryName}
          categoryColor={music.categoryColor}
          onClick={onClick || defaultOnClick}
        />
      )}
    </>
  );
};
