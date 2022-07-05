import { Button, Grid, Radio, Typography } from "@mui/material";
import { COLORS } from "../../../theme";

export interface AddressCardProps {
  activeId?: any;
  addressData: {
    id?: any;
    flatNumber?: string;
    addressType?: string;
    address1?: string;
    address2?: string;
    status?: boolean;
  };
}
const AddressCard: React.FC<AddressCardProps> = ({ activeId, addressData }) => {
  const handleClick = () => {};

  return (
    <Button onClick={handleClick}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        borderRadius="8px"
        boxSizing="border-box"
        padding="12px 0px 12px 12px"
        sx={{ width: "535px", minHeight: "128px" }}
      >
        <Grid item marginBottom="12px">
          <Typography
            variant="overline"
            color={COLORS.GAMMA_TEXT_HIGH_EMPHASIS}
          >
            {addressData.addressType}
          </Typography>
        </Grid>
        <Grid
          item
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Grid item width="258px" textAlign="start">
            <Typography
              variant="overline"
              textTransform="none"
              color={COLORS.GAMMA_TEXT_MEDIUM_EMPHASIS}
            >
              {addressData.flatNumber} {addressData.address1}
              {addressData.address2}
            </Typography>
          </Grid>
          <Grid item>
            <Radio checked={addressData.id === activeId ? true : false} />
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
};

export default AddressCard;
