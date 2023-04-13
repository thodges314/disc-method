import {
  synthSunsetYellow,
  synthSunsetMagenta,
  synthSunsetOrange,
  synthSunsetPink,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetOrange = hexToRgba(synthSunsetOrange, 1);
const sunsetPink = hexToRgba(synthSunsetPink);
const equationArray = [];
for (let i = 0; i <= 5; i++) {
  equationArray.push(
    `$$ {\\color{${sunsetPink}}{{\\color{${sunsetOrange}}{${i}}}^2 = {\\color{${sunsetMagenta}}{x}}^2 + {\\color{${sunsetYellow}}{y}}^2}} $$`
  );
}

export default equationArray;
