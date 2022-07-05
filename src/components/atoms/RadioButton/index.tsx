import { FormControlLabel, Radio, RadioProps, Typography } from "@mui/material";
import React from "react";

export interface RadioButtonProps extends RadioProps {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <FormControlLabel
      control={<Radio />}
      value={props.value}
      label={<Typography fontSize={"14px"}>{label}</Typography>}
    />
  );
};

export default RadioButton;
