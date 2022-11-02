import { Badge } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  imageSrc: string | StaticImageData;
  songTitle: string;
  author: string;
  categoryName: string;
  categoryColor?: string;
  height?: number;
}

export const MusicListCard: FC<Props> = ({
  imageSrc,
  songTitle,
  author,
  categoryName,
  categoryColor,
  height = 100,
}) => {
  const titleDivRef = useRef<HTMLDivElement>(null);
  const titleSpanRef = useRef<HTMLSpanElement>(null);
  const [isTitleOverflowed, setIsTitleOverflowed] = useState(false);

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
  }, []);

  return (
    <>
      <div className="music-card-wrap list">
        <div className="image-content">
          <Image src={imageSrc} alt="" width={height} height={height} />
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
          <div className="author">{author}</div>
        </div>
      </div>
      <style jsx>{`
        .music-card-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          width: 100%;
          height: ${height + 2}px;
          border: 1px solid #eee;
          box-shadow: 0 0 3px #eee;

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

            .title,
            .author {
              position: relative;
              width: 100%;
              max-width: 100%;
              display: block;
              white-space: nowrap;
              overflow: hidden;
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
