import { GLOBAL_PADDING_1, MAX_FRAME_WIDTH_PX } from "@/src/lib/constant";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <div className="footer-wrap">
        <div className="content">
          <div className="info">
            © 2022 <span className="bold">https://musicbook.tv</span>. All rights reserved.
          </div>
          <div className="info">앨범아트의 저작권 일체는 음원 소유자에게 있습니다.</div>
        </div>
      </div>
      <style jsx>{`
        .footer-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: max-content;
          padding: ${GLOBAL_PADDING_1}px 0;
          background-color: #a0aec0;

          .content {
            --padding: ${GLOBAL_PADDING_1}px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            max-width: ${MAX_FRAME_WIDTH_PX}px;
            height: max-content;
            padding: var(--padding) var(--padding);

            .info {
              font-size: 16px;
              color: #e2e8f0;
            }
          }
        }
      `}</style>
    </>
  );
};
