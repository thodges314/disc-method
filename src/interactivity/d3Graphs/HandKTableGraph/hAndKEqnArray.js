import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const equationArray = [];
for (let h = -5; h <= 5; h++) {
  equationArray.push(
    h < 0
      ? `$$ {\\color{${sunsetYellow}}{y= \\left ( x - (${h}) \\right ) ^ 2}} $$`
      : h === 0
      ? `$$ {\\color{${sunsetYellow}}{y= x ^ 2}} $$`
      : `$$ {\\color{${sunsetYellow}}{y= \\left ( x - ${h} \\right ) ^ 2}} $$`
  );
}

export default equationArray;
