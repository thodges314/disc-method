import Card from "@mui/material/Card";

import { hexToRgba } from "utils/utils";
import {
  synthCyberDarkBlue,
  synthCyberBlack,
} from "interactivity/resources/constants/colors";

const cyberDarkBlue = hexToRgba(synthCyberDarkBlue, 1);
const darkColour = hexToRgba(synthCyberBlack, 1);

const CanvasCard = ({ height, width, children }) => (
  <Card
    sx={{
      height: height,
      width: width,
      mt: "20px",
      mb: 0,
      boxShadow: `2px 2px 2px 2px ${cyberDarkBlue}`,
      borderLeft: `1px solid ${cyberDarkBlue}`,
      borderRight: `1px solid ${cyberDarkBlue}`,
      borderBottom: `1px solid ${cyberDarkBlue}`,
      borderTop: `1px solid ${cyberDarkBlue}`,
      backgroundColor: darkColour,
    }}
  >
    {children}
  </Card>
);

export default CanvasCard;
