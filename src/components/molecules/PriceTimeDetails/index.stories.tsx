import { ComponentStory, ComponentMeta } from '@storybook/react';
import PriceTimeDetails from '.';

export default {
  title: 'Molecules/PriceTimeDetails',
  component: PriceTimeDetails,
} as ComponentMeta<typeof PriceTimeDetails>;

const Template: ComponentStory<typeof PriceTimeDetails> = (props) => (
  <PriceTimeDetails {...props} />
);

export const PriceTimeDetails1 = Template.bind({});
PriceTimeDetails1.args = {
  price: 1200,
  time: 24
};