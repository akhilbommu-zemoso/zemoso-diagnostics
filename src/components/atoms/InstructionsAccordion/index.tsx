import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as StartIcon } from "../../../../public/assets/icons/info.svg";
import React from "react";
import { Grid, SvgIcon } from "@mui/material";
import theme, { COLORS } from "../../../theme";

export interface InstructionsAccordionProps {
  startIcon?: any;
  accordionHeader: string;
  accordionContent: string;
}

const InstructionsAccordion: React.FC<InstructionsAccordionProps> = ({
  startIcon,
  accordionHeader,
  accordionContent,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      sx={{
        boxShadow: "none",
        width: "434px",
        bgcolor: theme.palette.grey[100],
      }}
      disableGutters
      onChange={handleChange}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <SvgIcon component={StartIcon} sx={{ marginTop: "2px" }} />
        <Typography
          variant="button"
          sx={{ textTransform: "none", color: theme.palette.primary.dark }}
        >
          {accordionHeader}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ marginTop: "-10px" }}>
        <Typography
          variant="caption4"
          sx={{ color: COLORS.GAMMA_TEXT_MEDIUM_EMPHASIS }}
        >
          {accordionContent}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default InstructionsAccordion;
