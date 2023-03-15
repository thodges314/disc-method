import { MathJax } from "better-react-mathjax";

const InlineEquation = ({ children }) => (
  <MathJax inline dynamic>
    {children}
  </MathJax>
);

export default InlineEquation;
