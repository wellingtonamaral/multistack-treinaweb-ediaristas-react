import { ComponentMeta, ComponentStory } from '@storybook/react';

import UseForm from './UseForm';

export default {
    title: 'inputs/UseForm',
    component: UseForm,
    argTypes: {},
} as ComponentMeta<typeof UseForm>;

const Template: ComponentStory<typeof UseForm> = (args) => (
    <UseForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};