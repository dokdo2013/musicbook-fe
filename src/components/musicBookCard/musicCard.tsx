import { FC } from "react";
import { CardType, MusicCardProps } from "@src/types/musicBookCard";
import { MusicGridCard } from "./musicGridCard";
import { MusicListCard } from "./musicListCard";
import { useDispatch } from "react-redux";
import { selectMusic } from "@lib/functions";

interface Props extends MusicCardProps {
  cardType?: CardType;
}

export const MusicCard: FC<Props> = ({ music, cardType = "list", onClick }) => {
  const dispatch = useDispatch();
  const defaultOnClick = () => {
    selectMusic(dispatch, music);
  };

  return (
    <>
      {cardType === "list" ? (
        <MusicListCard music={music} onClick={onClick || defaultOnClick} />
      ) : (
        <MusicGridCard music={music} onClick={onClick || defaultOnClick} />
      )}
    </>
  );
};
