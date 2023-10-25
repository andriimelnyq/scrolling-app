import React from "react";
import styles from "@/styles/Main.module.sass";
import { randomColor } from "@/helpers/randomColor";

export const Contact = ({
  refContact,
}: {
  refContact: React.LegacyRef<HTMLDivElement>;
}) => {
  const backgroundColor = randomColor();
  return (
    <div
      ref={refContact}
      className={styles["main"]}
      style={{ backgroundColor: `#${backgroundColor}` }}
      id="contact"
    >
      Contact
    </div>
  );
};
