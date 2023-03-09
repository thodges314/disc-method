import { MathJax } from "better-react-mathjax";

import Typography from "@mui/material/Typography";
import DisplayEquation from "components/interface/DisplayEquation";

import SummaryCard from "components/interface/SummaryCard";

const Component = () => {
  return (
    <>
      <SummaryCard>
        <DisplayEquation>{"\\[\\pi \\int_{a}^{b}R(x)^2 dx\\]"}</DisplayEquation>
        <Typography>or</Typography>
        <DisplayEquation>
          {"\\[\\pi \\int_{a}^{b} \\left (  R(x)^2 - r(x)^2 \\right ) dx\\]"}
        </DisplayEquation>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </SummaryCard>
    </>
  );
};

export default Component;
