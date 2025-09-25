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
      <div className='flex gap-[15px] border-b-[1px] border-gray-300 px-5 py-2'>
        <img src={coverImgUrl} alt={title} className='w-[80px]' />
        <div className='flex-col'>
          <div className='font-bold'>{title}</div>
          <div className='text-xs'>{subTitle}</div>
          <br />
          <div className='text-[10px] text-gray-400'>
            {author} | {publisher}
          </div>
        </div>
      </div>
    </Link>
  );
};
