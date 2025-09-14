import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Click me',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

