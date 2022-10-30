import twitchLogo from "@public/images/modals/login/login-1.png";
import googleLogo from "@public/images/modals/login/login-2.png";

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
import Image from "next/image";
import { signIn } from "next-auth/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="teal" size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>로그인</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            style={{
              wordBreak: "keep-all",
              textAlign: "center",
              fontSize: "12px",
              color: "#718096",
            }}
          >
            소셜로그인으로 간편하게 시작하세요!
            <br />
            로그인 이후 다른 소셜로그인 플랫폼의 계정을 통합할 수 있습니다.
          </ModalBody>
          <ModalFooter>
            <Stack direction="column" align="stretch" w="full">
              <Button colorScheme="purple" fontSize="18px" onClick={() => signIn("twitch")}>
                <Image src={twitchLogo} alt="" height={18} style={{ marginRight: "10px" }} />
                트위치로 로그인
              </Button>
              <Button colorScheme="gray" fontSize="18px" onClick={() => signIn("google")}>
                <Image src={googleLogo} alt="" height={18} style={{ marginRight: "10px" }} />
                구글로 로그인
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
