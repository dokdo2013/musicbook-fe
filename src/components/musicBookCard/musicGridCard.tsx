import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useCardBgColorModeValue, useCardBorderColorModeValue, useResponsive } from "@lib/hooks";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { MusicCardProps } from "@src/types/musicBookCard";

interface Props extends MusicCardProps {
  maxWidth?: number;
}

export const MusicGridCard: FC<Props> = ({
  thumbnailSrc,
  songTitle,
  authorName,
  categoryName,
  broadcasterName,
  broadcasterProfileSrc,
  categoryColor,
  maxWidth,
  onClick,
}) => {
  const titleDivRef = useRef<HTMLDivElement>(null);
  const titleSpanRef = useRef<HTMLSpanElement>(null);
  const [isTitleOverflowed, setIsTitleOverflowed] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();
  const toast = useToast();
  const bgColor = useCardBgColorModeValue();
  const borderColor = useCardBorderColorModeValue();

  useEffect(() => {
    const titleDiv = titleDivRef.current;
    const titleSpan = titleSpanRef.current;

    const getOverflowed = () => {
      if (titleDiv && titleSpan && titleDiv.offsetWidth < titleSpan.offsetWidth) {
        setIsTitleOverflowed(true);
      } else {
        setIsTitleOverflowed(false);
      }
    };

    setTimeout(getOverflowed, 100);
    window.addEventListener("resize", getOverflowed);
  }, [isLoading, isPC, isTablet, isMobile, songTitle]);

  return (
    <>
      <div
        className="music-card-wrap grid"
        style={{
          backgroundColor: bgColor,
          border: borderColor,
          boxShadow: `0 0 3px ${borderColor}`,
        }}
        onClick={onClick}
      >
        <div className="image-content">
          <Image src={thumbnailSrc} alt="" style={{ width: "100%", height: "auto" }} />
          <Box
            bg={categoryColor ? `${categoryColor}.100` : "green.100"}
            color={categoryColor ? `${categoryColor}.700` : "green.700"}
            fontSize="2xs"
            fontWeight="bold"
            p=".2em .5em"
            borderRadius="0 .8em 0 0"
            style={{ position: "absolute", bottom: "0", left: "0", width: "max-content" }}
          >
            {categoryName}
          </Box>
          <div
            className="bookmark-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
              toast({
                title: !isBookmarked ? "수록곡이 북마크됐어요!" : "수록곡 북마크가 해제됐어요",
                description: songTitle,
                status: "info",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            <Icon
              icon={faSolidBookmark}
              height={50}
              style={{
                position: "absolute",
                top: "-5px",
                right: "10px",
                color: isBookmarked ? "#4FD1C5" : "#ccccccaa",
                transition: "0.2s",
              }}
            />
          </div>
        </div>
        <div className="text-content">
          <div
            ref={titleDivRef}
            className={`title ${isTitleOverflowed ? "scroll" : ""}`}
            data-title={songTitle}
          >
            <span ref={titleSpanRef}>{songTitle}</span>
          </div>
          <div className="author">{authorName}</div>
          <div className="broadcaster">
            <Image
              src={broadcasterProfileSrc}
              alt=""
              width={14}
              height={14}
              style={{
                display: "inline-block",
                marginBottom: "-2px",
                marginRight: "3px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
            {broadcasterName}
          </div>
        </div>
      </div>
      <style jsx>{`
        .music-card-wrap {
          display: flex;
          justify-content: center;
          align-items: space-between;
          flex-direction: column;
          position: relative;
          width: 100%;
          ${maxWidth && `max-width: ${maxWidth}px;`}
          height: max-content;
          border-radius: 10px;
          transition: 0.2s;
          overflow: hidden;

          .image-content {
            position: relative;
            display: block;
            width: 100%;
            height: max-content;

            .bookmark-btn {
              &:hover {
                cursor: pointer;
              }
            }
          }

          .text-content {
            display: block;
            position: relative;
            width: 100%;
            height: max-content;
            padding: 10px;
            overflow: hidden;

            .title,
            .author {
              position: relative;
              width: 100%;
              max-width: 100%;
              display: block;
              white-space: nowrap;
              overflow: hidden;
            }

            .author {
              font-size: 12px;
              text-overflow: ellipsis;
            }

            .broadcaster {
              position: relative;
              margin-left: auto;
              margin-right: 0;
              margin-top: 10px;
              text-align: right;
              display: block;
              width: 100%;
              max-width: calc(100% - 10px);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 14px;
            }

            .title {
              display: block;
              font-size: 14px;
              font-weight: bold;
              height: 1.5em;

              span {
                opacity: 0;
              }

              &::before {
                content: attr(data-title);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                max-width: 100%;
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              @keyframes text-scroll1 {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% - 1em));
                }
              }
              @keyframes text-scroll2 {
                from {
                  transform: translateX(calc(100% + 1em));
                }
                to {
                  transform: translateX(0);
                }
              }
            }
          }
        }

        .music-card-wrap:hover {
          cursor: pointer;
          background-color: rgb(247, 247, 247);

          .title.scroll {
            &::before {
              animation: text-scroll1 5s 1s linear infinite;
              width: auto;
              max-width: none;
              overflow: visible;
              text-overflow: unset;
            }
            &::after {
              content: attr(data-title);
              position: absolute;
              top: 0;
              left: 0;
              transform: translateX(calc(100% + 1em));
              animation: text-scroll2 5s 1s linear infinite;
            }
          }
        }
      `}</style>
    </>
  );
};
