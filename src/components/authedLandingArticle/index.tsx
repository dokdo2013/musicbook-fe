import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.jpg";

import { useResponsive } from "@lib/hooks";
import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Article, ArticleBlock, ArticleList, ArticleListItem } from "@components/article";
import { BookGridCard, MusicGridCard, MusicListCard } from "@components/musicBookCard";
import { ListAlign, ResponsiveGridAlign, ResponsiveMutiItemCarousel } from "@components/align";
import { ArticleBannerBlock } from "@components/article/articleBannerBlock";

export const AuthedLandingArticle: FC = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <Article>
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
          <ArticleBlock height={isMobile ? "300px" : "500px"} title="🌟 인기 노래책">
            <ListAlign>
              <MusicListCard
                thumbnailSrc={testImage1}
                songTitle="Ahoy!! 우리는 호쇼해적단"
                authorName="호쇼 마린"
                broadcasterName="betaman"
                broadcasterProfileSrc={testImage2}
                categoryName="J-POP"
              />
              <MusicListCard
                thumbnailSrc={testImage1}
                songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
                authorName="호쇼 마린"
                broadcasterName="betaman"
                broadcasterProfileSrc={testImage2}
                categoryName="J-POP"
              />
              <MusicListCard
                thumbnailSrc={testImage1}
                songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
                authorName="호쇼 마린"
                broadcasterName="betaman"
                broadcasterProfileSrc={testImage2}
                categoryName="J-POP"
              />
              <MusicListCard
                thumbnailSrc={testImage1}
                songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
                authorName="호쇼 마린"
                broadcasterName="betaman"
                broadcasterProfileSrc={testImage2}
                categoryName="J-POP"
              />
              <MusicListCard
                thumbnailSrc={testImage1}
                songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
                authorName="호쇼 마린"
                broadcasterName="betaman"
                broadcasterProfileSrc={testImage2}
                categoryName="J-POP"
              />
            </ListAlign>
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
        <ArticleBlock title="🎙️ 추천 스트리머">
          <ResponsiveMutiItemCarousel>
            <BookGridCard
              thumbnailSrc={testImage2}
              bookTitle="베타맨의 노래책"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
            />
          </ResponsiveMutiItemCarousel>
        </ArticleBlock>
        <ArticleBlock title="📚 새로 올라온 노래책">
          <ResponsiveGridAlign>
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
            <MusicGridCard
              thumbnailSrc={testImage1}
              songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
              authorName="호쇼 마린"
              broadcasterName="betaman"
              broadcasterProfileSrc={testImage2}
              categoryName="J-POP"
            />
          </ResponsiveGridAlign>
        </ArticleBlock>
      </Article>
    </>
  );
};
