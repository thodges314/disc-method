import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthCyberDarkBlue,
  synthCyberLightBlue,
  lightGrey,
} from "interactivity/resources/constants/colors";

const StyledSideNoteCard = styled(Card)({
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  color: hexToRgba(lightGrey, 0.8),
  backgroundColor: hexToRgba(synthCyberDarkBlue, 1),
  boxShadow: `4px 4px ${hexToRgba(synthCyberLightBlue, 0.2)}`,
  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const SideNoteCard = ({ children }) => (
  <StyledSideNoteCard>
    <CardContent>{children}</CardContent>
  </StyledSideNoteCard>
);

export default SideNoteCard;
