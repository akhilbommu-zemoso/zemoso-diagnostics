import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography, styled, Box, Stack } from "@mui/material";
import { COLORS } from "../../../theme";

const StyledPaidRoundedIcon = styled(PaidRoundedIcon)({
  width: "24px",
  height: "24px",
  color: COLORS.GAMMA_GREY_500,
});

const StyledCircleIcon = styled(CircleIcon)({
  width: "6px",
  height: "6px",
  color: COLORS.GAMMA_GREY_500,
});

const StyledAccessTimeRoundedIcon = styled(AccessTimeRoundedIcon)({
  width: "24px",
  height: "24px",
  color: COLORS.GAMMA_GREY_500,
});

const StyledBox = styled(Box)({
  border: `1px solid ${COLORS.GAMMA_GREY_100}`,
  borderRadius: "12px",
  display: "inline-flex",
  padding: "4px",
});

interface PriceTimeDetailsProps {
  price: number;
  time: number;
}

const PriceTimeDetails: React.FC<PriceTimeDetailsProps> = ({ price, time }) => {
  return (
    <StyledBox>
      <Stack
        sx={{
          alignItems: "center",
        }}
        direction="row"
        spacing="8px"
      >
        <StyledPaidRoundedIcon />
        <Typography variant="overline2" textTransform="none">
          {`Starting from ₹${price}`}
        </Typography>
      </Stack>
      <Box
        sx={{ alignItems: "center", marginLeft: "24px", marginRight: "24px" }}
      >
        <StyledCircleIcon />
      </Box>
      <Stack
        sx={{
          alignItems: "center",
        }}
        direction="row"
        spacing="8px"
      >
        <StyledAccessTimeRoundedIcon />
        <Typography variant="overline2" textTransform="none">
          {`Reports ready in ${time} Hours`}
        </Typography>
      </Stack>
    </StyledBox>
  );
};

export default PriceTimeDetails;
