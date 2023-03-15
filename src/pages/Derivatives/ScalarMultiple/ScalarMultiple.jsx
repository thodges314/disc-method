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
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\alpha u = \\alpha \\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
      <CustomTypography>where {"$\\alpha$"} is any constant.</CustomTypography>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        Whenever a differentiable function is multiplied by a scalar (constant),
        the derivative will by that scalar multiplied by the derivative of the
        differentiable function.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Two Examples
      </Typography>
      <CustomTypography>
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}{\\color{${sunsetMagenta}}{2}}{\\color{${sunsetYellow}}{x^2}}={\\color{${sunsetMagenta}}{2}}\\left ({\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x}x^2}}\\right )={\\color{${sunsetMagenta}}{2}}*{\\color{${sunsetYellow}}{2x}}=4x$$`}
        </DisplayEquation>
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x}{\\color{${sunsetMagenta}}{2}}{\\color{${sunsetYellow}}{\\sin(x)}}={\\color{${sunsetMagenta}}{2}}\\left ({\\color{${sunsetYellow}}{\\frac{\\mathrm{d} }{\\mathrm{d} x}\\sin(x)}}\\right )={\\color{${sunsetMagenta}}{2}}{\\color{${sunsetYellow}}{\\cos(x)}}$$`}
        </DisplayEquation>
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
