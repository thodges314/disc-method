import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const equationArray = [];
for (let h = -5; h <= 5; h++) {
  equationArray.push([]);
  for (let k = -5; k <= 5; k++) {
    const yPart = k < 0 ? `(y+${-k}) = ` : k === 0 ? `y = ` : `(y-${k}) = `;
    const xPart = h < 0 ? `(x+${-h})^2` : h === 0 ? `x^2` : `(x-${h})^2`;
    equationArray[h + 5].push(
      `$$ {\\color{${sunsetYellow}}{${yPart}${xPart}}} $$`
    );
  }
}

export default equationArray;
