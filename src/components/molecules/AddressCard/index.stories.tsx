import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddressCard from '.';

export default {
  title: 'Molecules/AddressCard',
  component: AddressCard,
} as ComponentMeta<typeof AddressCard>;

const Template: ComponentStory<typeof AddressCard> = (
  props,
) => <AddressCard {...props} />;

export const SelectedAddressCard = Template.bind({});
SelectedAddressCard.args = {
  activeId: 1,
  addressData: {
    id: 1,
    addressType: "HOME",
    flatNumber:"2235",
    address1: "California Street Mountain View",
    address2: "California APT#021 - 11023",
    status: false,
  },
};

export const NonSelectedAddressCard = Template.bind({});
NonSelectedAddressCard.args = {
  activeId: 2,
  addressData: {
    id: 1,
    addressType: "HOME",
    flatNumber:"2235",
    address1: "California Street Mountain View",
    address2: "California APT#021 - 11023",
    status: false,
  },
};