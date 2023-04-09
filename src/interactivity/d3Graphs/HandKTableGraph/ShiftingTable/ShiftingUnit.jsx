import { CSSTransition } from "react-transition-group";
import { useState, forwardRef, useImperativeHandle } from "react";
import DisplayEquation from "components/interface/DisplayEquation";

import "./ShiftingUnit.css";

const ShiftingUnit = forwardRef(({ initialValue, colorValue }, ref) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [valueChange, setValueChange] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  const displayValue = (value) => (
    <DisplayEquation
      style={{ marginLeft: 0, marginRight: 0 }}
    >{`$ {\\color{${colorValue}}{${value}}} $`}</DisplayEquation>
  );
  useImperativeHandle(ref, () => ({
    setNewValue: (n) => {
      setValueChange(0);
      setTimeout(() => setValueChange(n - currentValue), 1);
      setCurrentValue(n);
      n !== initialValue && initialRender && setInitialRender(false);
    },
  }));

  return (
    <div className="parent">
      {!!initialRender && displayValue(initialValue)}
      <CSSTransition
        in={valueChange > 0}
        timeout={300}
        classNames="enter-left"
        appear={true}
      >
        {!initialRender && valueChange > 0 ? (
          displayValue(-currentValue)
        ) : (
          <div />
        )}
      </CSSTransition>
      <CSSTransition
        in={valueChange > 0}
        timeout={300}
        classNames="exit-left"
        appear={true}
      >
        {!initialRender && valueChange > 0 ? (
          displayValue(-currentValue + 1)
        ) : (
          <div />
        )}
      </CSSTransition>
      <CSSTransition
        in={valueChange < 0}
        timeout={300}
        classNames="enter-right"
        appear={true}
      >
        {!initialRender && valueChange < 0 ? (
          displayValue(-currentValue)
        ) : (
          <div />
        )}
      </CSSTransition>
      <CSSTransition
        in={valueChange < 0}
        timeout={300}
        classNames="exit-right"
        appear={true}
      >
        {!initialRender && valueChange < 0 ? (
          displayValue(-currentValue - 1)
        ) : (
          <div />
        )}
      </CSSTransition>
    </div>
  );
});

export default ShiftingUnit;
