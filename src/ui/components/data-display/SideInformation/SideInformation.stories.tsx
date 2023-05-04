import { ComponentMeta, ComponentStory } from '@storybook/react';


import SideInformation from './SideInformation';

export default {
    title: 'data-display/SideInformation',
    component: SideInformation,
    argTypes: {},
} as ComponentMeta<typeof SideInformation>;

const Template: ComponentStory<typeof SideInformation> = (args) => (
    <SideInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Detalhes",
  items: [
    {
      title: "Tipo",
      description: ["Limpeza de rotina"],
      icon: "fa-regular fa-circle-check",
    },
    {
      title: "Tamanho",
      description: ["3 cômodos", "2 banheiros"],
      icon: "fa-regular fa-circle-check",
    },
    {
      title: "Data",
      description: ["19/03/2023"],
      icon: "fa-regular fa-circle-check",
    },
    ],
    footer: {
        text: 'R$199,00',
        icon: 'fa-regular fa-credit-card'
    },
  
};

    export const NoIconNoFooter = Template.bind({});
    NoIconNoFooter.args = {
      title: "Como funciona?",
      items: [
        {
          title: "1 - Cadastro",
          description: ["Você fez o cadastro e escolhe as cidades atendidas"],
          
        },
        {
          title: "2 - Receba Propostas",
          description: [
            "Você receberá os serviços por email e notificação no celular",
          ],
         
        },
        {
          title: "3 - Diária Agendada",
          description: [
            "Se o seu perfil for escolhido pelo cliente você rebecerá a confirmação do agendamento",
          ],
         
        },
      ],
    };