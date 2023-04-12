import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const equationArray = [
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - (-5) \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - (-4) \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - (-3) \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - (-2) \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - (-1) \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - 0 \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - 1 \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - 2 \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - 3 \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - 4 \\right ) ^ 2}} $$`,
  `$$ {\\color{${sunsetYellow}}{y= \\left ( x - 5 \\right ) ^ 2}} $$`,
];

export default equationArray;
