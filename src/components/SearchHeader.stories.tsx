import {Meta, StoryObj} from '@storybook/nextjs';
import {SearchHeader} from './SearchHeader';

const meta: Meta<typeof SearchHeader> = {
  title: 'Components/SearchHeader',
  component: SearchHeader,
};

export default meta;
type Story = StoryObj<typeof SearchHeader>;

export const Default: Story = {};
