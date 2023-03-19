import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";

import { synthCyberPink } from "interactivity/resources/constants/colors";

const cyberPink = hexToRgba(synthCyberPink);

export const CustomCheckbox = styled(Checkbox)({
  color: cyberPink,
  "&.Mui-checked": {
    color: cyberPink,
  },
});
