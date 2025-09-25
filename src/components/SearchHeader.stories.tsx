import {SearchHeader} from '@/components/SearchHeader';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof SearchHeader> = {
  title: 'Components/SearchHeader',
  component: SearchHeader,
};

export default meta;
type Story = StoryObj<typeof SearchHeader>;

export const Default: Story = {};
