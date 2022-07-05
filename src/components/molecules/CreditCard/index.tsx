import { Box, Typography, Card, CardContent, styled } from "@mui/material";
import { COLORS } from "../../../theme";

interface CreditCardProps {
  cardLogo: string;
  cardName: string;
  cardNumber: string;
  cardHolderName: string;
  cardExpiry: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  cardLogo,
  cardName,
  cardNumber,
  cardHolderName,
  cardExpiry,
}) => {
  const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: "10px 30px",
    borderRadius: "16px",
  });

  const StyledHeaderCardContent = styled(CardContent)({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "space-between",
    padding: "20px 0px 20px 0px",
  });

  const StyledCardContent = styled(CardContent)({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "16px 0px",
  });

  const StylesCardBox = styled(Box)({
    display: "flex",
    paddingRight: "20px",
    flexDirection: "column",
  });
  return (
    <Box width="433px" height="200px">
      <StyledCard>
        <StyledHeaderCardContent>
          <img src={cardLogo} height="30px" width="48px" />
          <Typography variant="caption1" color={COLORS.GAMMA_TEXT_LOW_EMPHASIS}>
            {cardName}
          </Typography>
        </StyledHeaderCardContent>
        <StyledCardContent>
          <Typography variant="button" color={COLORS.GAMMA_TEXT_HIGH_EMPHASIS}>
            {cardNumber}
          </Typography>
        </StyledCardContent>
        <StyledCardContent>
          <StylesCardBox>
            <Typography
              variant="caption3"
              color={COLORS.GAMMA_TEXT_LOW_EMPHASIS}
            >
              Card Holder
            </Typography>
            <Typography
              variant="caption2"
              color={COLORS.GAMMA_TEXT_HIGH_EMPHASIS}
            >
              {cardHolderName}
            </Typography>
          </StylesCardBox>
          <StylesCardBox marginLeft="39px">
            <Typography
              variant="caption3"
              color={COLORS.GAMMA_TEXT_LOW_EMPHASIS}
            >
              Expires
            </Typography>
            <Typography
              variant="caption2"
              color={COLORS.GAMMA_TEXT_HIGH_EMPHASIS}
            >
              {cardExpiry}
            </Typography>
          </StylesCardBox>
        </StyledCardContent>
      </StyledCard>
    </Box>
  );
};

export default CreditCard;
