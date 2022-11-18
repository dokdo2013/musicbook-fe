import { Flex, Spinner } from "@chakra-ui/react";
import { CardType, MusicBook } from "@src/types/musicBookCard";
import { MusicBookCard } from "./musicBookCard";

export const renderMusicBookCards = (
  musicBooks: MusicBook[] | null,
  height: string,
  cardType?: CardType,
  emptyMsg = "등록된 수록곡이 없습니다.",
) => {
  if (musicBooks === null) {
    return (
      <Flex justifyContent="center" alignItems="center" w="full" height={height}>
        <Spinner colorScheme="teal" size="lg" />
      </Flex>
    );
  } else if (musicBooks.length !== 0) {
    return musicBooks.map((itm, idx) => (
      <MusicBookCard key={idx} musicBook={itm} cardType={cardType} />
    ));
  } else {
    return (
      <Flex justifyContent="center" alignItems="center" height={height}>
        {emptyMsg}
      </Flex>
    );
  }
};
