import { FC, useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import {
  Article,
  ArticleBlock,
  ArticleList,
  ArticleListItem,
  ArticleBannerBlock,
} from "@components/article/modules";
import { CardList } from "@components/musicBookCard";
import { ResponsiveMutiItemCarousel } from "@components/align";
import { MUSICBOOK_URL_KEYS } from "@lib/constant";
import { useResponsive, useSortOrderDriectionState, useSortOrderState } from "@lib/hooks";
import { Book, MusicBook } from "@src/types/musicBookCard";
import { getBooks, getMusicBooks } from "@lib/functions";
import { renderBookCards } from "@components/musicBookCard/bookCards";
import { renderMusicBookCards } from "@components/musicBookCard";

interface Props {
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

export const AuthedLandingArticle: FC<Props> = ({ page, pageParam }) => {
  const { isMobile } = useResponsive();
  const musicCardPopularityListSortOrderTypeState = useSortOrderState("newest");
  const musicCardPopularityListSortOrderDriectionTypeState = useSortOrderDriectionState("asc");
  const musicCardNewestListSortOrderTypeState = useSortOrderState("newest");
  const musicCardNewestListSortOrderDriectionTypeState = useSortOrderDriectionState("asc");
  const [demoMusicBooks, setDemoMusicBooks] = useState<MusicBook[] | null>(null);
  const [demoBooks, setDemoBooks] = useState<Array<Book> | null>(null);

  useEffect(() => {
    getMusicBooks().then((musicBooks) => setDemoMusicBooks(musicBooks));
    getBooks().then((books) => setDemoBooks(books));
  }, []);

  return (
    <>
      <Article page={page} pageParam={pageParam}>
        <ArticleBannerBlock height="100px">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </ArticleBannerBlock>
        <Stack
          spacing={isMobile ? 0 : 2}
          direction={isMobile ? "column" : "row"}
          align="center"
          width="100%"
        >
          <ArticleBlock height={isMobile ? "400px" : "500px"} title="🌟 인기 수록곡">
            <CardList
              initCardType="list"
              sortOrderState={musicCardPopularityListSortOrderTypeState}
              sortOrderDirectionState={musicCardPopularityListSortOrderDriectionTypeState}
              gridItemMinWidth={100}
              ungrid={!demoMusicBooks}
            >
              {renderMusicBookCards(demoMusicBooks, isMobile ? "250px" : "350px")}
            </CardList>
          </ArticleBlock>
          <ArticleBlock height={isMobile ? "300px" : "500px"} title="📌 공지사항 & 이벤트">
            <ArticleList>
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
              <ArticleListItem category="cate" title="타이틀" />
            </ArticleList>
          </ArticleBlock>
        </Stack>
        <ArticleBlock title="🎙️ 추천 노래책">
          <ResponsiveMutiItemCarousel>
            {renderBookCards(demoBooks, "100px", "grid")}
          </ResponsiveMutiItemCarousel>
        </ArticleBlock>
        <ArticleBlock title="📚 새로 올라온 수록곡">
          <CardList
            initCardType="grid"
            sortOrderState={musicCardNewestListSortOrderTypeState}
            sortOrderDirectionState={musicCardNewestListSortOrderDriectionTypeState}
            gridItemMinWidth={isMobile ? 120 : 150}
            ungrid={!demoMusicBooks}
          >
            {renderMusicBookCards(demoMusicBooks, "350px")}
          </CardList>
        </ArticleBlock>
      </Article>
    </>
  );
};
