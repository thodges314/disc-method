import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import DisplayEquation from "components/interface/DisplayEquation";
import Typography from "@mui/material/Typography";
import CustomTable from "components/interface/CustomTable";
import CustomLink from "components/interface/CustomLink";
import SideNoteCard from "components/interface/SideNoteCard";
import MaclaurenChart from "interactivity/d3Graphs/MaclaurenChart";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);

const entries = [
  [
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{u=\\sin(x)}} $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{\\frac{\\mathrm{d} u}{\\mathrm{d} x}=\\cos(x)}} $$`}</DisplayEquation>,
  ],
];

const table1Entries = [
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$n$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$f^{(n)}(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$f^{(n)}(0)$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$2$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$3$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$4$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$5$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$6$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$-1$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$7$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\sin(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$0$"}
    </DisplayEquation>,
  ],
  [
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$8$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$\\cos(x)$"}
    </DisplayEquation>,
    <DisplayEquation style={{ fontSize: "120%", margin: "0.2rem" }}>
      {"$1$"}
    </DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <CustomTypography>
        A <em>Taylor Series</em> centered around {"$x=a$"} takes the form:
      </CustomTypography>
      <DisplayEquation style={{ width: "100%" }}>
        {
          "$$\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n=f(a)+\\frac{f^\\prime(a)}{1!}(x-a)+\\frac{f^{\\prime\\prime}(a)}{2!}(x-a)^2+\\frac{f^{\\prime\\prime\\prime}(a)}{3!}(x-a)^3+\\ldots$$"
        }
      </DisplayEquation>
      <CustomTypography>
        A <em>Maclaurin Series</em> is a Taylor series centered around {"$x=0$"}
        :
      </CustomTypography>
      <DisplayEquation style={{ width: "100%" }}>
        {
          "$$\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}(x)^n=f(0)+\\frac{f^\\prime(0)}{1!}x+\\frac{f^{\\prime\\prime}(0)}{2!}x^2+\\frac{f^{\\prime\\prime\\prime}(0)}{3!}x^3+\\ldots$$"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        A <em>Taylor Series</em> or <em>Maclaurin Series</em> expresses a
        function as an infinite series that is calculated from a function's
        derivatives at a single point.
      </CustomTypography>
      <CustomTypography>
        The interval of convergence of a Taylor or Maclaurin series is the range
        of values for which the series will converge. It can be found by
        applying{" "}
        <CustomLink href="/InfiniteSeries/SeriesTestBattery">
          Infinite Series Convergence Tests
        </CustomLink>
        .
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Example of a Maclaurin Series
      </Typography>
      <CustomTypography>
        Suppose that we want to find a Maclaurin Series and interval of
        convergence of this series for the Cosine function. The format of the
        Maclaurin Series is as follows:
      </CustomTypography>
      <DisplayEquation style={{ width: "100%" }}>
        {
          "$$\\sum_{n=0}^{\\infty}(x)^n=f(0)+\\frac{f^\\prime(0)}{1!}x+\\frac{f^{\\prime\\prime}(0)}{2!}x^2+\\frac{f^{\\prime\\prime\\prime}(0)}{3!}x^3+\\ldots$$"
        }
      </DisplayEquation>
      <CustomTypography>
        Begin by finding the derivatives of the Cosine function, and the value
        of those derivatives at {"$x=0$"}. Our goal is to find a pattern in the
        derivatives, and given that the Cosine function is a transcendental
        function, that shouldn't be too difficult.
      </CustomTypography>
      <SideNoteCard>
        <CustomTypography>
          Here to fit the pattern of the series, we will denote the{" "}
          <em>'zeroth'</em> derivative of a function by {"$f^{(0)}(x)$"}. This
          just means the original function. Also, recall that {"$x^0=1$"} in all
          cases where {"$x\\neq0$"} and that {"$0!=1$"}. Thus, it's the case
          that when {"$x\\neq0$"}, {"$\\frac{f^{(0)}(0)}{0!}(x)^0$"}
          {"$=\\frac{f(0)}{1}*1$"}
          {"$=f(0)$"}. In future examples, we will skip the representation of
          the first term as {"$\\frac{f^{(0)}(0)}{0!}(x)^0$"} and just write{" "}
          {"$f(0)$"}.
        </CustomTypography>
      </SideNoteCard>
      <div
        style={{
          maxWidth: "400px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table1Entries} />
      </div>
      <CustomTypography>
        Plugging these into the format of the Maclaurin Series above, we can see
        that the terms where n is odd make no contribution to this Maclaurin
        Series, and furthermore, that the Maclaurin Series follows the following
        pattern:
      </CustomTypography>
      <DisplayEquation>
        {
          "$$1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\ldots$$"
        }
      </DisplayEquation>
      <CustomTypography>
        The pattern looks clear, signs alternate between positive and negative,
        and exponents and factorials are increasing by 2. The 1 at the beginning
        is the only anomoly. Express this 1 according to the pattern by writing
        it as {"$\\frac{x^0}{0!}$"} where {"$x^0=1$"} and {"$0!=1$"}.
      </CustomTypography>
      <DisplayEquation>
        {`$$\\frac{x^\\color{${sunsetMagenta}}{0}}{\\color{${sunsetMagenta}}{0}!}\\color{${sunsetYellow}}{-}\\frac{x^\\color{${sunsetMagenta}}{2}}{\\color{${sunsetMagenta}}{2}!}\\color{${sunsetYellow}}{+}\\frac{x^\\color{${sunsetMagenta}}{4}}{\\color{${sunsetMagenta}}{4}!}\\color{${sunsetYellow}}{-}\\frac{x^\\color{${sunsetMagenta}}{6}}{\\color{${sunsetMagenta}}{6}!}\\color{${sunsetYellow}}{+}\\frac{x^\\color{${sunsetMagenta}}{8}}{\\color{${sunsetMagenta}}{8}!}\\color{${sunsetYellow}}{-}\\ldots$$`}
      </DisplayEquation>
      <CustomTypography>
        A Maclaurin Series begins with {"$n=0$"} and increases by units of{" "}
        {"$1$"}. In the above expansion, the exponents and factorials each begin
        with {"$0$"} and increase by units of {"$2$"}. Thus, we can express
        these each in our series as {`$\\color{${sunsetMagenta}}{2n} $`}.
      </CustomTypography>
      <CustomTypography>
        In order to manage the positive and negative signs, we can think of each
        term as being multiplied by {"$1, -1, 1, -1, 1, \\ldots$"}. This is
        represented by {`$\\color{${sunsetYellow}}{(-1)^n} $`} where {"$-1$"}{" "}
        raised to an even power is {"$1$"} and {"$-1$"} raised to an odd power
        is {"$-1$"}.
      </CustomTypography>
      <CustomTypography>
        The Maclaurin series for Cosine becomes:
      </CustomTypography>
      <DisplayEquation>{`$$\\sum_{n=0}^{\\infty}\\color{${sunsetYellow}}{(-1)^n}\\frac{x^{\\color{${sunsetMagenta}}{2n}}}{{\\color{${sunsetMagenta}}{2n}}!}$$`}</DisplayEquation>
      <CustomTypography>
        Since this series contains factorials, it is suggested that we use the{" "}
        <CustomLink href="/InfiniteSeries/RatioTest">
          Ratio Test for Convergence
        </CustomLink>{" "}
        to determine the interval of convergence.
      </CustomTypography>
      <CustomTypography>
        Set up{" "}
        {"$\\lim_{n\\rightarrow \\infty}\\left| \\frac{a_{n+1}}{a_n}\\right|$"}{" "}
        and determine if the limit is greater than, less than, or equal to 1.
      </CustomTypography>
      <DisplayEquation>
        {`$$\\lim_{n\\rightarrow \\infty}\\left| \\frac{\\color{${sunsetMagenta}}{a_{n+1}}}{\\color{${sunsetYellow}}{a_n}}\\right|$$`}
        {`$$\\lim_{n\\rightarrow \\infty}\\left| \\frac{\\color{${sunsetMagenta}}{(-1)^{n+1}x^{2(n+1)}}\\color{${sunsetYellow}}{2n!}}{\\color{${sunsetMagenta}}{2(n+1)!}\\color{${sunsetYellow}}{(-1)^nx^{2n}}}\\right|$$`}
        {`$$\\lim_{n\\rightarrow \\infty}\\left| \\frac{(-1)^{n+1}x^{2n+2}2n!}{(-1)^{n}x^{2n} (2n+2)!}\\right|$$`}
      </DisplayEquation>
      <CustomTypography>
        Break this final step down one piece at a time:
      </CustomTypography>
      <DisplayEquation>
        {`$$\\frac{(-1)^{n+1}}{(-1)^n} = \\frac{\\color{${sunsetViolet}}{(-1)^{n}}*(-1)}{\\color{${sunsetViolet}}{(-1)^{n}}}=-1$$`}
        {`$$\\frac{x^{2n+2}}{x^{2n}} = \\frac{\\color{${sunsetViolet}}{x^{2n}}*x^2}{\\color{${sunsetViolet}}{x^{2n}}}=x^2$$`}
        {`$$\\frac{2n!}{(2n+2)!}=\\frac{\\color{${sunsetViolet}}{2n!}}{\\color{${sunsetViolet}}{2n!}(2n+1)(2n+2)}=\\frac{1}{(2n+1)(2n+2)}=\\frac{1}{4n^2+6n+2}$$`}
      </DisplayEquation>
      <CustomTypography>This leaves us with:</CustomTypography>
      <DisplayEquation>{`$$\\lim_{\\color{${sunsetViolet}}{n}\\rightarrow \\infty}\\left|\\frac{-x^2}{4\\color{${sunsetViolet}}{n}^2+6\\color{${sunsetViolet}}{n}+2}\\right|=\\left|\\frac{x^2}{\\infty}\\right|=0$$`}</DisplayEquation>
      <CustomTypography>
        Play with the interactive demo below to see how the graphs of the finite
        expansions of this Maclaurin Series compare to the graph of the Cosine
        function:
      </CustomTypography>
      <MaclaurenChart />
      {/************** */}
      <CustomTypography>
        The more terms that we add to the series, the closer that we come to the
        cosine function. With an infinite number of terms, we would
        theoretically have a perfect polynomial model of a transcendental
        function.
      </CustomTypography>
    </SectionCard>
  </>
);

export default Component;
