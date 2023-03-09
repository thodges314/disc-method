import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthCyberBlack,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(synthCyberBlack, 0);
const paleBlueHeavy = hexToRgba(synthCyberPaleBlue, 1);
const paleBlueLight = hexToRgba(synthCyberPaleBlue, 0.1);

const StyledSectionCard = styled(Card)({
  width: "100%",
  marginTop: "20px",
  color: paleBlueHeavy,
  backgroundColor: backgroundColor, //hexToRgba(synthCyberBlack, 0),
  borderLeft: `1px solid ${paleBlueLight}`,
  borderRight: `1px solid ${paleBlueLight}`,
  borderBottom: `1px solid ${paleBlueHeavy}`,
  borderTop: `1px solid ${paleBlueHeavy}`,

  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const SectionCard = ({ children }) => (
  <StyledSectionCard>
    <CardContent>{children}</CardContent>
  </StyledSectionCard>
);

export default SectionCard;
