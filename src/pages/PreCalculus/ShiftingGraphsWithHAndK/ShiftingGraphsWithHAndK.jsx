import SummaryCard from "components/interface/SummaryCard";
import SectionCard from "components/interface/SectionCard";
import CustomTypography from "components/interface/CustomTypography";
import Typography from "@mui/material/Typography";
import CustomTable from "components/interface/CustomTable";
import DisplayEquation from "components/interface/DisplayEquation";
import HandKTableGraph from "interactivity/d3Graphs/HandKTableGraph";

import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);

const table1Entries = [
  [
    <DisplayEquation>{`$$ x $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -3 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 3 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ y=x^2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 9 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 9 $$`}</DisplayEquation>,
  ],
];

const table2Entries = [
  [
    <DisplayEquation>{`$$ x $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -3 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 3 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ x-2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -5 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -3 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ -1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
  ],
  [
    <DisplayEquation>{`$$ y=(x-2)^2 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 25 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 16 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 9 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 4 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 0 $$`}</DisplayEquation>,
    <DisplayEquation>{`$$ 1 $$`}</DisplayEquation>,
  ],
];

const Component = () => (
  <>
    <SummaryCard>
      <CustomTypography>
        The graph of an equation written in terms of {"$x$"} and {"$y$"} can be
        shifted to the right by some real number {"$h$"} and up by some real
        number {"$k$"} by replacing all occurences of {"$x$"} with {"$(x-h)$"}{" "}
        and all occurrences of {"$y$"} with {"$(y-k)$"}.
      </CustomTypography>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Explanation
      </Typography>
      <CustomTypography>
        This idea is usually taught in a chapter on conic sections as one of
        many transformations. This is such a useful general principle in
        algebra, and I make sure that all of my students understand it as it's
        own topic. The following examples will demonstrate this principle.
      </CustomTypography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6" width="100%">
        Example
      </Typography>
      <CustomTypography>
        Shift the graph of the parabola {"$ y=x^2 $"} to the right by {"$ 2 $"}{" "}
        spaces.
      </CustomTypography>
      <CustomTypography>
        According to the rule above, we need to replace the{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`} in{" "}
        {`$ y={\\color{${sunsetMagenta}} {x}}^2 $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-2)}} $`} to get{" "}
        {`$ y={\\color{${sunsetMagenta}} {(x-2)}}^2 $`}. Let's observe this
        process in tabular format. First, begin with{" "}
        {`$ y={\\color{${sunsetMagenta}} {x}}^2 $`}
      </CustomTypography>
      <div
        style={{
          maxWidth: "600px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table1Entries} sx={{ p: 0, width: "50px" }} />
      </div>
      <CustomTypography sx={{ mt: 4 }}>
        Next, replace {`$ {\\color{${sunsetMagenta}} {x}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-2)}} $`}.
      </CustomTypography>
      <div
        style={{
          maxWidth: "600px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomTable entries={table2Entries} sx={{ p: 0, width: "50px" }} />
      </div>
      <CustomTypography sx={{ mt: 4 }}>
        This change resulted in the output row being shifted to the right by{" "}
        {`$ {\\color{${sunsetMagenta}} {2}} $`}. y was found by squaring, not{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`}, but the number{" "}
        {`$ {\\color{${sunsetMagenta}} {2}} $`} spaces to the left of{" "}
        {`$ {\\color{${sunsetMagenta}} {x}} $`}.
      </CustomTypography>
      <CustomTypography>
        Play with the demo below to get an intuitive feeling for shifting a
        graph left and right by using different values of{" "}
        {`$ {\\color{${sunsetMagenta}} {h}} $`} with{" "}
        {`$ {\\color{${sunsetMagenta}} {(x-h)}} $`}.
      </CustomTypography>
      <HandKTableGraph />
    </SectionCard>
  </>
);

export default Component;
