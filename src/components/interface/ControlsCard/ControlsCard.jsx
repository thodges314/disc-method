import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthCyberBlack,
  synthCyberPaleBlue,
  lightGrey,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(lightGrey, 0.8);
const darkColour = hexToRgba(synthCyberBlack, 0.8);

const StyledControlsCard = styled(Card)({
  width: "100%",
  marginTop: "20px",
  color: darkColour,
  backgroundColor: backgroundColor,

  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const ControlsCard = ({ children }) => (
  <StyledControlsCard>
    <CardContent>{children}</CardContent>
  </StyledControlsCard>
);

export default ControlsCard;
