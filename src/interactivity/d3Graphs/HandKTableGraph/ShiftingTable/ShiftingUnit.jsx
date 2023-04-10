import { CSSTransition } from "react-transition-group";
import { useState, forwardRef, useImperativeHandle } from "react";
import DisplayEquation from "components/interface/DisplayEquation";

import "./ShiftingUnit.css";

// assumes start with h=0 : initialValue is the x value
const ShiftingUnit = forwardRef(
  ({ initialValue, colorValue, fcn = (n) => n }, ref) => {
    const [currentValue, setCurrentValue] = useState(0 - initialValue);
    const [valueChange, setValueChange] = useState(0);
    const [initialRender, setInitialRender] = useState(true);
    const displayValue = (value) => (
      <DisplayEquation
        style={{ marginLeft: 0, marginRight: 0 }}
      >{`$ {\\color{${colorValue}}{${value}}} $`}</DisplayEquation>
    );

    useImperativeHandle(ref, () => ({
      setNewValue: (h) => {
        const newValue = initialValue - h;
        setValueChange(0);
        setTimeout(() => setValueChange(newValue - currentValue), 1);
        setCurrentValue(newValue);
        newValue !== initialValue && initialRender && setInitialRender(false);
      },
    }));

    return (
      <div className="parent">
        {!!initialRender && (
          <div class={"enter-left-enter-done"}>
            {displayValue(fcn(initialValue))}
          </div>
        )}
        <CSSTransition
          in={valueChange > 0}
          timeout={300}
          classNames="enter-right"
          appear={true}
          // transitionDelay={300}
        >
          {!initialRender && valueChange > 0 ? (
            displayValue(fcn(currentValue))
          ) : (
            <div />
          )}
        </CSSTransition>
        <CSSTransition
          in={valueChange > 0}
          timeout={300}
          classNames="exit-right"
          appear={true}
        >
          {!initialRender && valueChange > 0 ? (
            displayValue(fcn(currentValue - 1))
          ) : (
            <div />
          )}
        </CSSTransition>
        <CSSTransition
          in={valueChange < 0}
          timeout={300}
          classNames="enter-left"
          appear={true}
          // transitionDelay={300}
        >
          {!initialRender && valueChange < 0 ? (
            displayValue(fcn(currentValue))
          ) : (
            <div />
          )}
        </CSSTransition>
        <CSSTransition
          in={valueChange < 0}
          timeout={300}
          classNames="exit-left"
          appear={true}
        >
          {!initialRender && valueChange < 0 ? (
            displayValue(fcn(currentValue + 1))
          ) : (
            <div />
          )}
        </CSSTransition>
      </div>
    );
  }
);

export default ShiftingUnit;
