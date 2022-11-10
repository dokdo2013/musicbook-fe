import defaultProfileImage from "@public/images/mypage/default-profile-image.jpeg";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigAccountModal: FC<Props> = ({ isOpen, onClose }) => {
  const { data, status } = useSession();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="teal" size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>계정연동/관리</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column" justifyContent="center" align="center"></Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" justifyContent="flex-end" align="center" w="full">
              <Button colorScheme="gray" onClick={onClose}>
                닫기
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <style jsx>{``}</style>
    </>
  );
};
