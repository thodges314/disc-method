import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import Typography from "@mui/material/Typography";
import CustomLink from "components/interface/CustomLink";

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
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x} u^n = nu^{n-1}\\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        You will see the power rule quite a lot. If some differentiable function{" "}
        {"$u$"} is raised to a power {"$n$"}, then to take the derivative, bring
        the {"$n$"} value down in front of the function, and decreate the
        exponent value by {"$1$"}. Then, multiply rhe result bu the derivative
        of the differentiable function, as per the{" "}
        <CustomLink href="/Derivatives/ChainRule">Chain Rule</CustomLink>.
      </CustomTypography>
      <CustomTypography>
        In the cases where your differentiable function {"$u$"} is your variable
        of differentiation ({"$x$"}) then you can skip the chain rule step
        because {"$\\frac{\\mathrm{d} }{\\mathrm{d} x}=1$"}
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Two Examples
      </Typography>
      <CustomTypography>
        {/* <DisplayEquation> */}
        {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} {\\color{${sunsetMagenta}}{x}}^{\\color{${sunsetYellow}}{3}} = {\\color{${sunsetYellow}}{3}}{\\color{${sunsetMagenta}}{x}}^{\\color{${sunsetYellow}}{3-1}} = 3x^2$$`}
        {/* </DisplayEquation> */}
        {/* </CustomTypography>
      <CustomTypography> */}
        <DisplayEquation>
          {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} {\\color{${sunsetMagenta}}{\\sin}}^{\\color{${sunsetYellow}}{2}}{\\color{${sunsetMagenta}}{(x)}} = {\\color{${sunsetYellow}}{2}}{\\color{${sunsetMagenta}}{\\sin}}^{\\color{${sunsetYellow}}{2-1}}{\\color{${sunsetMagenta}}{(x)}}*{\\color{${sunsetMagenta}}{\\cos(x)}}=2\\sin(x)\\cos(x)$$`}
          <CustomTypography>
            where{" "}
            {`$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\sin(x)}}$`}{" "}
            and{" "}
            {`$ {\\color{${sunsetMagenta}}{\\mathrm{d} u}} = {\\color{${sunsetMagenta}}{\\cos(x)}}$`}
          </CustomTypography>
          {/* where */}
        </DisplayEquation>
        {/* <Typography>where</Typography> */}
        {/* where */}
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
