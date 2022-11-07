import { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReduxStates } from "@redux/modules";
import { openLoginModal } from "@lib/functions";
import { LoginModal } from "./loginModal";

export const Modals: FC = () => {
  const dispatch = useDispatch();
  const loginModalOpen = useSelector(({ modals }: ReduxStates) => modals.loginModalOpen);

  return (
    <>
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => {
          openLoginModal(dispatch, false);
        }}
      />
    </>
  );
};
