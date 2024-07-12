import type { Meta , StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Fab , FabProps } from '@atoms/FloatingActionButton';

const FabMeta: Meta = {
  title: 'Atoms/Fab',
  component: Fab,
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

export default FabMeta;
type Story = StoryObj<FabProps>;

export const Primary: Story = {
  args: {
    children: '+',
    color: 'primary',
    size: 'medium',
    disable: false,
    testId: 'button_test',
    onClick: action('clicked'),
  }
};

export const Secondary: Story = {
  args: {
    children: '+',
    color: 'secondary',
    size: 'medium',
    disable: false,
    onClick: action('clicked'),
  },
};