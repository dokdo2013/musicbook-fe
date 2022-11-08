import imageMain1 from "@public/images/main/main-1.png";

import { FC } from "react";
import Image from "next/image";
import { Button, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { GLOBAL_PADDING_1, GLOBAL_PADDING_2, MAX_FRAME_WIDTH_PX } from "@lib/constant";
import { useResponsive } from "@lib/hooks";
import { openLoginModal } from "@lib/functions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const UnauthedLadingArticle: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status } = useSession();
  const { isMobile, isTablet, isLoading } = useResponsive();

  const startMusicBookBtnOnClick = async () => {
    if (status === "unauthenticated") await openLoginModal(dispatch, true);
    else if (status === "authenticated") await router.push("/main");
  };

  return (
    <>
      <div className={`section section-1 ${isMobile ? "mobile" : ""}`}>
        <div className="content">
          <div className="subtitle-wrap">
            <div className="subtitle-1">
              <span>
                <span className="bold">편리한 신청곡 관리</span>로 보다
              </span>
              <span>풍성한 음악 방송을 만드세요</span>
            </div>
            <div className="subtitle-2">
              <ul>
                <li>도네이션 신청곡 접수</li>
                <li>나의 노래책 관리</li>
                <li>신청곡 채팅 명령어</li>
                <li>플레이리스트 오버레이</li>
              </ul>
            </div>
            <div className="subtitle-3">
              <Stack spacing={4} direction="row" align="center">
                <Button
                  borderRadius="2em"
                  fontWeight="bold"
                  paddingLeft="2em"
                  paddingRight="2em"
                  colorScheme="teal"
                  onClick={startMusicBookBtnOnClick}
                >
                  지금 시작하기
                </Button>
                <Button
                  borderRadius="2em"
                  fontWeight="bold"
                  paddingLeft="2em"
                  paddingRight="2em"
                  colorScheme="gray"
                >
                  더 알아보기
                </Button>
              </Stack>
            </div>
          </div>
          <div className="img">
            <Image src={imageMain1} alt="" />
          </div>
        </div>
      </div>
      <div className={`section section-2 ${isMobile ? "mobile" : ""}`}>
        <div className="content">
          <div className="content-left"></div>
          <div className="content-right">
            <div className="text-1">간편하게 관리하는 노래책</div>
            <div className="text-2">
              내가 좋아하는 노래, 내가 잘 부르는 노래를 복잡한 설정 없이 노래책으로 만들고 추가할 수
              있습니다. 시청자들이 간편하게 신청곡을 접수할 수 있도록 깔끔한 UI를 제공합니다.
            </div>
          </div>
        </div>
      </div>
      <div className={`section section-3 ${isMobile ? "mobile" : ""}`}>
        <div className="content">
          <div className="content-left">
            <div className="text-1">노래책으로 신청곡 받기</div>
            <div className="text-2">
              내 노래책에 등록된 곡을 채팅 명령어, 도네이션을 통해 신청곡으로 접수 받을 수 있습니다.
              내 노래책 페이지에서 신청곡 목록을 한 눈에 확인하고 MR을 재생 할 수 있습니다.
            </div>
          </div>
          <div className="content-right"></div>
        </div>
      </div>
      <div className={`section section-4 ${isMobile ? "mobile" : ""}`}>
        <div className="content">
          <div className="content-left"></div>
          <div className="content-right">
            <div className="text-1">방송화면에 플레이리스트 추가하기</div>
            <div className="text-2">
              노래책을 통해 접수된 신청곡 목록은 Xsplit, OBS Studio 등의 방송 프로그램에
              플레이리스트 오버레이로 간단히 추가할 수 있습니다.
            </div>
          </div>
        </div>
      </div>
      <div className={`section section-5 ${isMobile ? "mobile" : ""}`}>
        <div className="content">
          <div className="text">
            쉽고 깔끔한 신청곡 관리 서비스 “노래책”으로 풍성한 음악 방송을 만들어보세요!
          </div>
          <Button
            borderRadius="2em"
            fontWeight="bold"
            paddingLeft="2em"
            paddingRight="2em"
            colorScheme="teal"
            onClick={startMusicBookBtnOnClick}
          >
            지금 시작하기
          </Button>
        </div>
      </div>
      <style jsx global>{`
        .main-wrap {
          height: max-content !important;

          & > .content {
            display: block !important;
            height: max-content !important;
          }
        }
      `}</style>
      <style jsx>{`
        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          z-index: 2;
          overflow: hidden;

          .content {
            display: flex;
            justify-content: center;
            align-content: center;
            position: relative;
            width: 100%;
            max-width: ${MAX_FRAME_WIDTH_PX}px;
            height: 100%;
            padding: 0 ${GLOBAL_PADDING_1}px;
          }

          &.section-1 {
            height: 520px;
            z-index: 1;

            .content {
              display: block;

              .subtitle-wrap {
                position: absolute;
                top: 50%;
                left: ${GLOBAL_PADDING_1}px;
                transform: translateY(-50%);

                .subtitle-1 {
                  & > span {
                    display: block;
                    font-size: 32px;
                    font-weight: bold;

                    .bold {
                      color: #319795;
                    }
                  }
                }
                .subtitle-2 {
                  ul {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    color: #242424;
                    width: max-content;
                    margin-top: 20px;
                    padding: 1em 1.5em;
                    background-color: rgba(255, 255, 255, 0.8);
                    border-radius: 1em;

                    li {
                      margin-left: 1em;
                      font-size: 18px;

                      &:nth-of-type(1) {
                        margin-bottom: 0.2em;
                      }
                      &:nth-of-type(2n) {
                        margin-left: 1.5em;
                      }
                    }
                  }
                }
                .subtitle-3 {
                  margin-top: 30px;
                }
              }

              .img {
                position: absolute;
                top: 80px;
                right: 10px;
                width: 600px;
                opacity: ${isLoading || isMobile || isTablet ? 0.4 : 1};
                z-index: -1;
              }
            }
          }
          &.section-3 {
            .content-left {
              width: 105%;
            }
            .content-right {
              width: 95%;
            }
          }
          &.section-5 {
            height: 250px;

            .content {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              .text {
                word-break: keep-all;
                max-width: 350px;
                height: max-content;
                margin-bottom: 30px;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                color: #2d3748;
              }
            }
          }
          &.section-2,
          &.section-3,
          &.section-4 {
            height: 400px;

            .content-left {
              padding-left: ${GLOBAL_PADDING_1 * 2}px;
            }
            .content-right {
              padding-right: ${GLOBAL_PADDING_1 * 2}px;
            }
            .content-left,
            .content-right {
              position: relative;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex-direction: column;

              .text-1 {
                font-size: 24px;
                font-weight: bold;
                color: #2d3748;
                margin-bottom: 10px;
              }
              .text-2 {
                font-size: 14px;
                color: #4a5568;
              }
            }
          }
          &.section-2,
          &.section-4 {
            background-color: #ffffff;
            .content-left {
              width: 95%;
            }
            .content-right {
              width: 105%;
            }
          }
          &.section-1,
          &.section-3,
          &.section-5 {
            background-color: #edf2f7;
          }
        }

        .section.mobile {
          &.section-1 {
            height: 420px;
            z-index: 1;

            .content {
              .subtitle-wrap {
                .subtitle-1 {
                  & > span {
                    font-size: 22px;
                  }
                }
                .subtitle-2 {
                  ul {
                    li {
                      font-size: 12px;
                    }
                  }
                }
              }

              .img {
                width: 400px;
                right: -40px;
                top: auto;
                bottom: -70px;
              }
            }
          }

          &.section-2,
          &.section-3,
          &.section-4 {
            height: 350px;

            .content {
              flex-direction: column;
              padding-bottom: ${GLOBAL_PADDING_2}px;

              .content-left,
              .content-right {
                padding: 0;
                width: 100%;
              }
            }
          }
          &.section-2,
          &.section-4 {
            .content-left {
              height: 120%;
            }
            .content-right {
              height: 80%;
            }
          }
          &.section-3 {
            .content-left {
              order: 2;
              height: 80%;
            }
            .content-right {
              height: 120%;
            }
          }
        }
      `}</style>
    </>
  );
};
