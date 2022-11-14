import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.jpg";

import { useResponsive } from "@lib/hooks";
import { Stack } from "@chakra-ui/react";
import { FC, useState } from "react";
import {
  Article,
  ArticleBlock,
  ArticleList,
  ArticleListItem,
  ArticleBannerBlock,
} from "@components/article/modules";
import { BookGridCard, CardList } from "@components/musicBookCard";
import { ResponsiveMutiItemCarousel } from "@components/align";
import { demoBookObject, demoMusicObject, MUSICBOOK_URL_KEYS } from "@lib/constant";
import { MusicCard } from "@components/musicBookCard/musicCard";

interface Props {
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

export const AuthedLandingArticle: FC<Props> = ({ page, pageParam }) => {
  const { isMobile } = useResponsive();
  const musicCardPopularityListSortOrderTypeState = useState<SortOrderType>("newest");
  const musicCardPopularityListSortOrderDriectionTypeState = useState<SortOrderDirection>("asc");
  const musicCardNewestListSortOrderTypeState = useState<SortOrderType>("newest");
  const musicCardNewestListSortOrderDriectionTypeState = useState<SortOrderDirection>("asc");

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
