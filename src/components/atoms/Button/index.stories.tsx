import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '.';
import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const AddPatient = Template.bind({});
AddPatient.args = {
  label: 'Add Patient',
  disabled: false,
  variant: 'contained',
};

export const cancel = Template.bind({});
cancel.args = {
  label: 'Cancel',
  disabled: false,
  variant: 'text',
};

export const SelectDateAndTime = Template.bind({});
SelectDateAndTime.args = {
  label: 'Select Date & Time',
  disabled: false,
  variant: 'contained',
};

export const NewPatient = Template.bind({});
NewPatient.args = {
  label: 'New Patient',
  startIcon: <AddIcon />,
  disabled: false,
  variant: 'text',
};