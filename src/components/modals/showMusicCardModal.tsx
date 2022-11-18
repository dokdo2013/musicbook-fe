import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux";
import { ScrollableText } from "@components/scrollableText";
import Image from "next/image";
import { BookCard, BookMarkButton, CategoryBadge } from "@components/musicBookCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ShowMusicCardModalSubtitle: FC<{ children: string }> = ({ children }) => {
  return (
    <Flex position="relative" justifyContent="space-between" alignItems="center" w="full" mb="10px">
      <Text fontSize="15px" fontWeight="bold" whiteSpace="nowrap" mr="10px">
        {children}
      </Text>
      <Divider display="inline-block" />
    </Flex>
  );
};

export const ShowMusicCardModal: FC<Props> = ({ isOpen, onClose }) => {
  const { selectedMusicBook } = useSelector(({ modals }: RootState) => ({
    selectedMusicBook: modals.selectedMusicBook,
  }));
  const { onCopy, setValue, hasCopied } = useClipboard("");
  const toast = useToast();
  const [isBookMarked, setIsBookMarked] = useState(false);

  useEffect(() => {
    if (selectedMusicBook?.music)
      setValue(`${selectedMusicBook.music.command} ${selectedMusicBook.music.uid}`);
  }, [selectedMusicBook]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered colorScheme="teal" size="sm">
        <ModalOverlay />
        {selectedMusicBook && (
          <ModalContent>
            <BookMarkButton
              isBookmarked={isBookMarked}
              markedToastTitle={"수록곡이 북마크되었습니다!"}
              unmarkedToastTitle={"수록곡 북마크가 해제되었습니다"}
              description={selectedMusicBook.music.songTitle}
              height={40}
              top="-2px"
              right="50px"
              onClick={() => {
                setIsBookMarked(!isBookMarked);
              }}
            />
            <ModalHeader mt="20px">
              <ScrollableText isScroll={true}>{selectedMusicBook.music.songTitle}</ScrollableText>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box position="relative" display="block" w="max-content" maxWidth="100%" m="0 auto">
                <Flex justifyContent="space-between" alignItems="center" direction="row" gap="20px">
                  <Box
                    position="relative"
                    width="100px"
                    minWidth="100px"
                    height="100px"
                    minHeight="100px"
                    overflow="hidden"
                    borderRadius="10px"
                  >
                    <Image
                      src={selectedMusicBook.music.thumbnailSrc}
                      height={100}
                      placeholder="blur"
                      blurDataURL={
                        typeof selectedMusicBook.music.thumbnailSrc === "string"
                          ? selectedMusicBook.music.thumbnailSrc
                          : selectedMusicBook.music.thumbnailSrc.blurDataURL
                      }
                      alt=""
                    />
                    <CategoryBadge
                      categoryName={selectedMusicBook.music.categoryName}
                      categoryColor={selectedMusicBook.music.categoryColor}
                      fontSize="2xs"
                    />
                  </Box>
                  <Box>
                    <ShowMusicCardModalSubtitle>원곡정보</ShowMusicCardModalSubtitle>
                    <Text fontSize="12px" mt="10px" w="full" wordBreak="break-all">
                      <Text mb="5px">
                        <Badge mt="-2px" mr="5px">
                          곡명
                        </Badge>{" "}
                        {selectedMusicBook.music.songTitle}
                      </Text>
                      <Text>
                        <Badge mt="-2px" mr="5px">
                          원가수
                        </Badge>{" "}
                        {selectedMusicBook.music.authorName}
                      </Text>
                    </Text>
                  </Box>
                </Flex>

                <Box mt="20px">
                  <ShowMusicCardModalSubtitle>노래책 정보</ShowMusicCardModalSubtitle>
                  <BookCard book={selectedMusicBook.book} cardType="list" />
                </Box>

                <Box mt="20px">
                  <ShowMusicCardModalSubtitle>수록곡 설명</ShowMusicCardModalSubtitle>
                  <Text fontSize="12px" w="full" wordBreak="break-all">
                    설명글텍스트 설명글텍스트 설명글텍스트 설명글텍스트 설명글텍스트 설명글텍스트
                    설명글텍스트 설명글텍스트 설명글텍스트 설명글텍스트 설명글텍스트
                  </Text>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Stack direction="row" justifyContent="flex-end" align="center" w="full">
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    onCopy();
                    toast({ status: "success", title: "복사되었습니다!", duration: 1000 });
                  }}
                >
                  {hasCopied ? "복사완료!" : "신청명령 복사"}
                </Button>
                <Button colorScheme="gray" onClick={onClose}>
                  닫기
                </Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};
