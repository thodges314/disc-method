import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";
import {
  synthCyberPaleBlue,
  themeBackground,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(themeBackground, 1);
const paleBlueHeavy = hexToRgba(synthCyberPaleBlue, 1);
const paleBlueLight = hexToRgba(synthCyberPaleBlue, 0.1);

const StyledSectionCard = styled(Card)({
  marginTop: "40px",
  marginLeft: "20px",
  marginRight: "20px",
  color: paleBlueHeavy,
  backgroundColor: backgroundColor,
  borderLeft: `1px solid ${paleBlueLight}`,
  borderRight: `1px solid ${paleBlueLight}`,
  borderBottom: `1px solid ${paleBlueHeavy}`,
  borderTop: `1px solid ${paleBlueHeavy}`,
  // display: "flex",
  // alignItems: "center",
  // flexWrap: "wrap",
  // "& > div": {
  //   display: "flex",
  //   alignItems: "center",
  //   flexWrap: "wrap",
  // justifyContent: "space-between",
  // },
});

const SectionCard = ({ children }) => (
  <StyledSectionCard sx={{ boxShadow: `4px 4px 4px 4px ${paleBlueHeavy}` }}>
    <CardContent sx={{ p: "4em", "&:last-child": { pb: "4em" } }}>
      {children}
    </CardContent>
  </StyledSectionCard>
);

export default SectionCard;
