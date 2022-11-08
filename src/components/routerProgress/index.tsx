import { Progress } from "@chakra-ui/react";
import { openSidebar } from "@lib/functions";
import Router from "next/router";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

export const RouterProgress: FC = () => {
  const dispatch = useDispatch();
  const [isProgress, setIsProgress] = useState(false);

  const routerChangeStartHandler = () => {
    setIsProgress(true);
  };
  const routerChangeDoneHandler = () => {
    setIsProgress(false);
    openSidebar(dispatch, false);
  };

  Router.events.on("routeChangeStart", routerChangeStartHandler);
  Router.events.on("routeChangeComplete", routerChangeDoneHandler);
  Router.events.on("routeChangeError", routerChangeDoneHandler);

  return (
    <>
      {isProgress && (
        <div className="router-progress">
          <Progress size="xs" colorScheme="teal" isIndeterminate />
        </div>
      )}
      <style jsx>{`
        .router-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100000;
        }
      `}</style>
    </>
  );
};
