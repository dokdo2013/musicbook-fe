import { FC } from "react";
import { Stack } from "@chakra-ui/react";
import {
  Article,
  ArticleBlock,
  ArticleList,
  ArticleListItem,
  ArticleBannerBlock,
} from "@components/article/modules";
import { BookGridCard, CardList } from "@components/musicBookCard";
import { ResponsiveMutiItemCarousel } from "@components/align";
import { MusicCard } from "@components/musicBookCard/musicCard";
import { demoBookObject, demoMusicObject, MUSICBOOK_URL_KEYS } from "@lib/constant";
import { useResponsive, useSortOrderDriectionState, useSortOrderState } from "@lib/hooks";

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
            >
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
              <MusicCard music={demoMusicObject} />
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
            <BookGridCard book={demoBookObject} />
          </ResponsiveMutiItemCarousel>
        </ArticleBlock>
        <ArticleBlock title="📚 새로 올라온 수록곡">
          <CardList
            initCardType="grid"
            sortOrderState={musicCardNewestListSortOrderTypeState}
            sortOrderDirectionState={musicCardNewestListSortOrderDriectionTypeState}
            gridItemMinWidth={isMobile ? 120 : 150}
          >
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
            <MusicCard music={demoMusicObject} />
          </CardList>
        </ArticleBlock>
      </Article>
    </>
  );
};
