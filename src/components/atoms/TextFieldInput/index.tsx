import React from "react";
import { Grid, Input, Typography } from "@mui/material";
import { COLORS } from "../../../theme";

export interface TextFieldProps {
  nameOfInputField?: string;
  placeholder?: string;
  name?: string;
  width?: string;
  value?: string;
  defaultValue?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  nameOfInputField,
  placeholder,
  name,
  width,
  value,
  defaultValue,
}) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid item>
        <Typography variant="overline2" color={COLORS.GAMMA_TEXT_LOW_EMPHASIS}>
          {nameOfInputField}
        </Typography>
      </Grid>
      <Grid item>
        <Input
          sx={{ width: width }}
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
          value={value}
        />
      </Grid>
    </Grid>
  );
};

export default TextField;
