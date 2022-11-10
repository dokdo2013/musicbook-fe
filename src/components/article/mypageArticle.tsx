import testImage1 from "@public/images/test/test1.png";
import testImage2 from "@public/images/test/test2.jpg";
import defaultProfileImage from "@public/images/mypage/default-profile-image.jpeg";

import { FC, ReactNode } from "react";
import { Article, ArticleBlock, ArticleBannerBlock } from "@components/article/modules";
import { Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ResponsiveGridAlign } from "@components/align";
import { BookGridCard, MusicGridCard } from "@components/musicBookCard";
import { useResponsive } from "@lib/hooks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { GLOBAL_PADDING_3, MUSICBOOK_URL_KEYS } from "@lib/constant";
import { openModal } from "@lib/functions";
import { useDispatch } from "react-redux";

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

interface Props {
  page: MUSICBOOK_URL_KEYS | null;
  pageParam: string | null;
}

export const MypageArticle: FC<Props> = ({ page, pageParam }) => {
  const { isMobile } = useResponsive();
  const { data, status } = useSession();
  const dispatch = useDispatch();

  return (
    <>
      <Article page={page} pageParam={pageParam}>
        <ArticleBannerBlock height="100px">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </ArticleBannerBlock>
        <ArticleBlock title="😎 계정설정">
          <div className="mypage-content-wrap">
            <div className="profile-wrap">
              <div className="profile-image">
                <Image
                  src={data?.user?.image || defaultProfileImage}
                  fill={true}
                  alt=""
                  placeholder="blur"
                  blurDataURL={data?.user?.image || defaultProfileImage.blurDataURL}
                />
              </div>
              <div className="profile-text">
                <div className="nickname">{status === "authenticated" ? data.user?.name : ""}</div>
                <div className="description">자기소개</div>
              </div>
            </div>
            <div className="btn-wrap">
              <Stack direction="row" align="center" spacing={2}>
                <Button
                  size={"md"}
                  width="100%"
                  onClick={() => openModal("editProfile", dispatch, true)}
                >
                  프로필수정
                </Button>
                <Button
                  size={"md"}
                  width="100%"
                  onClick={() => openModal("configAccount", dispatch, true)}
                >
                  계정연동/관리
                </Button>
              </Stack>
            </div>
          </div>
        </ArticleBlock>
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
      <style jsx>{`
        .mypage-content-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          max-width: 500px;
          padding: ${GLOBAL_PADDING_3}px;
          margin: 0 auto;

          .profile-wrap {
            --profile-image-size: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            position: relative;
            width: 100%;
            overflow: hidden;

            .profile-image {
              position: relative;
              width: var(--profile-image-size);
              min-width: var(--profile-image-size);
              height: var(--profile-image-size);
              min-height: var(--profile-image-size);
              border: 1px solid #eee;
              border-radius: 50%;
              overflow: hidden;
            }
            .profile-text {
              position: relative;
              width: calc(100% - var(--profile-image-size) - 20px);

              .nickname {
                font-weight: bold;
                font-size: 24px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .description {
                font-size: 16px;
              }
            }
          }

          .btn-wrap {
            position: relative;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};
