import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from '.';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (
  args,
) => <RadioButton {...args} />;

export const Male = Template.bind({});
Male.args = {
  label: 'Male',
  value: 'male',
};
