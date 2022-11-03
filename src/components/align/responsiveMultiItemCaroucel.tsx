import {
  FC,
  ReactNode,
  Children,
  useState,
  useEffect,
  ReactFragment,
  ReactPortal,
  ReactElement,
  JSXElementConstructor,
  useRef,
} from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ResponsiveGridAlign } from "./responsiveGrid";

interface Props {
  children?: ReactNode;
  itemMinWidth?: number;
}

export const ResponsiveMutiItemCarousel: FC<Props> = ({ children, itemMinWidth = 150 }) => {
  const [isShow, setIsShow] = useState(false);
  const [availNext, setAvailNext] = useState(false);
  const [availPrev, setAvailPrev] = useState(false);
  const [pageCount, setPageCount] = useState(5);
  const [itemPerPageCount, setItemPerPageCount] = useState(0);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const wrapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAvailNext(pageCount > 1 && currentPageIdx < pageCount - 1);
    setAvailPrev(pageCount > 1 && currentPageIdx > 0);
  }, [pageCount, currentPageIdx]);

  useEffect(() => {
    const childrenCount = Children.count(children);

    const getCaroucelCalc = () => {
      const wrapDivCurrent = wrapDivRef.current;
      if (wrapDivCurrent) {
        const itemCount = Math.floor(wrapDivCurrent.offsetWidth / itemMinWidth);
        const pageCount = Math.ceil(childrenCount / itemCount);
        setItemPerPageCount(itemCount);
        setPageCount(pageCount);
        setIsShow(true);
      }
    };

    setTimeout(getCaroucelCalc, 100);
    window.addEventListener("resize", getCaroucelCalc);
  }, [wrapDivRef, children, itemMinWidth]);

  return (
    <>
      <div
        ref={wrapDivRef}
        className={`responsive-multi-item-caroucel-wrap ${isShow ? "show" : ""}`}
      >
        <div className="items-wrap">
          {isShow && (
            <div
              className="items"
              style={{ width: `${100 * pageCount}%`, left: `${-100 * currentPageIdx}%` }}
            >
              {(() => {
                let childrenArray: Array<
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined
                > = [];
                const grids: Array<typeof childrenArray> = [];
                const childrenCount = Children.count(children);
                console.log("childrenCount", childrenCount, itemPerPageCount);
                Children.forEach(children, (child, idx) => {
                  childrenArray.push(child);
                  if (
                    childrenCount - idx === 1 ||
                    (idx !== 0 && (idx + 1) % itemPerPageCount === 0)
                  ) {
                    grids.push(childrenArray);
                    childrenArray = [];
                  }
                });
                return grids.map((arr, idx1) => (
                  <ResponsiveGridAlign
                    width={`${100 / pageCount}%`}
                    key={idx1}
                    itemMinWidth={itemMinWidth}
                  >
                    {arr.map((itm, idx2) => (
                      <div key={idx2}>{itm}</div>
                    ))}
                  </ResponsiveGridAlign>
                ));
              })()}
            </div>
          )}
        </div>
        <div className="indicator">
          {[...Array(pageCount)].map((itm, idx) => (
            <div key={idx} className={`dot ${idx === currentPageIdx ? "active" : ""}`}></div>
          ))}
        </div>
        {availPrev && (
          <div
            className="left-btn"
            onClick={() => {
              if (currentPageIdx > 0) setCurrentPageIdx(currentPageIdx - 1);
            }}
          >
            <Icon icon={faAngleLeft} />
          </div>
        )}
        {availNext && (
          <div
            className="right-btn"
            onClick={() => {
              if (currentPageIdx < pageCount - 1) setCurrentPageIdx(currentPageIdx + 1);
            }}
          >
            <Icon icon={faAngleRight} />
          </div>
        )}
      </div>
      <style jsx>{`
        .responsive-multi-item-caroucel-wrap {
          position: relative;
          display: block;
          width: 100%;
          max-width: 100%;
          height: 100%;
          overflow: hidden;

          .items-wrap {
            position: relative;
            width: 100%;
            height: max-content;
            overflow: hidden;

            .items {
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              height: 100%;
              transition: 0.4s;
              z-index: 1;
            }
          }

          .left-btn,
          .right-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #6ca9a8;
            font-size: 32px;
            transition: 0.2s;
            padding: 0 5px;
            background-color: #ffffffcc;
            z-index: 2;

            &.left-btn {
              left: 0;
              border-radius: 0 10px 10px 0;
            }
            &.right-btn {
              right: 0;
              border-radius: 10px 0 0 10px;
            }

            &:hover {
              cursor: pointer;
              color: #227675;
            }
          }

          .indicator {
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            padding: 5px 10px;
            background-color: #ffffffaa;
            border-radius: 10px;
            z-index: 2;

            .dot {
              position: relative;
              width: 7px;
              height: 7px;
              display: block;
              border-radius: 50%;
              background-color: #ccc;
              transition: 0.2s;

              &:hover {
                cursor: pointer;
                background-color: #666;
              }

              &.active {
                background-color: #319694;
              }
            }
          }
        }
      `}</style>
    </>
  );
};
