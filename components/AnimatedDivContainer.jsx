import React, { useState } from "react";
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from "@react-spring/web";
import styles from "../styles/accordion.module.css";

const data = [
  {
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    name: "Perfect White",
    description: "#fdfbfb → #ebedee",
    css: "linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",
    height: 400,
  },
  {
    name: "Near Moon",
    description: "#5ee7df → #b490ca",
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    height: 400,
  },
  {
    name: "Wild Apple",
    description: "#d299c2 → #fef9d7",
    css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    height: 200,
  },
  {
    name: "Ladoga Bottom",
    description: "#ebc0fd → #d9ded8",
    css: "linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)",
    height: 400,
  },
  {
    name: "New York",
    description: " #fff1eb → #ace0f9",
    css: "linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",
    height: 400,
  },
];

export default function AnimatedDivContainer() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "#6997ff" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "#6997ff",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6]);

  return (
    <div className={styles.projects_wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {!open && <h2 style={{ color: "#fff", textAlign: "center" }}>Personal projects</h2>}
        {transition((style, item) => (
          <animated.div className={styles.item} style={{ ...style, background: item.css }} />
        ))}
      </animated.div>
    </div>
  );
}
