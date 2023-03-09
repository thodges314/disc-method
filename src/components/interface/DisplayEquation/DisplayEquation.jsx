import { MathJax } from "better-react-mathjax";

const DisplayEquation = ({ children }) => (
  <MathJax
    style={{
      marginRight: "1rem",
      marginLeft: "1rem",
    }}
  >
    {children}
  </MathJax>
);

export default DisplayEquation;
