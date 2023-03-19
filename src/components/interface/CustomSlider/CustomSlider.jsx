import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { hexToRgba } from "utils/utils";

import { synthCyberPink } from "interactivity/resources/constants/colors";

const cyberPink = hexToRgba(synthCyberPink);

export const CustomSlider = styled(Slider)({
  color: cyberPink,
});
