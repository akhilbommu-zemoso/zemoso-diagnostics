import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from ".";
import Covid from "../../../../public/assets/icons/covid.svg";
import TestTube from "../../../../public/assets/icons/test.svg";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const CovidIcon = Template.bind({});
CovidIcon.args = {
  type: "homepage",
  src: Covid,
};

export const TestTubeIcon = Template.bind({});
TestTubeIcon.args = {
  type: "testpage",
  src: TestTube,
};
