import type { Meta, StoryObj } from '@storybook/react';

import Card from './index'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'title',
        description: 'description'
    }
}