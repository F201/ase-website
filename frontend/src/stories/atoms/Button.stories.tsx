import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from '@atoms/Button';

const ButtonMeta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters:{
    actions: {
      argTypesRegex: '^on.*'
    }
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
                
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
    color: {
      control:{
        type: 'select',
        options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disable: {
      control: {
        type: 'boolean',
      },
    }
  },
};

export default ButtonMeta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disable: false,
    testId: 'button_test',
    onClick: action('clicked'),
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'outlined',
    color: 'secondary',
    size: 'medium',
    disable: false,
    onClick: action('clicked'),
  },
};