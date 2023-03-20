import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import Typography from "@mui/material/Typography";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const entries = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u=\\sin(x)}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v=x^2}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u^\\prime=\\cos(x)}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v^\\prime=2x}} $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {
          "$$\\left (  \\frac{u}{v} \\right )^\\prime = \\frac{u^\\prime v - v^\\prime u}{v^2}\\;\\;$$"
        }
      </DisplayEquation>
      <Typography>or</Typography>
      <DisplayEquation>
        {
          "$$\\frac{\\mathrm{d} }{\\mathrm{d} x}\\left (  \\frac{u}{v} \\right ) = \\frac{\\tfrac{\\mathrm{d} u}{\\mathrm{d} x} * v - \\tfrac{\\mathrm{d} v}{\\mathrm{d} x} * u}{v^2}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        It's easiest to use the prime notation to remember the quotient rule.
        You just have to commit this pattern to memory.
      </CustomTypography>
      <CustomTypography>
        Some people repeat little mnemonics to themselves like 'bottom dee-top
        minus top dee-bottom over bottom squared.'
      </CustomTypography>
      <CustomTypography>
        Because subtraction is not commutative, it's important to remember the
        order of the numerator in this derivative (take the derivative of the
        numerator first, the denominator second).
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Example
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <DisplayEquation>
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} \\frac{\\color{${sunsetMagenta}}{\\sin(x)}}{{\\color{${sunsetYellow}}{x^2}}}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ \\frac{\\left ( {\\color{${sunsetMagenta}}{\\cos(x)}} \\right )\\left(\\color{${sunsetYellow}}{x^2} \\right )-\\left( {\\color{${sunsetMagenta}}{\\sin(x)}}\\right)\\left (\\color{${sunsetYellow}}{2x}\\right )}{\\left (\\color{${sunsetYellow}}{x^2}\\right )^2}$$`}
          </DisplayEquation>
          <DisplayEquation>{`$$\\frac{x^2\\cos(x)-2x\\sin(x)}{x^4}$$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>
      <CustomTypography>
        As an exercise, try to get the same result at this quotient rule example
        using the{" "}
        <CustomLink href="/Derivatives/ProductRule">Product Rule</CustomLink>{" "}
        with {`$u=\\sin(x)$`} and {`$v=x^{-2}$`}.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
