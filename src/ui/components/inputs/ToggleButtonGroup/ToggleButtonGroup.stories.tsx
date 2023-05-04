
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ToggleButtonGroup, { ToggleButton } from "./ToggleButtonGroup";

export default {
  title: "inputs/ToggleButtonGroup",
  component: ToggleButtonGroup,
  argTypes: {},
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="1">
      <i className="fa-solid fa-soap">Limpeza de Rotina</i>
    </ToggleButton>
    <ToggleButton value="2">
      <i className="fa-solid fa-broom">Limpeza pesada</i>
    </ToggleButton>
    <ToggleButton value="3">
      <i className="fa-solid fa-lines-leaning">Limpeza pós obra</i>
    </ToggleButton>
  </ToggleButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
    value: '1',
};
