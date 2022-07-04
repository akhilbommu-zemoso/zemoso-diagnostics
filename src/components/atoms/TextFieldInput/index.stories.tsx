import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldInput from ".";

export default {
  title: "Atoms/TextFieldInput",
  component: TextFieldInput,
} as ComponentMeta<typeof TextFieldInput>;

const Template: ComponentStory<typeof TextFieldInput> = (args) => (
  <TextFieldInput {...args} />
);

export const NameInputField = Template.bind({});
NameInputField.args = {
  nameOfInputField: "Name",
  placeholder: "Enter name here",
  name: "name",
};
