import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@mui/material';
import DataList from './DataList';

export default {
    title: 'data-display/DataList',
    component: DataList,
    argTypes: {},
} as ComponentMeta<typeof DataList>;

const Template: ComponentStory<typeof DataList> = (args) => (
  <DataList
    header={
      <div>
        Data: 19/03/2023
        <br />
        Limpeza simples
      </div>
    }
    body={
      <div>
        Cidade: Rio de Janeiro
        <br />
        Número de cômodos
      </div>
    }
    actions={
      <>
        <Button variant={"contained"} color={"secondary"}>
          Se candidatar
        </Button>
        
      </>
    }
  />
);

export const Default = Template.bind({});
Default.args = {};