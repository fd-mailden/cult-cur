import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import style from "./Range.module.scss";
import PropTypes from "prop-types";

const RangeUI = React.forwardRef((props, ref) => {
  const { MIN = 0, MAX = 100, center = 50, setRange, currency = "" } = props;
  const [state, setState] = useState({
    values: [center],
  });
  const STEP = 1;
  useEffect(() => {
    setRange(state.values[0]);
  }, [state]);

  return (
    <div>
      <div className={style.range}>
        <p className={style.range__text}>от {MIN + " " + currency}</p>
        <p className={style.range__text}>до {MAX + " " + currency}</p>
      </div>
      <Range
        values={state.values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setState({ values })}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: state.values,
                  colors: ["#EB5757", "#A18D91"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "22px",
              borderRadius: "100%",
              backgroundColor: "#152026",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "100%",
                height: "16px",
                width: "16px",
                backgroundColor: isDragged ? "#EB5757" : "#EB5757",
              }}
            />
          </div>
        )}
      />
    </div>
  );
});

RangeUI.propTypes = {
  currency: PropTypes.string,
  MIN: PropTypes.number,
  MAX: PropTypes.number,
  center: PropTypes.number,
  setRange: PropTypes.func,
};

export { RangeUI };
