import { MathJax } from "better-react-mathjax";

const DisplayEquation = ({ style, children }) => (
  <MathJax
    style={{
      marginRight: "1rem",
      marginLeft: "1rem",
      ...style,
    }}
    // display
    dynamic
  >
    {children}
  </MathJax>
);

export default DisplayEquation;
