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

export const EditProfileModal: FC<Props> = ({ isOpen, onClose }) => {
  const { data } = useSession();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="teal" size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>프로필수정</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column" justifyContent="center" align="center">
              <div className="profile-image-wrap">
                <div className="profile-image">
                  <Image
                    src={data?.user?.image || defaultProfileImage}
                    fill={true}
                    placeholder="blur"
                    blurDataURL={data?.user?.image || defaultProfileImage.blurDataURL}
                    alt=""
                  />
                </div>
                <div className="profile-image-edit-btn">
                  이미지 변경
                  <div className="icon">
                    <Icon icon={faImage} />
                  </div>
                </div>
              </div>
              <Button colorScheme="teal" size="xs">
                기본 이미지로 설정
              </Button>

              <FormControl>
                <FormLabel>이름</FormLabel>
                <Input focusBorderColor="teal.500" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>자기소개</FormLabel>
                <Input focusBorderColor="teal.500" type="text" />
                <FormHelperText>최대 30자까지</FormHelperText>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" justifyContent="flex-end" align="center" w="full">
              <Button colorScheme="teal">저장</Button>
              <Button colorScheme="gray" onClick={onClose}>
                취소
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
            border: 1px solid #eee;
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
