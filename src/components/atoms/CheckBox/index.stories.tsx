import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from '.';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (
  args,
) => <CheckBox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Save details for future',
};
