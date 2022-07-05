import TestTube from "../../../../public/assets/icons/test.svg";
import HomeVisit from "../../../../public/assets/icons/home.svg";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestBenefits from '.';

export default {
  title: 'Molecules/TestBenefits',
  component: TestBenefits,
} as ComponentMeta<typeof TestBenefits>;

const Template: ComponentStory<typeof TestBenefits> = (props) => (
  <TestBenefits {...props} />
);

export const Benefit1 = Template.bind({});
Benefit1.args = {
  benefitName: '1 test included',
  benefitImage: TestTube,
};

export const Benefit2 = Template.bind({});
Benefit2.args = {
  benefitName: 'Home visit',
  benefitImage: HomeVisit,
};
