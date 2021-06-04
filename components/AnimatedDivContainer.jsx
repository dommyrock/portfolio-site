import React, { useState } from "react";
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from "@react-spring/web";
import styles from "../styles/accordion.module.css";
import Image from "next/image";
import { personalProj_data as data } from "../data";

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
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css, display: "flex", justifyContent: "space-between" }}
          >
            <a id="external-proj-link" href={item.link} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#6997ffd6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <div style={{ maxWidth: "500px", width: "100%" }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <p class="underline-highlight">{item.text}</p>
              </a>
              <br /> <div style={{ textAlign: "center", borderBottom: "3px solid #cccccc7d" }}>Detais</div>
              {item.description.split(/\r?\n/).map((line) => (
                <p style={{ margin: 0, paddingTop: "0.3rem" }}>{line}</p>
              ))}
            </div>
            {item.src && <Image src={item.src} layout="intrinsic" width={190} height={100} />}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
