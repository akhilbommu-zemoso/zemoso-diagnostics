import { Box, Typography } from "@mui/material";
import theme, { COLORS } from "../../../theme";

export interface InfoCardProps {
  data?: string;
  width?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ data, width }) => {
  return (
    <Box
      style={{
        width: width,
        height: "88px",
        background: theme.palette.secondary.light,
        borderRadius: "12px",
        padding: "17px 12px",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="overline2"
        textTransform="none"
        color={COLORS.GAMMA_TEXT_HIGH_EMPHASIS}
      >
        {data}
      </Typography>
    </Box>
  );
};

export default InfoCard;
