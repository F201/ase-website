import type { Meta , StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Radio , RadioButtonProps } from '@atoms/Radio';

const FabMeta: Meta = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters:{
    actions: {
      argTypesRegex: '^on.*'
    }
  },
  argTypes: {
    testId: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control:{
        type: 'boolean',
      }
    },
    checkedIcon: {
      control:{
        type: 'text',
      }
    },
    icon: {
      control:{
        type: 'object'
      }
    },
    color: {
      control:{
        type: 'select',
        options: ['inherit', 'primary', 'secondary'],
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    required: {
      control: {
        type: 'boolean'
      }
    },
    disable: {
      control: {
        type: 'boolean',
      },
    }
  },
};

export default FabMeta;
type Story = StoryObj<RadioButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary',
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
    color: 'secondary',
    size: 'medium',
    disable: false,
    onClick: action('clicked'),
  },
};