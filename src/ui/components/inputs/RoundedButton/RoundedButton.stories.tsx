import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import RoundedButton from "./RoundedButton";


export default {
    title: 'imputs/RoundedButton',
    component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;


const Template: ComponentStory<typeof RoundedButton> = (args) => (
    <RoundedButton {...args} >English Dicks</RoundedButton>
);


export const Default = Template.bind({});

Default.args = {
    variant: "contained",
};

