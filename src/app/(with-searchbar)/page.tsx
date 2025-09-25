import {BookItem} from '@/components/BookItem';
import books from '@/mocks/books.json';

export default function Home() {
  return (
    <div>
      <section className='mb-5 flex flex-col gap-5'>
        <h3 className='text-xl font-bold'>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>

      <section className='flex flex-col gap-5'>
        <h3 className='text-xl font-bold'>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
