'use client';
import {useRouter, useSearchParams} from 'next/navigation';
// 서버 vs 클라이언트 컴포넌트 구분
// 특정 컴포넌트가 상호작용이 있는지?
// 입력, 클릭과 같은 상호작용은 클라이언트 컴포넌트로

// co-location
// 앱 라우터에서는 파일 이름이 페이지나 레이아웃이 아니면 컴포넌트로 간주
// 페이지마다 필요한 컴포넌트 파일을 모아 둘 수 있음

// 프리페칭 - 연결 가능성이 있는 모든 페이지를 미리 불러오는 기능(개발 모드 동작 안함, 프로덕션 모드로 프리페칭 확인)

// 정적페이지 - 빌드 타임에 미리 생성된 페이지(like SSG)
// 동적페이지 - 브라우저의 요청을 받을 때마다 생성되는 페이지 (like SSR)

import {useEffect, useState} from 'react';

export const SearchHeader = () => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get('q');

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className='mt-4 flex h-12 gap-2'>
      <input
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className='flex-1 rounded-[5px] border-[1px] border-gray-300 p-[15px] outline-none'
      />
      <button
        onClick={handleSubmit}
        className='w-[80px] cursor-pointer rounded-[5px] bg-blue-400 text-white'>
        검색
      </button>
    </div>
  );
};
