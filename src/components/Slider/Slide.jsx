import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ element }) => {
    return <img className={styles["slide-image"]} src={element} />;
};

export default Slide;
