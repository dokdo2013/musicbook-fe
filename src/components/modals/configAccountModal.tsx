import twitchLogo from "@public/images/modals/login/login-1-2.png";
import googleLogo from "@public/images/modals/login/login-2.png";

import {
  Badge,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigAccountModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="teal" size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>계정연동/관리</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h5" size="sm" mb={2}>
              계정연동
            </Heading>
            <Text fontSize="xs" mb={4}>
              트위치, 유튜브 계정을 통합하여 노래책 서비스를 이용할 수 있습니다!
            </Text>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={2} mb={4}>
              <GridItem>
                <Stack direction="column" justifyContent="flex-start" align="flex-start" w="full">
                  <Stack direction="row" justifyContent="flex-start" align="center">
                    <Image
                      src={twitchLogo}
                      alt=""
                      style={{
                        display: "inline-block",
                        marginBottom: "-2px",
                        width: "15px",
                        height: "15px",
                      }}
                    />
                    <Text fontSize="xs">트위치</Text>
                    <Badge colorScheme="teal" fontSize="xs">
                      현재계정
                    </Badge>
                  </Stack>
                  <Stack direction="row" justifyContent="center" align="center" w="full">
                    <Button colorScheme={"gray"} size={"sm"} w="full">
                      연동하기
                    </Button>
                  </Stack>
                </Stack>
              </GridItem>
              <GridItem>
                <Stack direction="column" justifyContent="flex-start" align="flex-start" w="full">
                  <Stack direction="row" justifyContent="flex-start" align="center">
                    <Image
                      src={googleLogo}
                      alt=""
                      style={{
                        display: "inline-block",
                        marginBottom: "-2px",
                        width: "15px",
                        height: "15px",
                      }}
                    />
                    <Text fontSize="xs">구글</Text>
                  </Stack>
                  <Stack direction="row" justifyContent="center" align="center" w="full">
                    <Button colorScheme={"gray"} size={"sm"} w="full">
                      연동하기
                    </Button>
                  </Stack>
                </Stack>
              </GridItem>
            </Grid>
            <Divider mb={4} />
            <Heading as="h5" size="sm" mb={2}>
              계정관리
            </Heading>
            <Text fontSize="xs" mb={4}>
              계정관리와 관련된 설정입니다.
            </Text>
            <Button size="sm">탈퇴하기</Button>
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
