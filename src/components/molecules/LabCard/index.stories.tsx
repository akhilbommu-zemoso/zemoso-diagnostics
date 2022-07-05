import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabCard from '.';
import Altos from '../../../../public/assets/icons/Altos.svg';

export default {
  title: 'Molecules/LabCard',
  component: LabCard,
} as ComponentMeta<typeof LabCard>;

const Template: ComponentStory<typeof LabCard> = (props) => (
  <LabCard {...props} />
);

export const SelectedTestCard = Template.bind({});
SelectedTestCard.args = {
  activeId: 1,
  labCardData: {
    id: 1,
    lab: {
      name: 'Los Altos Center Lab',
      logo: Altos,
    },
    price: 1200,
    rating: 4.3,
    reportGeneratedTime: 24,
    slotsLeft: 4,
  },
};

export const NonSelectedTestCard = Template.bind({});
NonSelectedTestCard.args = {
  activeId: 1,
  labCardData: {
    id: 2,
    lab: {
      name: 'Los Altos Center Lab',
      logo: Altos,
    },
    price: 1200,
    rating: 4.3,
    reportGeneratedTime: 24,
    slotsLeft: 4,
  },
};

