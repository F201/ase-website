import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from '@atoms/Checkbox';

const meta: Meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters:{
    actions: {
      argTypesRegex: '^on.*'
    }
  },
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control:{
        type: 'select',
        options: ['primary', 'secondary', 'default'],
      }
    },
    disable: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: 'file',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    testId: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {
  args: {
    checked: false,
    color: 'primary',
    disable: false,
    size: 'medium',
    testId: 'test',
  },
};