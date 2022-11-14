import { useResponsive } from "@lib/hooks";
import { CSSProperties, FC, useEffect, useRef, useState } from "react";

interface Props {
  children: string;
  isScroll: boolean;
  wrapStyle?: CSSProperties;
  textStyle?: CSSProperties;
}

export const ScrollableText: FC<Props> = ({ children, isScroll, wrapStyle, textStyle }) => {
  const wrapDivRef = useRef<HTMLDivElement>(null);
  const textSpanRef = useRef<HTMLSpanElement>(null);
  const [isTextOverflowed, setIsTextOverflowed] = useState(false);
  const { isLoading, isPC, isTablet, isMobile } = useResponsive();

  useEffect(() => {
    const wrapDiv = wrapDivRef.current;
    const textSpan = textSpanRef.current;
    const getOverflowed = () =>
      setIsTextOverflowed(!!wrapDiv && !!textSpan && wrapDiv.offsetWidth < textSpan.offsetWidth);
    setTimeout(getOverflowed, 100);
    window.addEventListener("resize", getOverflowed);
  }, [isLoading, isPC, isTablet, isMobile, children]);

  return (
    <>
      <div
        ref={wrapDivRef}
        className={`scrollable-text-wrap ${isTextOverflowed && isScroll ? "scroll" : ""}`}
        style={wrapStyle}
      >
        <span ref={textSpanRef} style={textStyle}>
          {children}
        </span>
      </div>
      <style jsx>{`
        .scrollable-text-wrap {
          position: relative;
          display: block;
          width: 100%;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;

          span {
            opacity: 0;
          }

          &::before {
            content: "${children}";
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .scrollable-text-wrap.scroll {
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

          &::before {
            animation: text-scroll1 5s 1s linear infinite;
            width: auto;
            max-width: none;
            overflow: visible;
            text-overflow: unset;
          }
          &::after {
            content: "${children}";
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(calc(100% + 1em));
            animation: text-scroll2 5s 1s linear infinite;
          }
        }
      `}</style>
    </>
  );
};
