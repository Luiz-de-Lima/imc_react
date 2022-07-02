import React from "react";
import styles from "./App.module.css";
import logo from "../src/assets/powered.png";

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={150} />
        </div>
      </header>
      <div className={styles.Container}>
        <div className={styles.lefSide}>...lado</div>
        <div className={styles.rightSide}>...lado</div>
      </div>
    </div>
  );
};

export default App;
