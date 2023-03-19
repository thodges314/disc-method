import Card from "@mui/material/Card";

import { hexToRgba } from "utils/utils";
import {
  synthCyberBlack,
  synthCyberPink,
  synthSunsetPink,
} from "interactivity/resources/constants/colors";

const darkColour = hexToRgba(synthCyberBlack);
const cyberPink = hexToRgba(synthCyberPink);
const sunsetPink = hexToRgba(synthSunsetPink);

const CanvasCard = ({ height, width, children }) => (
  <Card
    sx={{
      height: height,
      width: width,
      mt: "20px",
      mb: 0,
      boxShadow: `2px 2px 2px 2px ${cyberPink}`,
      borderLeft: `1px solid ${sunsetPink}`,
      borderRight: `1px solid ${sunsetPink}`,
      borderBottom: `1px solid ${sunsetPink}`,
      borderTop: `1px solid ${sunsetPink}`,
      backgroundColor: darkColour,
    }}
  >
    {children}
  </Card>
);

export default CanvasCard;
