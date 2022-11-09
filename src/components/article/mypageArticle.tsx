import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.jpg";

import { FC, ReactNode } from "react";
import { Article, ArticleBlock, ArticleBannerBlock } from "@components/article/modules";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ResponsiveGridAlign } from "@components/align";
import { BookGridCard, MusicGridCard } from "@components/musicBookCard";
import { useResponsive } from "@lib/hooks";

const MypageBookmarkCustomTab: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Tab
      bg="gray.100"
      borderRadius=".8em .8em 0 0"
      fontWeight="bold"
      _selected={{
        bg: "teal.500",
        color: "white",
      }}
    >
      {children}
    </Tab>
  );
};

export const MypageArticle: FC = () => {
  const { isMobile } = useResponsive();

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
            <TabList style={{ borderBottom: "none" }} mb={"2px"}>
              <MypageBookmarkCustomTab>🎶 수록곡</MypageBookmarkCustomTab>
              <MypageBookmarkCustomTab>📚 노래책</MypageBookmarkCustomTab>
            </TabList>
            <TabPanels border={"1px solid #eee"} borderRadius="0 0 .8em .8em">
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
