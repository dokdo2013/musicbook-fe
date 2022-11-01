import {
  FOOTER_HEIGHT_PX,
  GLOBAL_PADDING_1,
  GLOBAL_PADDING_2,
  HEADER_HEIGHT_PX,
  MAX_FRAME_WIDTH_PX,
} from "@lib/constant";
import { useResponsive } from "@lib/hooks";
import { Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { SearchCategory, SearchInput } from "@components/searchForm";
import { CommonSideBar } from "@components/sideBar";
import { Article, ArticleBlock } from "@components/article";

export const AuthedLandingPage: FC = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <div className={`main-wrap ${isMobile && "mobile"}`}>
        <div className="content">
          <CommonSideBar />
          <Article>
            <ArticleBlock height="120px">GWAN-GO IS CRAZY 광고배너</ArticleBlock>
            <Stack
              spacing={isMobile ? 0 : 2}
              direction={isMobile ? "column" : "row"}
              align="center"
              width="100%"
            >
              <ArticleBlock height="300px" title="🌟 인기 노래책">
                a
              </ArticleBlock>
              <ArticleBlock height="300px" title="📌 공지사항 & 이벤트">
                a
              </ArticleBlock>
            </Stack>
            <ArticleBlock height="200px" title="🎙️ 추천 스트리머">
              a
            </ArticleBlock>
            <ArticleBlock height="500px" title="📚 새로 올라온 노래책">
              a
            </ArticleBlock>
          </Article>
        </div>
      </div>
      <style jsx>{`
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
