import { CSSTransition } from "react-transition-group";
import { useState, forwardRef, useImperativeHandle } from "react";

import "./ShiftingUnit.css";

const ShiftingUnit = forwardRef(({ initialValue }, ref) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [valueChange, setValueChange] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  useImperativeHandle(ref, () => ({
    setNewValue: (n) => {
      setValueChange(0);
      setTimeout(() => setValueChange(n - currentValue), 1);
      setCurrentValue(n);
      n !== initialValue && initialRender && setInitialRender(false);
    },
  }));
  console.log(initialValue, initialRender);
  return (
    <div className="parent">
      {!!initialRender && <div>{initialValue}</div>}
      <CSSTransition
        in={valueChange > 0}
        timeout={300}
        classNames="enter-left"
        appear={true}
      >
        {!initialRender && valueChange > 0 ? (
          <div>{-currentValue}</div>
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
          <div>{-currentValue + 1}</div>
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
          <div>{-currentValue}</div>
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
          <div>{-currentValue - 1}</div>
        ) : (
          <div />
        )}
      </CSSTransition>
    </div>
  );
});

export default ShiftingUnit;
