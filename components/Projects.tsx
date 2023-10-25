import React, { useRef } from "react";
import styles from "@/styles/Main.module.sass";
import { motion, useTransform, useScroll } from "framer-motion";

export const Projects = ({
  refProjects,
}: {
  refProjects: React.LegacyRef<HTMLDivElement>;
}) => {
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 - 100 / 3}%`]);

  return (
    <section id="projects" ref={targetRef} className={styles["projects"]}>
      <div ref={refProjects} className={styles["projects-container"]}>
        <motion.div style={{ x }} className={styles["projects-container-2"]}>
          {projects.map((project) => {
            return (
              <div key={project.id} className={styles["project"]}>
                {project.name}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
