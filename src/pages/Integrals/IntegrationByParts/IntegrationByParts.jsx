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

// const entries_ex_1_1 = [
//   [
//     <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{x}}$$`}</DisplayEquation>,
//     <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v}} = {\\color{${sunsetYellow}}{\\underline{\\hspace{0.5cm}}}}$$`}</DisplayEquation>,
//   ],
//   [
//     <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u'}} = {\\color{${sunsetMagenta}}{\\underline{\\hspace{0.5cm}}}}$$`}</DisplayEquation>,
//     <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{\\mathit{e}^x dx}}$$`}</DisplayEquation>,
//   ],
// ];
const entries_ex_1_1 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\underline{\\hspace{1.5cm}}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\underline{\\hspace{1.5cm}}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{\\mathit{e}^x dx}}$$`}</DisplayEquation>,
  ],
];

const entries_ex_1_2 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v}} = {\\color{${sunsetYellow}}{\\mathit{e}^x}}$$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u'}} = {\\color{${sunsetMagenta}}{dx}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{\\mathit{e}^x dx}}$$`}</DisplayEquation>,
  ],
];

const entries_ex_2_1 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\underline{\\hspace{1.5cm}}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\underline{\\hspace{1.5cm}}} $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{sin(x) dx}}$$`}</DisplayEquation>,
  ],
];

const entries_ex_2_2 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v}} = {\\color{${sunsetYellow}}{-cos(x)}}$$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u'}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x dx}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{sin(x) dx}}$$`}</DisplayEquation>,
  ],
];

