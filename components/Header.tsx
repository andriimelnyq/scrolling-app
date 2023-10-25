import React, { MutableRefObject } from "react";
import styles from "@/styles/Main.module.sass";

type Props = {
  refAbout: MutableRefObject<null>;
  refTeam: MutableRefObject<null>;
  refProjects: MutableRefObject<null>;
  refContact: MutableRefObject<null>;
};

export const Header: React.FC<Props> = ({
  refAbout,
  refContact,
  refProjects,
  refTeam,
}) => {
  const handleClick = (ref: MutableRefObject<null | HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles["header"]}>
      <button
        className={styles["button"]}
        onClick={() => handleClick(refAbout)}
      >
        About
      </button>

      <button className={styles["button"]} onClick={() => handleClick(refTeam)}>
        Team
      </button>

      <button
        className={styles["button"]}
        onClick={() => handleClick(refProjects)}
      >
        Projects
      </button>

      <button
        className={styles["button"]}
        onClick={() => handleClick(refContact)}
      >
        Contact
      </button>
    </header>
  );
};
