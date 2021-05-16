import { useSpring, useTransition, animated } from "react-spring";

const AnimatedIcon = ({ isVisible }) => {
  //Spring config
  const styles = useSpring({
    // loop: true,
    from: {
      opacity: 0,
      transform: `translate(-200px,10px)`,
      color: "#fff",
    },
    to: {
      opacity: 1,
      transform: `translate(0px,10px)`,
      color: "lightblue",
    },
    config: {
      mass: 40,
      friction: 40,
      bounce: 0.2,
    },
  });
  //Transition Config
  const transitions = useTransition(isVisible, {
    from: {
      opacity: 0,
      transform: `translate(-200px,10px)`,
      color: "#fff",
    },
    enter: {
      opacity: 1,
      transform: `translate(0px,10px)`,
      color: "lightblue",
    },
    // leave: { transform: `translate(100px,20px)`, opacity: 0, color: "#fff" },
    config: {
      mass: 40,
      friction: 40,
      bounce: 0.5,
    },
  });

  return (
    <>
      {transitions(
        (props, item, key) =>
          item && (
            <animated.svg
              id="nav1"
              key={key}
              style={{ ...props }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              width="2rem"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </animated.svg>
          )
      )}

      {/* Bellow is springs code */}
      {/* <animated.svg
        id="nav1"
        style={styles}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        width="2rem"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </animated.svg> */}
    </>
  );
};

export default AnimatedIcon;
