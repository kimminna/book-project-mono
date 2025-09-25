import {BookData} from '@/types/book';
import Link from 'next/link';

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
      <img src={coverImgUrl} alt={title} className='w-[80px]' />
      <div className='flex gap-[15px] border-b-[1px] border-gray-300 px-[20px] py-[10px]'>
        <div className='font-bold'>{title}</div>
        <div className='text-[12px]'>{subTitle}</div>
        <br />
        <div className='text-gray-400'>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};
