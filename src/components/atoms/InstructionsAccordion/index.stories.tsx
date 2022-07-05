import { Meta, Story } from "@storybook/react/types-6-0";
import InstructionsAccordion, { InstructionsAccordionProps } from ".";

export default {
  title: "Atoms/InstructionsAccordion",
  component: InstructionsAccordion,
} as Meta;

const Template: Story<InstructionsAccordionProps> = (args) => (
  <InstructionsAccordion {...args} />
);

export const Instructions = Template.bind({});
Instructions.args = {
  accordionHeader: "Instructions",
  accordionContent:
    "Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment.",
};
