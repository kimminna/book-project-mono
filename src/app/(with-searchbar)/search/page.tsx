import {BookItem} from '@/components/BookItem';
import {BookData} from '@/types/book';

export default async function Page({
  searchParams,
}: {
  searchParams?: {[key: string]: string | string[] | undefined};
}) {
  const query = searchParams?.query ?? '';

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${query}`
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
