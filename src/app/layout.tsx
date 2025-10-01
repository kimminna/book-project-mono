import type {Metadata} from 'next';
import './globals.css';
import Link from 'next/link';
import {BookData} from '@/types/book';

export const metadata: Metadata = {
  title: 'ONEBITE BOOKS',
  description: '한입북스에 등록된 도서들을 만나 보세요.',
};

async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    return <footer className='py-25 text-gray-400'>제작 @kimminna</footer>;
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer className='py-25 text-gray-400'>
      <div>제작 @kimminna</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='m-auto max-h-[100%] max-w-150 bg-white px-4 py-4 shadow-2xl'>
          <header className='h-4 text-xl font-bold'>
            <Link href={'/'}>📚 ONEBITE BOOKS</Link>
          </header>
          <main className='pt-2'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
