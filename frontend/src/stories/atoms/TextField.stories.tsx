import type { Meta, StoryObj } from '@storybook/react';

import { TextField, TextFieldProps } from '@atoms/TextField';

const meta: Meta = {
  title: 'Atoms/TextField',
  component: TextField,
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
        options: ['primary', 'secondary'],
      }
    },
    disable: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: 'object',
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
type Story = StoryObj<TextFieldProps>;

export const Primary: Story = {
  args: {
    checked: false,
    color: 'primary',
    disable: false,
    size: 'medium',
    testId: 'test',
  },
};