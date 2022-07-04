import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoCard from ".";

export default {
  title: "Atoms/InfoCard",
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (props) => (
  <InfoCard {...props} />
);

export const InfoCard1 = Template.bind({});
InfoCard1.args = {
  data: "To check if you have an active COVID-19 infection",
  width: "162px",
};

export const InfoCard2 = Template.bind({});
InfoCard2.args = {
  data: "If you are showing symptoms of COVID-19 infection",
  width: "182px",
};

export const InfoCard3 = Template.bind({});
InfoCard3.args = {
  data: "If you had a contact with someone with confirmed COVID-19",
  width: "182px",
};
