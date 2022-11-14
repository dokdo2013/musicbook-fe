import { FC } from "react";
import { CardType, MusicCardProps } from "@src/types/musicBookCard";
import { MusicGridCard } from "./musicGridCard";
import { MusicListCard } from "./musicListCard";

interface Props extends MusicCardProps {
  cardType?: CardType;
}

export const MusicCard: FC<Props> = ({
  thumbnailSrc,
  songTitle,
  authorName,
  categoryName,
  broadcasterName,
  broadcasterProfileSrc,
  categoryColor,
  cardType = "list",
  onClick,
}) => {
  return (
    <>
      {cardType === "list" ? (
        <MusicListCard
          thumbnailSrc={thumbnailSrc}
          songTitle={songTitle}
          authorName={authorName}
          categoryName={categoryName}
          broadcasterName={broadcasterName}
          broadcasterProfileSrc={broadcasterProfileSrc}
          categoryColor={categoryColor}
          onClick={onClick}
        />
      ) : (
        <MusicGridCard
          thumbnailSrc={thumbnailSrc}
          songTitle={songTitle}
          authorName={authorName}
          categoryName={categoryName}
          broadcasterName={broadcasterName}
          broadcasterProfileSrc={broadcasterProfileSrc}
          categoryColor={categoryColor}
          onClick={onClick}
        />
      )}
    </>
  );
};
