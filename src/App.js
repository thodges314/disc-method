import logo from "./logo.svg";
import "./App.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function App() {
  return (
    <MathJaxContext>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MathJax hideUntilTypeset={"first"}>
            {`\\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\approx 433.11405\\]`}
          </MathJax>
        </header>
      </div>
    </MathJaxContext>
  );
}

export default App;
