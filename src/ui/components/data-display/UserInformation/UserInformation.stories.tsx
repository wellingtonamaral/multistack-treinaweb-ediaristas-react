import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserInformation from './UserInformation';

export default {
    title: 'data-display/UserInformation',
    component: UserInformation,
    argTypes: {},
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
    <UserInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
    name: 'Wellington Amaral',
    picture:'https://github.com/wellingtonamaral.png',
    rating: 3,
    description: 'Analista de TI',
    isRating: true,
};