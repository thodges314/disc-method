import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetOrange,
  themeBackground,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(themeBackground, 1);
const sunsetOrangeHeavy = hexToRgba(synthSunsetOrange, 1);
const sunsetOrangeLight = hexToRgba(synthSunsetOrange, 0.1);

const StyledSummaryCard = styled(Card)({
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  color: sunsetOrangeHeavy,
  backgroundColor: backgroundColor, //hexToRgba(synthCyberBlack, 0),
  borderLeft: `1px solid ${sunsetOrangeLight}`,
  borderRight: `1px solid ${sunsetOrangeLight}`,
  borderBottom: `1px solid ${sunsetOrangeHeavy}`,
  borderTop: `1px solid ${sunsetOrangeHeavy}`,
  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const SummaryCard = ({ children }) => (
  <StyledSummaryCard sx={{ boxShadow: `4px 4px 4px 4px ${sunsetOrangeHeavy}` }}>
    <CardContent>{children}</CardContent>
  </StyledSummaryCard>
);

export default SummaryCard;
