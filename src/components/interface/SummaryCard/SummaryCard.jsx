import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetPink,
  synthCyberPurple,
} from "interactivity/resources/constants/colors";

const StyledSummaryCard = styled(Card)({
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  backgroundColor: hexToRgba(synthSunsetPink, 0.6),
  boxShadow: `4px 4px ${hexToRgba(synthCyberPurple, 0.2)}`,
  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const SummaryCard = ({ children }) => (
  <StyledSummaryCard>
    <CardContent>{children}</CardContent>
  </StyledSummaryCard>
);

export default SummaryCard;
