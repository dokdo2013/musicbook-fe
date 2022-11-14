import { StaticImageData } from "next/image";

interface MusicCardProps {
  thumbnailSrc: string | StaticImageData;
  songTitle: string;
  authorName: string;
  categoryName: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
  categoryColor?: string;
}

interface BookCardProps {
  thumbnailSrc: string | StaticImageData;
  bookTitle: string;
  broadcasterName: string;
  broadcasterProfileSrc: string | StaticImageData;
}

type CardType = "list" | "grid";
