import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { FC } from "react";
import { useCardBorderColorModeValue } from "@lib/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@redux";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowMusicCardModal: FC<Props> = ({ isOpen, onClose }) => {
  const { selectedMusic } = useSelector(({ modals }: RootState) => ({
    selectedMusic: modals.selectedMusic,
  }));
  const borderColor = useCardBorderColorModeValue();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="teal" size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedMusic?.songTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Stack direction="row" justifyContent="flex-end" align="center" w="full">
              <Button colorScheme="gray" onClick={onClose}>
                닫기
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <style jsx>{`
        .profile-image-wrap {
          position: relative;
          display: block;
          width: 100px;
          height: 100px;

          .profile-image {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid ${borderColor};
            border-radius: 50%;
            overflow: hidden;
          }

          .profile-image-edit-btn {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            word-break: break-all;
            border-radius: 50%;
            background-color: transparent;
            color: transparent;
            font-weight: bold;
            transition: 0.2s;

            .icon {
              position: absolute;
              bottom: 0;
              right: 0;
              width: 30px;
              height: 30px;
              padding: 7px;
              border-radius: 50%;
              background-color: #319795;
              color: white;
              transition: 0.2s;
            }

            &:hover {
              cursor: pointer;
              background-color: #000000aa;
              color: white;

              .icon {
                background-color: #247d7b;
              }
            }
          }
        }
      `}</style>
    </>
  );
};
