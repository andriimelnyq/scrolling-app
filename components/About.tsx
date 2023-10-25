import React from "react";
import styles from "@/styles/Main.module.sass";
import { randomColor } from "@/helpers/randomColor";

export const About = ({
  refAbout,
}: {
  refAbout: React.LegacyRef<HTMLDivElement>;
}) => {
  const backgroundColor = randomColor();
  return (
    <div
      ref={refAbout}
      className={styles["about"]}
      style={{ backgroundColor: `#${backgroundColor}` }}
      id="about"
    >
      About
    </div>
  );
};
