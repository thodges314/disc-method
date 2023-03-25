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

export default equationArray;
