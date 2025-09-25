import SearchBar from '@/components/SearchBar';
import {ReactNode} from 'react';

export default function SearchLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex flex-col gap-4'>
      <SearchBar />
      {children}
    </div>
  );
}
