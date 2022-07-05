import { Grid, Button, Typography } from "@mui/material";
import { COLORS } from "../../../theme";
import Icon from "../../atoms/Icon";

const buttonStyles = {
  width: "283px",
  height: "116px",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 56px",
  borderRadius: "8px",
};

export interface TestTypeProps {
  testName?: string;
  testImage?: any;
  onClick?: any;
}

const TestType: React.FC<TestTypeProps> = ({
  testName,
  testImage,
  onClick,
}) => {
  return (
    <Button sx={buttonStyles} onClick={onClick}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Icon type="homepage" src={testImage} />
        </Grid>
        <Grid item marginTop="15px">
          <Typography
            variant="caption"
            fontWeight="500"
            color={COLORS.GAMMA_TEXT_MEDIUM_EMPHASIS}
            textTransform="none"
          >
            {testName}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default TestType;
