import { StaticImageData } from "next/image";

interface MusicCardProps {
  thumbnailSrc: string | StaticImageData;
  songTitle: string;
  authorName: string;
  categoryName: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
  categoryColor?: ColorSchemeType;
  onClick?: () => void;
}

interface BookCardProps {
  thumbnailSrc: string | StaticImageData;
  bookTitle: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
  onClick?: () => void;
}

type CardType = "list" | "grid";
