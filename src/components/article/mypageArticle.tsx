import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.jpg";

import { FC } from "react";
import { Article, ArticleBlock, ArticleBannerBlock } from "@components/article/modules";
import { SystemStyleObject, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ResponsiveGridAlign } from "@components/align";
import { BookGridCard, MusicGridCard } from "@components/musicBookCard";
import { useResponsive } from "@lib/hooks";

export const MypageArticle: FC = () => {
  const { isMobile } = useResponsive();

  const selectedTabTheme: SystemStyleObject = {
    bg: "green.100",
    borderBottom: "2px solid #38A169",
    borderRadius: ".8em .8em 0 0",
    color: "green.700",
    fontWeight: "bold",
  };

  return (
    <>
      <Article>
        <ArticleBannerBlock height="100px">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </ArticleBannerBlock>
        <ArticleBlock title="😎 마이페이지">마이페이지</ArticleBlock>
        <ArticleBlock title="🔖 노래책 북마크">
          <Tabs isLazy isFitted colorScheme="teal">
            <TabList mb="1em">
              <Tab _selected={selectedTabTheme}>🎶 수록곡</Tab>
              <Tab _selected={selectedTabTheme}>📚 노래책</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ResponsiveGridAlign itemMinWidth={isMobile ? 100 : 150}>
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
              </TabPanel>
              <TabPanel>
                <ResponsiveGridAlign itemMinWidth={isMobile ? 100 : 150}>
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                  <BookGridCard
                    thumbnailSrc={testImage2}
                    bookTitle="베타맨의 노래책"
                    broadcasterName="betaman"
                    broadcasterProfileSrc={testImage2}
                  />
                </ResponsiveGridAlign>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ArticleBlock>
      </Article>
    </>
  );
};
