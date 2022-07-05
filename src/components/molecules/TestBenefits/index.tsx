import { Grid, Typography } from "@mui/material";
import Icon from "../../atoms/Icon";

interface TestBenefitsProps {
  benefitImage: any;
  benefitName: string;
}

const TestBenefits: React.FC<TestBenefitsProps> = ({
  benefitImage,
  benefitName,
}) => {
  return (
    <Grid
      container
      sx={{
        width: "133px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Icon type="testpage" src={benefitImage} />
      </Grid>
      <Grid item sx={{ width: "64px", marginLeft: "6px" }}>
        <Typography variant="overline" textTransform="none">{benefitName}</Typography>
      </Grid>
    </Grid>
  );
};

export default TestBenefits;
