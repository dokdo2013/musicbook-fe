import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useCardBgColorModeValue, useCardBorderColorModeValue, useResponsive } from "@lib/hooks";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { BookCardProps } from "@src/types/musicBookCard";

interface Props extends BookCardProps {
  height?: number;
}

export const BookListCard: FC<Props> = ({
  thumbnailSrc,
  bookTitle,
  broadcasterName,
  broadcasterProfileSrc,
  height = 90,
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
  }, [isLoading, isPC, isTablet, isMobile, bookTitle]);

  return (
    <>
      <div
        className="book-card-wrap list"
        style={{
          backgroundColor: bgColor,
          border: borderColor,
          boxShadow: `0 0 3px ${borderColor}`,
        }}
        onClick={onClick}
      >
        <div className="image-content">
          <Image src={thumbnailSrc} alt="" width={height} height={height} />
        </div>
        <div className="text-content">
          <div
            ref={titleDivRef}
            className={`title ${isTitleOverflowed ? "scroll" : ""}`}
            data-title={bookTitle}
          >
            <span ref={titleSpanRef}>{bookTitle}</span>
          </div>
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
          <div
            className="bookmark-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
              toast({
                title: !isBookmarked ? "노래책이 북마크됐어요!" : "노래책 북마크가 해제됐어요",
                description: bookTitle,
                status: "info",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            <Icon
              icon={faSolidBookmark}
              height={30}
              style={{
                position: "absolute",
                top: "-5px",
                right: "20px",
                color: isBookmarked ? "#4FD1C5" : "#ccccccaa",
                transition: "0.2s",
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .book-card-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          width: 100%;
          height: ${height + 2}px;
          border-radius: 10px;
          transition: 0.2s;
          overflow: hidden;

          .image-content {
            position: relative;
            display: block;
            width: ${height}px;
            height: ${height}px;
          }

          .text-content {
            display: block;
            position: relative;
            width: calc(100% - ${height}px);
            height: 100%;
            padding: 10px;
            overflow: hidden;

            .bookmark-btn {
              &:hover {
                cursor: pointer;
              }
            }

            .author {
              display: block;
              position: relative;
              width: max-content;
              max-width: calc(100% - 10px);
              white-space: nowrap;
              font-size: 14px;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            .broadcaster {
              position: absolute;
              bottom: 10px;
              right: 10px;
              display: block;
              width: max-content;
              max-width: calc(100% - 20px - 30px);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 14px;
            }

            .title {
              display: block;
              position: relative;
              width: 100%;
              max-width: 100%;
              height: 1.5em;
              white-space: nowrap;
              overflow: hidden;
              font-weight: bold;

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

        .book-card-wrap:hover {
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
