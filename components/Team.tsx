import React from "react";
import styles from "@/styles/Main.module.sass";
import { randomColor } from "@/helpers/randomColor";

export const Team = ({
  refTeam,
}: {
  refTeam: React.LegacyRef<HTMLDivElement>;
}) => {
  const backgroundColor = randomColor();
  return (
    <div
      ref={refTeam}
      className={styles["main"]}
      style={{ backgroundColor: `#${backgroundColor}` }}
      id="team"
    >
      Team
    </div>
  );
};
