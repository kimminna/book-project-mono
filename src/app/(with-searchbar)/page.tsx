import {BookItem} from '@/components/BookItem';
import {BookData} from '@/types/book';

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const allBooks = await response.json();

  return (
    <div>
      {allBooks.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
async function RecommendedBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const recommendedBooks = await response.json();

  return (
    <div>
      {recommendedBooks.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className='mb-5 flex flex-col gap-5'>
        <h3 className='text-xl font-bold'>지금 추천하는 도서</h3>
        <RecommendedBooks />
      </section>

      <section className='flex flex-col gap-5'>
        <h3 className='text-xl font-bold'>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
