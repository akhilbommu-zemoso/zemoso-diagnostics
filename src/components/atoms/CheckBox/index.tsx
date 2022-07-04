import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import React from "react";

export interface CheckBoxProps {
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label={<Typography variant="caption4">{label}</Typography>}
    />
  );
};

export default CheckBox;
