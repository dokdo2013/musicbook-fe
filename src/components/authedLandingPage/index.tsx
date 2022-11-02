import { FOOTER_HEIGHT_PX, HEADER_HEIGHT_PX, MAX_FRAME_WIDTH_PX } from "@lib/constant";
import { useResponsive } from "@lib/hooks";
import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import { CommonSideBar } from "@components/sideBar";
import { Article, ArticleBlock } from "@components/article";
import { MusicGridCard, MusicListCard } from "../musicCard";

import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.png";

export const AuthedLandingPage: FC = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <div className={`main-wrap ${isMobile && "mobile"}`}>
        <div className="content">
          <CommonSideBar />
          <Article>
            <ArticleBlock height="100px">GWAN-GO IS CRAZY 광고배너</ArticleBlock>
            <Stack
              spacing={isMobile ? 0 : 2}
              direction={isMobile ? "column" : "row"}
              align="center"
              width="100%"
            >
              <ArticleBlock height="500px" title="🌟 인기 노래책">
                <Stack spacing={2} direction="column" align="center">
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
                </Stack>
              </ArticleBlock>
              <ArticleBlock height="500px" title="📌 공지사항 & 이벤트">
                a
              </ArticleBlock>
            </Stack>
            <ArticleBlock height="200px" title="🎙️ 추천 스트리머">
              a
            </ArticleBlock>
            <ArticleBlock height="500px" title="📚 새로 올라온 노래책">
              <MusicGridCard
                thumbnailSrc={testImage1}
                songTitle="Ahoy!! 우리는 호쇼해적단 (Ahoy!! 我ら宝鐘海賊団☆)"
                authorName="호쇼 마린"
                broadcasterName="betaman"
                broadcasterProfileSrc={testImage2}
                categoryName="J-POP"
              />
            </ArticleBlock>
          </Article>
        </div>
      </div>
      <style jsx>{`
        .scrollable-box {
          display: block;
          position: relative;
          width: 100%;
          height: 400px;
          overflow-x: hidden;
          overflow-y: scroll;
        }

        .main-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: calc(100% - ${HEADER_HEIGHT_PX}px - ${FOOTER_HEIGHT_PX}px);
          overflow: hidden;

          .content {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: ${MAX_FRAME_WIDTH_PX}px;
            height: 100%;
          }
        }
        .main-wrap.mobile {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
