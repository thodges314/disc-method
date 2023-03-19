import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import Typography from "@mui/material/Typography";
import CustomTable from "components/interface/CustomTable";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const entries = [
  [
    <DisplayEquation>
      {`$$ {\\color{${sunsetMagenta}}{u=x^3}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetYellow}}{v=\\cos(x)}} $$`}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation>
      {`$$ {\\color{${sunsetMagenta}}{u^\\prime=3x^2}} $$`}
    </DisplayEquation>,
    <DisplayEquation>
      {`$$ {\\color{${sunsetYellow}}{v^\\prime=-\\sin(x)}} $$`}
    </DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {"$$ {\\left (uv  \\right )}^\\prime = uv^\\prime +vu^\\prime\\;\\;$$"}
      </DisplayEquation>
      <Typography>or</Typography>
      <DisplayEquation>
        {
          "$$\\;\\;\\frac{\\mathrm{d} }{\\mathrm{d} x} \\left ( uv \\right ) = u \\frac{\\mathrm{d} v}{\\mathrm{d} x} + v \\frac{\\mathrm{d} u}{\\mathrm{d} x}$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        It's easiest to use the prime notation to remember the product rule.
        Just remember that if two differentiable functions are multiplied
        together, the derivative is the first function times the derivative of
        the second function plus the second function times the derivative of the
        first function.
      </CustomTypography>
      <CustomTypography>
        Because addition and multiplication are commutative, it doesn't matter
        the order of these products, as long as you find both of them.
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
            {`$$\\frac{\\mathrm{d} }{\\mathrm{d} x} {\\color{${sunsetMagenta}}{x^3}}{\\color{${sunsetYellow}}{\\cos(x)}}$$`}
          </DisplayEquation>
          <DisplayEquation>
            {`$$ {\\color{${sunsetMagenta}}{x^3}} {\\color{${sunsetYellow}}{\\left ( -\\sin(x) \\right )}} + {\\color{${sunsetMagenta}}{3x^2}}{\\color{${sunsetYellow}}{\\cos(x)}}$$`}
          </DisplayEquation>
          <DisplayEquation>{`$$3x^2\\cos(x) - x^3\\sin(x)$$`}</DisplayEquation>
        </div>
        <CustomTable entries={entries} />
      </div>
    </SectionCard>
  </>
);

export default Component;
