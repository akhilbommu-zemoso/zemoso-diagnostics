import React from "react";
import { Button as MaterialButton } from "@mui/material";
import { COLORS } from "../../../theme";

export interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: "outlined" | "contained" | "text";
  startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  variant,
  startIcon,
  ...props
}) => {
  return (
    <MaterialButton
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      {...props}
      sx={{
        textTransform: "none",
        color: label != "Cancel" ? "" : COLORS.GAMMA_ALERTS_RED_200,
        width: "222px",
        height: "42px",
      }}
    >
      {label}
    </MaterialButton>
  );
};

export default Button;
