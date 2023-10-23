import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import SideNoteCard from "components/interface/SideNoteCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import Typography from "@mui/material/Typography";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);
const cyberPaleBlue = hexToRgba(synthCyberPaleBlue, 1);

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{`$$\\frac{\\mathrm{d}}{\\mathrm{d}x}f^{-1}(x) = \\frac{1}{f'\\left ( f^{-1}(x)\\right)}$$`}</DisplayEquation>
    </SummaryCard>
    <SideNoteCard>
      This form is useful for finding derivatives of inverse trigonometric
      functions.
    </SideNoteCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Example
      </Typography>
      <CustomTypography>
        Suppose that we wanted to find{" "}
        <CustomLink href="/Derivatives/InverseTrigonometricDerivatives">
          the derivative of {`$ y = sin^{-1}(x)$`}
        </CustomLink>
        . That means that {`$x = sin(y)$`}. From this information, we can draw
        the following triangle if we assume a hypotenuse of 1:
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>image here</div>
        <CustomTypography>
          If {`$sin(y)=x$`}, then, by the right-triange definition of trig
          functions, {`$sin(y) = \\frac{opposite}{hypotenuse}=\\frac{x}{1}$`}.
          After filling these two values in, we can use the Pythagorean Theorem
          to find {`$\\sqrt{1-x^2}$`} for the remaining leg.
        </CustomTypography>
      </div>
      <CustomTypography>
        We define{" "}
        {`$\\color{${sunsetViolet}}{f(x)}=\\color{${sunsetViolet}}{sin(x)}$`},{" "}
        {`$\\color{${sunsetMagenta}}{f^{-1}(x)}=\\color{${sunsetMagenta}}{sin^{-1}(x)}$`}{" "}
        and{" "}
        {`$\\color{${sunsetYellow}}{f'(x)}=\\color{${sunsetYellow}}{cos(x)}$`}.
        Using the Inverse Function rule:
      </CustomTypography>
      <DisplayEquation>{`$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\color{${sunsetMagenta}}{f^{-1}(x)} = \\frac{1}{\\color{${sunsetYellow}}{f'\\left ( \\color{${sunsetMagenta}}{f^{-1}(x)}\\right)}}$$`}</DisplayEquation>
      <DisplayEquation>{`$$\\frac{\\mathrm{d}}{\\mathrm{d}x} \\color{${sunsetMagenta}}{sin^{-1}(x)} = \\frac{1}{\\color{${sunsetYellow}}{cos\\left ( \\color{${sunsetMagenta}}{sin^{-1}(x)}\\right)}}$$`}</DisplayEquation>
      <DisplayEquation>{`$$=\\frac{1}{cos(y)}$$`}</DisplayEquation>
      <DisplayEquation>{`$$=\\frac{1}{\\sqrt{1-x^2}}$$`}</DisplayEquation>
      <CustomTypography>
        To finish this, we used {`$cos(y) = \\sqrt{1-x^2}$`}, which can be found
        from the diagram above
        {`$\\left ( cos(y)=\\tfrac{adjacent}{hypotenuse} =\\tfrac{\\sqrt{1-x^2}}{1} \\right )$`}
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      You can practice this pattern by finding functions for other{" "}
      <CustomLink href="/Derivatives/InverseTrigonometricDerivatives">
        Inverse Trigonometric Derivatives
      </CustomLink>
      , which all can be found with a similar pattern of drawing and labeling a
      right triangle and applying this Inverse Function format.
    </SectionCard>
  </>
);

export default Component;
