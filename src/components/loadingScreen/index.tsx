import { Spinner } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

interface Props {
  isShow: boolean;
}

export const LoadingScreen: FC<Props> = ({ isShow }) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showFadeoutAnimation, setShowFadeoutAnimation] = useState(false);
  useEffect(() => {
    if (!isShow) {
      setShowFadeoutAnimation(true);
      setTimeout(() => {
        setShowLoadingScreen(false);
      }, 400);
    }
  }, [isShow]);
  return (
    <>
      {showLoadingScreen && (
        <div className={`loading-screen ${showFadeoutAnimation && "fadeout"}`}>
          <Spinner color="teal" size="xl" />
        </div>
      )}
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          z-index: 10000;

          &.fadeout {
            @keyframes fadeout {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }

            animation: fadeout 0.4s ease-in-out forwards;
          }
        }
      `}</style>
    </>
  );
};
