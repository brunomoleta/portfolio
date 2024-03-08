import React from "react";
import styles from "./BraunWatch.module.css"
function BraunWatch() {
  return (
    <div className={styles.radio} aria-label="Braun radio illustration">
      <div className={styles.speaker}>
        <div className={styles.selector}>
          <div className={styles.info}></div>
        </div>
        <div className={`${styles.button} ${styles.right}`}></div>
        <div className={`${styles.button} ${styles.left}`}></div>
      </div>
    </div>
  );
}

export default BraunWatch;
