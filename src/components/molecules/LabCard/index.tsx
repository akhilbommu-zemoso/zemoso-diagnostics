import { Button, Grid, Typography } from "@mui/material";
import { COLORS } from "../../../theme";
import Star from "../../../../public/assets/icons/star.svg";
import Calendar from "../../../../public/assets/icons/calendar2.svg";
import Selected from '../../../../public/assets/icons/selected.svg';

interface LabCardProps {
  labCardData?: any;
  activeId: any;
}

const LabCard: React.FC<LabCardProps> = ({
  labCardData,
  activeId,
}) => {
  return (
    <Button>
      <Grid
        sx={{
          height: "144px",
          width: "535px",
          borderRadius: "8px",
          padding: "12px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
        }}
        border={
          labCardData.id === activeId
            ? `2px solid ${COLORS.BETA_PURPLE_800}`
            : `1px solid ${COLORS.GAMMA_GREY_100}`
        }
      >
        <Grid item container display="flex" flexDirection="row">
          <Grid item marginRight="16px" marginLeft="4px" marginTop="4px">
            <img src={labCardData.lab.logo} />
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Grid item>
              <Typography
                variant="button"
                textTransform="none"
                color={COLORS.GAMMA_TEXT_MEDIUM_EMPHASIS}
              >
                {labCardData.lab.name}
              </Typography>
            </Grid>
            <Grid item container display="flex" alignItems="center">
              <Grid item>
                <img src={Star} />
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  sx={{
                    marginLeft: "5.5px",
                    color: COLORS.GAMMA_TEXT_MEDIUM_EMPHASIS,
                  }}
                >
                  {labCardData.rating}
                </Typography>
              </Grid>
              <Grid item marginLeft="20px">
                <img src={Calendar} />
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  textTransform="none"
                  sx={{
                    marginLeft: "5.5px",
                    color: COLORS.GAMMA_ALERTS_GREEN,
                  }}
                >
                  {labCardData.slotsLeft + " Slots Avaliable"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="caption"
                fontWeight="400"
                textTransform="none"
                color={COLORS.GAMMA_TEXT_MEDIUM_EMPHASIS}
              >
                {"Reports ready in " + labCardData.reportGeneratedTime + " hrs"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="caption"
                textTransform="none"
                color={COLORS.GAMMA_TEXT_HIGH_EMPHASIS}
              >
                {"$" + labCardData.price + " for 1 Test"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <img
              src={labCardData.id === activeId ? Selected : ''}
            />
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
};

export default LabCard;
