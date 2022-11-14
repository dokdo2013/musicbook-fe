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
import { ScrollableText } from "@components/scrollableText";

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
          <ModalHeader>
            {selectedMusic?.songTitle && (
              <ScrollableText isScroll={true}>{selectedMusic.songTitle}</ScrollableText>
            )}
          </ModalHeader>
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
    </>
  );
};
