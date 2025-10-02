import {SearchHeader} from '@/components/SearchHeader';
import {ReactNode, Suspense} from 'react';

export default function SearchLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex min-h-screen flex-col gap-4'>
      <Suspense fallback={<div>로딩 중</div>}>
        <SearchHeader />
      </Suspense>
      {children}
    </div>
  );
}
