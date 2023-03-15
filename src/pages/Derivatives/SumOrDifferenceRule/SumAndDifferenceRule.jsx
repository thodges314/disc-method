import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import Typography from "@mui/material/Typography";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} (u \\pm v) = \\frac{\\mathrm{d} u}{\\mathrm{d} x}\\pm\\frac{\\mathrm{d} v}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        If multiple differentiable functions are added together, take the
        derivative of each function separately and sum them.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Two Examples
      </Typography>
      <CustomTypography>
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} ({\\color{${sunsetMagenta}}{x^2}} + {\\color{${sunsetYellow}}{x^3}}) = {\\color{${sunsetMagenta}}{\\frac{\\mathrm{d} }{\\mathrm{d} x} x^2}} + {\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x} x^3}} = {\\color{${sunsetMagenta}}{2x}} + {\\color{${sunsetYellow}}{3x^2}}$$`}
        </DisplayEquation>{" "}
      </CustomTypography>
      <DisplayEquation>
        {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\left ( {\\color{${sunsetMagenta}}{2\\sin(x)}}-{\\color{${sunsetYellow}}{\\ln|x|}} \\right )={\\color{${sunsetMagenta}}{\\frac{\\mathrm{d} }{\\mathrm{d} x}  2\\sin(x)}}-{\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x} \\ln|x|}}  = {\\color{${sunsetMagenta}}{2\\cos(x)}} - {\\color{${sunsetYellow}}{\\frac{1}{x}}}$$`}
      </DisplayEquation>
    </SectionCard>
  </>
);

export default Component;
