import DisplayEquation from "components/interface/DisplayEquation";
import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const equationArray = [
  <DisplayEquation>
    {`$$ {\\color{${sunsetYellow}}{u=\\frac{\\sin(x)}{2}}} $$`}
  </DisplayEquation>,
  <DisplayEquation>
    {`$$ {\\color{${sunsetYellow}}{u=\\cos(x)}} $$`}
  </DisplayEquation>,
  <DisplayEquation>
    {`$$ {\\color{${sunsetYellow}}{u=\\tan(x)}} $$`}
  </DisplayEquation>,
  <DisplayEquation>
    {`$$ {\\color{${sunsetYellow}}{u=\\sec(x)}} $$`}
  </DisplayEquation>,
  <DisplayEquation>
    {`$$ {\\color{${sunsetYellow}}{u=\\csc(x)}} $$`}
  </DisplayEquation>,
  <DisplayEquation>
    {`$$ {\\color{${sunsetYellow}}{u=\\cot(x)}} $$`}
  </DisplayEquation>,
];

const equationArray2 = [
  `$$ {\\color{${sunsetYellow}}{u=\\frac{\\sin(x)}{2}}} $$`,
  `$$ {\\color{${sunsetYellow}}{u=\\cos(x)}} $$`,
  `$$ {\\color{${sunsetYellow}}{u=\\tan(x)}} $$`,
  `$$ {\\color{${sunsetYellow}}{u=\\sec(x)}} $$`,
  `$$ {\\color{${sunsetYellow}}{u=\\csc(x)}} $$`,
  `$$ {\\color{${sunsetYellow}}{u=\\cot(x)}} $$`,
];

export { equationArray2 };
export default equationArray;
