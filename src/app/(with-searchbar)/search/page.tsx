import {BookItem} from '@/components/BookItem';
import {BookData} from '@/types/book';

export default async function Page({
  searchParams,
}: {
  searchParams: {q?: string};
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const books = await response.json();
  return (
    <div>
      {books.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