const entries_ex_2_3 = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v}} = {\\color{${sunsetYellow}}{sin(x)}}$$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{u'}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x dx}}$$`}</DisplayEquation>,
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{cos(x) dx}}$$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{`$$ \\int {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v}}-\\int {\\color{${sunsetYellow}}{v}\\,\\color{${sunsetMagenta}}{u'}} $$`}</DisplayEquation>
      <CustomTypography>
        Several of the integreals that are derived in this app are done so with
        Integration by Parts. Integration by Parts works well if you are
        integrating a product of a polynomial and a transcendental, or the
        product of two transcendentals.
      </CustomTypography>
    </SummaryCard>
    <SectionCard>
      <CustomTypography>
        Polynomial functions are the first you learned to find integrals and
        derivatives of. Usually, powers of x, multiplied by constants, and added
        together, like {`$ f(x) = x^2 + 3x + 5$`}. Integrals and derivatives are
        easily found with repeated application of{" "}
        <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>,{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>{" "}
        and,{" "}
        <CustomLink href="/Integrals/SumOrDifferenceRule">
          Sum or Difference Rule
        </CustomLink>
        . If you take the derivative of a polynomial function enough times, you
        eventually get 1.
      </CustomTypography>
      <CustomTypography>
        Transcendental Functions, unlike polynomials, don't break down with
        repeated derivation, and tend to form a circular pattern with both
        integration or derivation.
      </CustomTypography>
      <CustomTypography>
        Examples include {`$ \\mathit{e}^x $`}:
      </CustomTypography>
      <DisplayEquation>{`$$ {\\tfrac{d}{dx} {\\mathit{e}^x} = \\mathit{e}^x} $$`}</DisplayEquation>
      <CustomTypography>and {`$ sin(x) $`}:</CustomTypography>
      <DisplayEquation>{`$$ {\\tfrac{d}{dx} {sin(x)} = cos(x)} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\tfrac{d}{dx} {cos(x)} = -sin(x)} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {-\\tfrac{d}{dx} {sin(x)} = -cos(x)} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {-\\tfrac{d}{dx} {cos(x)} = sin(x)} $$`}</DisplayEquation>
      <CustomTypography>
        Below a present the two patterns where you will use this form, (1) the
        product of a polynomial and a transcendental, and (2) the product of two
        transcendentals.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Example 1: Polynomial and Transcendantal:
      </Typography>
      <CustomTypography>Consider the integral:</CustomTypography>
      <DisplayEquation>{`$$ {\\int x \\mathit{e}^x dx} $$`}</DisplayEquation>
      <CustomTypography>
        If we take either a derivative or integral of the transcendental
        function, {`$ \\mathit{e}^x $`}, we get {`$ \\mathit{e}^x $`} back out,
        so it's not a clear choice for either{" "}
        {`$ {\\color{${sunsetMagenta}}{u}} $`} or{" "}
        {`$ {\\color{${sunsetYellow}}{v'}} $`}. If we take the derivative of{" "}
        {`$ x $`}, it breaks down to the simpler form {`$ dx $`}, whereas if we
        take the integral of {`$ x $`}, it becomes the more complex{" "}
        {`$ \\tfrac{x^2}{2} $`}. For this reason, we chose{" "}
        {`$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{x}}$`}{" "}
        and{" "}
        {`$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{\\mathit{e}^x dx}}$`}
        . Plug those into the table, and find{" "}
        {`$ {\\color{${sunsetMagenta}}{u'}} $`} and{" "}
        {`$ {\\color{${sunsetYellow}}{v}} $`} (don't worry about {`$+C$`} for
        now, we'll come to that in the last step).
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_ex_1_1} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_ex_1_2} />
      </div>
      <CustomTypography>
        Fill in {`$ {\\color{${sunsetMagenta}}{u}} $`},{" "}
        {`$ {\\color{${sunsetMagenta}}{u'}} $`},{" "}
        {`$ {\\color{${sunsetYellow}}{v}} $`} and{" "}
        {`$ {\\color{${sunsetYellow}}{v'}} $`} based on the form{" "}
        {`$ \\int {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v}}-\\int {\\color{${sunsetYellow}}{v}\\,\\color{${sunsetMagenta}}{u'}} $`}{" "}
        and finish the integration.
      </CustomTypography>
      <DisplayEquation>
        {`$$ \\int \\color{${sunsetMagenta}}{x} \\color{${sunsetYellow}}{\\mathit{e}^x dx} = {\\color{${sunsetMagenta}}{x}\\,\\color{${sunsetYellow}}{e^x}}-\\int {\\color{${sunsetYellow}}{e^x}\\,\\color{${sunsetMagenta}}{dx}} $$`}
      </DisplayEquation>
      <DisplayEquation>{`$$ \\int x \\mathit{e}^x dx = x\\,e^x - e^x + C $$`}</DisplayEquation>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Example 2: Two Transcendentals:
      </Typography>
      <CustomTypography>
        Suppose that your integral involves two transcendental functions:
      </CustomTypography>
      <DisplayEquation>{`$$ \\int{\\mathit{e}^x sin(x) dx} $$`}</DisplayEquation>
      <CustomTypography>
        Neither {`$ \\mathit{e}^x $`} for {`$ sin(x) $`} looks like a natural
        candidate to be either {`$ \\color{${sunsetMagenta}}{u} $`} or{" "}
        {`$ \\color{${sunsetYellow}}{v'} $`}, so make a choice and stick with
        it. In this case, we'll use{" "}
        {`$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}}$`}{" "}
        and{" "}
        {`$ {\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetYellow}}{sin(x) dx}}$`}
        . Put these into a table, find {`$ \\color{${sunsetMagenta}}{u'} $`} and{" "}
        {`$ \\color{${sunsetYellow}}{v} $`}, and plug these into{" "}
        {`$ \\int {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v'}} = {\\color{${sunsetMagenta}}{u}\\,\\color{${sunsetYellow}}{v}}-\\int {\\color{${sunsetYellow}}{v}\\,\\color{${sunsetMagenta}}{u'}} $`}{" "}
        to move on to the next step.
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_ex_2_1} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_ex_2_2} />
      </div>
      <DisplayEquation>{`$$ \\int{{\\color{${sunsetMagenta}}{\\mathit{e}^x}} {\\color{${sunsetYellow}}{sin(x) dx}}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}} \\left ( \\color{${sunsetYellow}}{-cos(x)}\\right ) - \\int \\left ( \\color{${sunsetYellow}}{-cos(x)}\\right ) \\color{${sunsetMagenta}}{\\mathit{e}^x dx}$$`}</DisplayEquation>
      <DisplayEquation>{`$$ \\int \\mathit{e}^x sin(x) dx = - \\mathit{e}^x cos(x) + \\int \\mathit{e}^x cos(x) dx $$`}</DisplayEquation>
      <CustomTypography>
        The {`$ \\int \\mathit{e}^x cos(x) dx $`} integral looks neither
        simpler, nor more complex, then the integral we started with. Let's
        repeat this process, again choosing{" "}
        {`$ {\\color{${sunsetMagenta}}{u}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}}$`}
        .
      </CustomTypography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <CustomTable entries={entries_ex_2_3} />
      </div>
      <DisplayEquation>{`$$ \\int{{\\color{${sunsetMagenta}}{\\mathit{e}^x}} {\\color{${sunsetYellow}}{cos(x) dx}}} = {\\color{${sunsetMagenta}}{\\mathit{e}^x}}  \\color{${sunsetYellow}}{sin(x)} - \\int  \\color{${sunsetYellow}}{sin(x)} \\color{${sunsetMagenta}}{\\mathit{e}^x dx}$$`}</DisplayEquation>
      <CustomTypography>
        You may have noticed that the original integral that we are trying to
        solve for has reappeared. Plug the result from this step into the
        previous step, and with a little algebra, you will see the result appear
        quite beautifully.
      </CustomTypography>
      <DisplayEquation>{`$$ \\int \\mathit{e}^x sin(x) dx = - \\mathit{e}^x cos(x) + \\mathit{e}^x sin(x) - \\int \\mathit{e}^x sin(x) dx $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\int \\mathit{e}^x sin(x) dx}} = - \\mathit{e}^x cos(x) + \\mathit{e}^x sin(x) - {\\color{${sunsetViolet}}{\\int \\mathit{e}^x sin(x) dx}} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ 2{\\color{${sunsetViolet}}{\\int \\mathit{e}^x sin(x) dx}} = - \\mathit{e}^x cos(x) + \\mathit{e}^x sin(x) $$`}</DisplayEquation>
      <DisplayEquation>{`$$ {\\color{${sunsetViolet}}{\\int \\mathit{e}^x sin(x) dx}} = \\frac{- \\mathit{e}^x cos(x) + \\mathit{e}^x sin(x)}{2} $$`}</DisplayEquation>
      <DisplayEquation>{`$$ \\int \\mathit{e}^x sin(x) dx = \\frac{- \\mathit{e}^x cos(x) + \\mathit{e}^x sin(x)}{2} + C$$`}</DisplayEquation>
    </SectionCard>
  </>
);

export default Component;
