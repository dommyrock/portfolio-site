import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";
import style from "../../styles/accordion.module.css";

//TODO: alter this to accept img optionaly and dynamic text inputs

const Accordion = ({ children, isStackItem }) => {
  const defaultHeight = !isStackItem ? "180px" : "50px";
  // Manages the open or cloased state of the accordion
  const [open, toggle] = useState(false);

  // The height of the content inside of the accordion
  const [contentHeight, setContentHeight] = useState(defaultHeight);

  // Gets the height of the element (ref)
  const [ref, { height }] = useMeasure();

  // Animations ,height expansion calculation
  const expand = useSpring({
    config: { friction: 15 },
    height: !isStackItem
      ? open
        ? `${contentHeight}px`
        : defaultHeight
      : open
      ? `${contentHeight + 20}px`
      : defaultHeight,
  });
  const spin = useSpring({
    config: { friction: 10 },
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  });
  const maxWidth = {
    maxWidth: isStackItem ? "200px" : "500px",
    minWidth: isStackItem ? "200px" : 0,
  };

  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", setContentHeight(height));

    // Clean-up
    return window.removeEventListener("resize", setContentHeight(height));
  }, [height]);

  return (
    <div style={maxWidth}>
      <animated.div className={style.accordion} style={expand}>
        <div ref={ref} className={style.content}>
          {children}
        </div>
      </animated.div>
      <animated.button className={style.expand} onClick={() => toggle(!open)} style={spin}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4b8bced6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </animated.button>
    </div>
  );
};

export default Accordion;
