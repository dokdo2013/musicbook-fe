import defaultProfileImage from "@public/images/mypage/default-profile-image.jpeg";

import { FC, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import {
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { GLOBAL_PADDING_3, MUSICBOOK_URL_KEYS } from "@lib/constant";
import { getBooks, getMusicBooks, openModal } from "@lib/functions";
import {
  useCardBorderColorModeValue,
  useResponsive,
  useSortOrderDriectionState,
  useSortOrderState,
  useTealColorModeValue,
} from "@lib/hooks";
import { CardList } from "@components/musicBookCard";
import { Article, ArticleBlock, ArticleBannerBlock } from "@components/article/modules";
import { Book, MusicBook } from "@src/types/musicBookCard";
import { renderMusicBookCards } from "@components/musicBookCard";
import { renderBookCards } from "@components/musicBookCard/bookCards";

const MypageBookmarkCustomTab: FC<{ children: ReactNode }> = ({ children }) => {
  const tabDefaultBgColor = useColorModeValue("gray.100", "gray.600");
  const teelColor = useTealColorModeValue();
  const selectedTextColor = useColorModeValue("white", "gray.700");

  return (
    <Tab
      bg={tabDefaultBgColor}
      borderRadius=".8em .8em 0 0"
      fontWeight="bold"
      _selected={{
        bg: teelColor,
        color: selectedTextColor,
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
  const musicCardListSortOrderTypeState = useSortOrderState("newest");
  const musicCardListSortOrderDirectionTypeState = useSortOrderDriectionState("asc");
  const bookCardListSortOrderTypeState = useSortOrderState("newest");
  const bookCardListSortOrderDirectionTypeState = useSortOrderDriectionState("asc");
  const { isMobile } = useResponsive();
  const { data, status } = useSession();
  const dispatch = useDispatch();
  const borderColor = useCardBorderColorModeValue();
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
            <TabPanels border="1px" borderColor={borderColor} borderRadius="0 0 .8em .8em">
              <TabPanel>
                <CardList
                  initCardType="grid"
                  sortOrderState={musicCardListSortOrderTypeState}
                  sortOrderDirectionState={musicCardListSortOrderDirectionTypeState}
                  gridItemMinWidth={isMobile ? 100 : 150}
                  ungrid={!demoMusicBooks}
                >
                  {renderMusicBookCards(demoMusicBooks, isMobile ? "250px" : "350px")}
                </CardList>
              </TabPanel>
              <TabPanel>
                <CardList
                  initCardType="grid"
                  sortOrderState={bookCardListSortOrderTypeState}
                  sortOrderDirectionState={bookCardListSortOrderDirectionTypeState}
                  gridItemMinWidth={isMobile ? 100 : 150}
                  ungrid={!demoBooks}
                >
                  {renderBookCards(demoBooks, isMobile ? "250px" : "350px")}
                </CardList>
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
              border: 1px solid ${borderColor};
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
