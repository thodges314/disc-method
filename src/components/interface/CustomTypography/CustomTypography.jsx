import Typography from "@mui/material/Typography";
import { InlineEquation } from "components/interface/DisplayEquation";

const CustomTypography = ({ children }) => (
  <Typography sx={{ marginTop: "0.4rem" }}>
    <InlineEquation>{children}</InlineEquation>
  </Typography>
);

export default CustomTypography;
