import { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReduxStates } from "@redux/modules";
import { openModal, selectMusic } from "@lib/functions";
import { LoginModal } from "./loginModal";
import { EditProfileModal } from "./editProfileModal";
import { ConfigAccountModal } from "./configAccountModal";
import { ShowMusicCardModal } from "./showMusicCardModal";

export const Modals: FC = () => {
  const dispatch = useDispatch();
  const { loginModalOpen, editProfileModalOpen, configAccountModalOpen, showMusicCardModalOpen } =
    useSelector(({ modals }: ReduxStates) => ({
      loginModalOpen: modals.loginModalOpen,
      editProfileModalOpen: modals.editProfileModalOpen,
      configAccountModalOpen: modals.configAccountModalOpen,
      showMusicCardModalOpen: modals.showMusicCardModalOpen,
    }));

  return (
    <>
      <ShowMusicCardModal
        isOpen={showMusicCardModalOpen}
        onClose={() => selectMusic(dispatch, null)}
      />
      <LoginModal isOpen={loginModalOpen} onClose={() => openModal("login", dispatch, false)} />
      <EditProfileModal
        isOpen={editProfileModalOpen}
        onClose={() => openModal("editProfile", dispatch, false)}
      />
      <ConfigAccountModal
        isOpen={configAccountModalOpen}
        onClose={() => openModal("configAccount", dispatch, false)}
      />
    </>
  );
};
