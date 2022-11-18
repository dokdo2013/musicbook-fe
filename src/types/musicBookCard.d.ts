import { StaticImageData } from "next/image";

interface Music {
  uid: string;
  command: string;
  thumbnailSrc: string | StaticImageData;
  songTitle: string;
  authorName: string;
  categoryName: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
  categoryColor?: ColorSchemeType;
}

interface Book {
  uid: string;
  command: string;
  thumbnailSrc: string | StaticImageData;
  bookTitle: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
  registedSongCount: number;
}

interface MusicBook {
  music: Music;
  book: Book;
}

type CardType = "list" | "grid";
interface CardProps {
  onClick?: () => void;
}

interface MusicBookCardProps extends CardProps {
  musicBook: MusicBook;
}

interface BookCardProps extends CardProps {
  book: Book;
}
