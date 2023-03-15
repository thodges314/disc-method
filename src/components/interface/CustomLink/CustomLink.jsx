import Link from "@mui/material/Link";
import { synthSunsetPink } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetPinkHeavy = hexToRgba(synthSunsetPink, 1);

const CustomLink = ({ href, children }) => (
  <Link
    href={href}
    underline="none"
    color={sunsetPinkHeavy}
    sx={{
      fontWeight: "fontWeightHeavy",
    }}
  >
    {children}
  </Link>
);

export default CustomLink;
