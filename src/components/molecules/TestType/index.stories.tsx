import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestType from '.';
import Covid from '../../../../public/assets/icons/covid.svg';
import Body from '../../../../public/assets/icons/body.svg';

export default {
  title: 'Molecules/TestType',
  component: TestType,
} as ComponentMeta<typeof TestType>;

const Template: ComponentStory<typeof TestType> = (props) => (
  <TestType {...props} />
);

export const CovidRTPCRTest = Template.bind({});
CovidRTPCRTest.args = {
  testName: 'Covid RTPCR',
  testImage: Covid,
};

export const FullBodyCheck = Template.bind({});
FullBodyCheck.args = {
  testName: 'Full Body Check',
  testImage: Body,
};