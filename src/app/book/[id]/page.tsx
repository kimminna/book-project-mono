export default async function Page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const book = await response.json();
  const {title, subTitle, description, author, publisher, coverImgUrl} = book;

  return (
    <div className='flex flex-col gap-[10px]'>
      <img src={coverImgUrl} alt={title} className='z-10 mx-auto max-w-fit' />
      {/* 본문 정보 영역 */}
      <div className='flex flex-col space-y-3 p-4'>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='text-gray-500'>{subTitle}</div>
        <div className='text-gray-400'>
          {author} | {publisher}
        </div>
        <div className='rounded-sm bg-gray-100 p-4 whitespace-pre-line'>
          {description}
        </div>
      </div>
    </div>
  );
}
