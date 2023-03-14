import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetPink,
  themeBackground,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(themeBackground, 1);
const sunsetPinkHeavy = hexToRgba(synthSunsetPink, 1);
const sunsetPinkLight = hexToRgba(synthSunsetPink, 0.1);

const StyledSideNoteCard = styled(Card)({
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "40px",
  color: sunsetPinkHeavy,
  backgroundColor: backgroundColor,
  borderLeft: `1px solid ${sunsetPinkLight}`,
  borderRight: `1px solid ${sunsetPinkLight}`,
  borderBottom: `1px solid ${sunsetPinkHeavy}`,
  borderTop: `1px solid ${sunsetPinkHeavy}`,
  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const SideNoteCard = ({ children }) => (
  <StyledSideNoteCard sx={{ boxShadow: `4px 4px 4px 4px ${sunsetPinkHeavy}` }}>
    <CardContent>{children}</CardContent>
  </StyledSideNoteCard>
);

export default SideNoteCard;
