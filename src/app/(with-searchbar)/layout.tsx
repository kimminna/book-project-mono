import {SearchHeader} from '@/components/SearchHeader';
import {ReactNode} from 'react';

export default function SearchLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex flex-col gap-4'>
      <SearchHeader />
      {children}
    </div>
  );
}
