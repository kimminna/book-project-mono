import { BookData } from "@/types/book";
import Link from "next/link";

export const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link href={`/book/${id}`}>
      <img src={coverImgUrl} alt={title} />
      <div>
        <div>{title}</div>
        <div>{subTitle}</div>
        <br />
        <div>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};
