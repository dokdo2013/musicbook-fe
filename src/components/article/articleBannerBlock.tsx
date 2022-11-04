import { FC, ReactNode, Children, useState, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  height?: string;
  intervalTime?: number;
}

export const ArticleBannerBlock: FC<Props> = ({ children, height, intervalTime = 5000 }) => {
  const [bannerItemCount, setBannerItemCount] = useState(Children.count(children));
  const [currentBannerItemIdx, setCurrentBannerItemIdx] = useState(0);

  useEffect(() => {
    setBannerItemCount(Children.count(children));
    setCurrentBannerItemIdx(0);

    if (bannerItemCount > 1) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx + 1 === bannerItemCount) idx = 0;
        else idx += 1;
        setCurrentBannerItemIdx(idx);
      }, intervalTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [children]);

  return (
    <>
      <div className="article-banner-block-wrap">
        <div className="items-slide-wrap">
          <div
            className="items"
            style={{
              width: `${100 * bannerItemCount}%`,
              left: `${-100 * currentBannerItemIdx}%`,
            }}
          >
            {Children.map(children, (child, idx) => (
              <div className="item" style={{ width: `${100 / bannerItemCount}%` }} key={idx}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <div className="indicator">
          {currentBannerItemIdx + 1}/{bannerItemCount}
        </div>
      </div>
      <style jsx>{`
        .article-banner-block-wrap,
        .items-slide-wrap,
        .items {
          ${height ? `height: ${height};` : "height: max-content;"}
        }
        .article-banner-block-wrap {
          position: relative;
          width: 100%;
          margin-bottom: 10px;
          background-color: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          overflow: visible;

          .indicator {
            position: absolute;
            bottom: 10px;
            right: 10px;

            padding: 0.1em 0.5em 0.15em;
            border-radius: 0.5em;
            font-size: 12px;
            color: white;
            background-color: rgba(0, 0, 0, 0.4);
          }

          .items-slide-wrap {
            position: relative;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;

            .items {
              position: relative;
              transition: 0.4s;

              .item {
                position: relative;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              }
            }
          }
        }
      `}</style>
    </>
  );
};
