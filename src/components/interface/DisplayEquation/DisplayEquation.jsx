import { MathJax } from "better-react-mathjax";
import { synthCyberBlack } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const DisplayEquation = ({ children }) => (
  <MathJax
    style={{
      marginRight: "1rem",
      marginLeft: "1rem",
      // color: hexToRgba(synthCyberBlack, 0.3),
    }}
  >
    {children}
  </MathJax>
);

export default DisplayEquation;
