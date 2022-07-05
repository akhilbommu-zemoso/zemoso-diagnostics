import { ComponentStory, ComponentMeta } from "@storybook/react";
import CreditCard from ".";

export default {
  title: "Molecules/CreditCard",
  component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

export const MasterCard = Template.bind({});
MasterCard.args = {
  cardLogo: 'assets/icons/mastercard.png',
  cardName: "Sample",
  cardNumber: "1244 1234 1345 3255",
  cardHolderName: "Yessie",
  cardExpiry: "02/25",
};
