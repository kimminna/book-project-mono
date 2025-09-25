import {BookItem} from '@/components/BookItem';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof BookItem> = {
  title: 'Components/BookItem',
  component: BookItem,
};

export default meta;
type Story = StoryObj<typeof BookItem>;

export const Default: Story = {
  args: {
    id: 1,
    title: '한 입 크기로 잘라 먹는 리액트',
    subTitle: '자바스크립트 기초부터 애플리케이션 배포까지',
    author: '이정환',
    publisher: '프로그래밍인사이트',
    coverImgUrl:
      'https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg',
  },
};
