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
        label: {
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
                options: ['standard', 'outlined', 'filled'],
            },
        },
        color: {
            control:{
                type: 'select',
                options: ['primary', 'secondary'],
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium'],
            },
        },
        disable: {
            control: {
                type: 'boolean',
            },
        },
        helperText: {
            control: {
                type: 'text',
            },
        },
        type: {
            control: {
                type: 'select',
                options: ['multiline', 'select', 'default'],
            },
        },
        rows: {
            control: {
                type: 'number',
            },
        },
        options: {
            control: {
                type: 'object',
            },
        },
    },
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const PrimaryDefault: Story = {
    args: {
        label: 'Primary',
        variant: 'standard',
        color: 'primary',
        size: 'medium',
        disable: false,
        helperText: 'This is a primary text field',
        type: 'default',
    },
};
