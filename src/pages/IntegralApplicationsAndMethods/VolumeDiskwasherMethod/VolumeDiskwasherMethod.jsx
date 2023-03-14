import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";

import DisplayEquation, {
  InlineEquation,
} from "components/interface/DisplayEquation";
import CustomLink from "components/interface/CustomLink";

import SummaryCard from "components/interface/SummaryCard";
import SideNoteCard from "components/interface/SideNoteCard";
import SectionCard from "components/interface/SectionCard";

import {
  DiskMethodDiscs,
  DiskMethodDiscsShifted,
  DiskMethodDrums,
  WasherMethod,
} from "interactivity/graphs/VolumeDiskwasherMethod";

const Component = () => (
  <>
    <SummaryCard>
      <DisplayEquation>
        {"\\[\\pi \\int_{a}^{b}R(x)^2 dx\\;\\;\\]"}
      </DisplayEquation>
      <Typography>or</Typography>
      <DisplayEquation>
        {
          "\\[\\;\\;\\pi \\int_{a}^{b} \\left (  R(x)^2 - r(x)^2 \\right ) dx\\]"
        }
      </DisplayEquation>
    </SummaryCard>
    <SectionCard>
      <Typography variant="h6">Explanation</Typography>
      <Typography>
        Both of these methods are used for finding volumes of solids of
        revolution. A solid of revolution is made by taking a graph of a
        function and spinning it around an axis of revolution. The disc or
        washer methods are used when it's easiest to integrate along an axis{" "}
        <em>parallel</em> to the axis of revolution.
      </Typography>
      <Typography>
        <InlineEquation>
          If you have a function integrable along the y-axis that you wish to
          spin around an axis parallel to the y-axis, then you can use the same
          methods, substituting y whenever you see x:{" "}
          {`\\(\\pi \\int_{a}^{b}
          R(y)^2 dx\\)`}{" "}
          or{" "}
          {`\\(\\pi \\int_{a}^{b}\\left ( R(y)^2 - r(y)^2 \\right
          ) dx\\)`}
          .
        </InlineEquation>
      </Typography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6">Example of Disc Method</Typography>
      <Typography>
        <InlineEquation>
          Suppose that you started with the graph of the equation{" "}
          {`\\(R(x)=x^3-7x^2+14x-5\\)`} from {`\\(x=1\\)`} to {`\\(x=4\\)`} and
          rotated it around the x-axis. To approximate the volume, we could cut
          this object into slices, as we did when we first learned concepts of
          integration, and for each slice multiply the area of one of the faces
          by the thickness of the slice, {`\\(\\Delta x\\)`}, to get it's
          approximate volume. The sum of these volumes would be an approximation
          of the volume of the solid. In this demo, I'm using the left-hand side
          to find the {`\\(R(x)\\)`} values, but as you may recall, that's more
          or less arbitrary.
        </InlineEquation>
      </Typography>
      <DiskMethodDrums />
      <Typography>
        <InlineEquation>
          Suppose that we cut this object into an infinite number of slices,
          each with infantesimal width. Each slice would be a cylinder with a
          radius {`\\(R(x)\\)`} and thickness {`\\(dx\\)`}. As above, we can
          find the volume of a cylinder by multiplying the area of one of it's
          faces by it's thickness. The area of a slice is {`\\(\\pi R(x)^2\\)`}{" "}
          and the thickness is {`\\(dx\\)`}, so the volume of each slice is{" "}
          {`\\(\\pi R(x)^2 dx\\).`}
        </InlineEquation>
      </Typography>
      <DiskMethodDiscs />
      <Typography>
        <InlineEquation>
          To find the volume of a solid of revolution, use integration to find
          the sum of the volumes of all the slices between the endpoints{" "}
          {`\\(x=1\\) and \\(x=4\\):`}
          {`\\[ \\int_{1}^{4} \\pi R(x)^2 dx\\]`}
          {`\\[ \\pi \\int_{1}^{4} R(x)^2 dx\\]`}
          {`\\[ \\pi \\int_{1}^{4} \\left (  x^3 - 7x^2 + 14x -5\\right )^2 dx\\]`}
          {`\\[ \\pi \\int_{1}^{4} x^6 - 14x^5 + 77x^4 -206x^3 + 266x^2 -140x + 25 \\: dx\\]`}
          {`\\[ \\pi \\left ( \\frac{x^7}{7} - \\frac{7x^6}{3} + \\frac{77x^5}{5} -\\frac{103x^4}{2} + \\frac{266x^3}{3} - 70x^2 + 25x \\right ) \\biggr ]_1^4 \\]`}
          {`\\[ \\frac{1269\\pi}{78} \\approx 56.953\\cdots\\]`}
        </InlineEquation>
      </Typography>
      <Typography>
        To perform this integration, we used the{" "}
        <CustomLink href="/Integrals/ConstantMultipleRule">
          Constant Multiple Rule
        </CustomLink>
        , the <CustomLink href="/Integrals/PowerRule">Power Rule</CustomLink>,
        the{" "}
        <CustomLink href="/Theorems/FirstFundamentalTheoremOfCalculus">
          First Fundamental Theorem of Calculus
        </CustomLink>{" "}
        and some algebra.
      </Typography>
      <Typography>
        <InlineEquation>
          If we wanted to revolve this around, for example, {`\\(y=-1\\)`}{" "}
          instead of the x-axis, we would have to repeat this process, but
          adjust our {`\\(R(x)\\)`} formula by adding the additional distance
          required to get to {`\\(-1\\)`}.
        </InlineEquation>
      </Typography>
      <DiskMethodDiscsShifted />
      <Typography>
        <InlineEquation>
          {`\\[R(x)=f(x)\\;\\textbf{+1}\\]`}
          {`\\[R(x)=x^3-7x^2+14x-5\\;\\textbf{+1}\\]`}
          The rest of the process would be the same.
          {`\\[\\pi \\int_{1}^{4}  R(x)^2 dx\\]`}
          {`\\[ \\pi \\int_{1}^{4} \\left (  x^3 - 7x^2 + 14x -5 \\;\\textbf{+1}\\right )^2 dx\\]`}
          {`\\[ \\frac{39\\pi}{4} \\]`}
        </InlineEquation>
      </Typography>
    </SectionCard>
    <SectionCard>
      <Typography variant="h6">Example of Washer Method</Typography>
      <Typography>
        <InlineEquation>
          The washer method is the same as the disk method, except we are
          dealing with one function nested insode of another. For example,
          rotate {`\\(y=x^2\\)`} and {`\\(y=\\sqrt{x}\\)`}, from {`\\(x=0\\)`}{" "}
          to {`\\(x=1\\)`} around the x-axis.
        </InlineEquation>
      </Typography>
      <WasherMethod />
      <Typography>
        If we were to take a slice through this, we would see two concentric
        rings. Play with the model above to get an intuitive idea of this.
      </Typography>
      <Typography>
        <InlineEquation>
          The radii of the two rings for a slice taken at a given {`\\(x\\)`},
          we will call {`\\(R(x)\\)`} and {`\\(r(x)\\)`}, where {`\\(R(x)\\)`}{" "}
          is the greater radius and {`\\(r(x)\\)`} is the lesser radius. Here,{" "}
          {`\\(R(x)=\\sqrt{x}\\)`}, and {`\\(r(x)=x^2\\)`}.
        </InlineEquation>
      </Typography>
      <Typography>
        <InlineEquation>
          To calculate the volume, we are interested in the area between the two
          concentric circles. To find this area, we subtract the area of the
          smaller circle from the area of the larger circle.
          {`\\[\\pi R(x)^2 - \\pi r(x)^2 \\]`}
          {`\\[\\pi \\left ( R(x)^2 - r(x)^2 \\right ) \\]`}
        </InlineEquation>
      </Typography>
      <Typography>
        <InlineEquation>
          As with the disc method, we can find the volume of a slice by
          multiplying the area of the slice by it's thickness, {`\\(dx\\)`}.
          Using integration, we can sum the volumes of all of the slices between
          the endpoints, in this case, {`\\(x=0\\)`} and {`\\(x=1\\)`}:
          {`\\[\\pi \\int_{0}^{1}\\left ( R(x)^2 - r(x)^2 \\right ) dx \\]`}
          {`\\[\\pi \\int_{0}^{1}\\left ( (\\sqrt{x})^2 - (x^2)^2 \\right ) dx \\]`}
          {`\\[\\pi \\int_{0}^{1}\\left ( x - x^4 \\right ) dx \\]`}
          {`\\[ \\pi \\left ( \\frac{x^2}{2} - \\frac{x^5}{5}\\right ) \\biggr ]_0^1 \\]`}
          {`\\[ \\frac{3\\pi}{10}\\approx 0.942\\cdots \\]`}
        </InlineEquation>
      </Typography>
    </SectionCard>
    <SideNoteCard>
      <Typography>
        This is a sidenote card. It has no place on this particular page, but
        I'm leaving it here until I use it to basically showcase that it exists.
        In the future, I'll use it in places that I want to include additional
        information to enhance understanding that is not critical to core
        concepts.
      </Typography>
    </SideNoteCard>
  </>
);

export default Component;
