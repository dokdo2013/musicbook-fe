import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { Badge } from "@chakra-ui/react";
import { useResponsive } from "@lib/hooks";

interface Props {
  thumbnailSrc: string | StaticImageData;
  songTitle: string;
  authorName: string;
  categoryName: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
  categoryColor?: string;
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
}) => {
  const titleDivRef = useRef<HTMLDivElement>(null);
  const titleSpanRef = useRef<HTMLSpanElement>(null);
  const [isTitleOverflowed, setIsTitleOverflowed] = useState(false);
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();

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
      <div className="music-card-wrap list">
        <div className="image-content">
          <Image src={thumbnailSrc} alt="" style={{ width: "100%", height: "auto" }} />
          <Badge
            colorScheme={!categoryColor ? "green" : undefined}
            bgColor={categoryColor}
            style={{ position: "absolute", bottom: "0", left: "0", width: "max-content" }}
          >
            {categoryName}
          </Badge>
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
          background-color: #fff;
          border: 1px solid #eee;
          border-radius: 10px;
          box-shadow: 0 0 3px #eee;
          transition: 0.2s;
          overflow: hidden;

          .image-content {
            position: relative;
            display: block;
            width: 100%;
            height: max-content;
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
              font-weight: bold;
              color: #242424;
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
