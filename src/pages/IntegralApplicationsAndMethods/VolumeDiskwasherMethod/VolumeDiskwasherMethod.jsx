import Typography from "@mui/material/Typography";
import DisplayEquation, {
  InlineEquation,
} from "components/interface/DisplayEquation";

import SummaryCard from "components/interface/SummaryCard";
import SideNoteCard from "components/interface/SideNoteCard";
import SectionCard from "components/interface/SectionCard";

import { DiskMethodDrums } from "interactivity/graphs/VolumeDiskwasherMethod";

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>{"\\[\\pi \\int_{a}^{b}R(x)^2 dx\\]"}</DisplayEquation>
      <Typography>or</Typography>
      <DisplayEquation>
        {"\\[\\pi \\int_{a}^{b} \\left (  R(x)^2 - r(x)^2 \\right ) dx\\]"}
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6">Explanation</Typography>
      <Typography>
        Both of these methods are used for finding volumes of solids of
        revolution. A solid of revolution is made by taking a graph of a
        function and spinning it around an axis of revolution. The disc or
        washer methods are used it's easiest to integrate along an exes{" "}
        <em>parallel</em> to the axes of revolution.
      </Typography>
      <Typography>
        <InlineEquation>
          {`If you have a function integrable along the y-axis that you wish to
          spin around an axis parallel to the y-axis, then you can use the same
          methods, substituting y whenever you see x: \\(\\pi \\int_{a}^{b}
          R(y)^2 dx\\) or \\(\\pi \\int_{a}^{b}\\left ( R(y)^2 - r(y)^2 \\right
          ) dx\\)`}
        </InlineEquation>
      </Typography>
      <Typography>
        <InlineEquation>
          Suppose that we cut this object into an infinite number of slices,
          each with infantesimal width. Each slice would be a cylinder with a
          radius \\(R(x)\\) and a thickness \\(dx\\). As above, we can find the
          volume of the cylinder my multiplying the area of one of it's faces by
          it's height. The radius of a slice is \\(\\piR(x))
        </InlineEquation>
      </Typography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6">Example of Disc Method</Typography>
      <Typography>
        <InlineEquation>
          {`Suppose that you started with the graph of the equation
          \\(R(x)=x^3-7x^2+14x-5\\) from \\(x=1\\) to \\(x=3\\) and rotated it
          around the x-axis. To approximate the volume, we could cut this object
          into slices, as we did when we first learned concepts of integration,
          and for each slice multiply the area of one of the faces by the
          thickness of the slice, \\(\\Delta x\\), to get it's approximate
          volume. The sum of these volumes would be an approximation of the
          volume of the solid.`}
        </InlineEquation>
      </Typography>
      <DiskMethodDrums />
      <Typography>
        <InlineEquation>
          {`Suppose that we cut this object into an infinite number of slices,
          each with infantesimal width. Each slice would be a cylinder with a
          radius \\(R(x)\\) and thickness \\(dx\\). As above, we can find the
          volume of a cylinder by multiplying the area of one of it's faces by
          it's height. The area of a slice is \\(\\pi R(x)^2\\) and the
          thickness is \\(dx\\), so the volume of each slice is \\(\\pi R(x)^2
          dx\\). To find the volume of a solid of revolution, use integration to
          find the sum of the volumes of all the slices between the endpoints
          \\(x=1\\) and \\(x=4\\):`}
        </InlineEquation>
      </Typography>
    </SectionCard>
    <SectionCard>
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </SectionCard>
    <SideNoteCard>
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </SideNoteCard>
  </>
);

export default Component;
