import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import styles from "./Slider.module.css";

const Slider = ({ data, onActiveIndexChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // stores index of the first slide

    useEffect(
        () => onActiveIndexChange((currentIndex + 2) % data.length),
        [currentIndex]
    );

    // checks whether a given index is within 2 places of the currentIndex
    const shouldBeActive = (index) => {
        // The indices that should be active: currentIndex to currentIndex + 4, wrapping around if necessary
        for (let i = 0; i < 5; i++) {
            if ((currentIndex + i) % data.length === index) {
                return true;
            }
        }
        return false;
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const newIndex = (prev + 1) % data.length;
            return newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const newIndex = (prev - 1 + data.length) % data.length;
            return newIndex;
        });
    };

    const slideStyles = (index, position) =>
        `${styles["slider-slide"]} ${styles[`slider-slide-${position}`]} ${
            shouldBeActive(index) ? styles["slider-slide-active"] : ""
        }`;

    return (
        <div className={styles["slider-container"]}>
            <div className={styles["slides-container"]}>
                {data.map((element, index) => {
                    const position =
                        (index - currentIndex + data.length) % data.length;
                    return (
                        <div
                            className={slideStyles(index, position)}
                            key={index}
                        >
                            <Slide element={element} />
                        </div>
                    );
                })}
            </div>
            <div className={styles["slider-controller"]}>
                {/* Navigation buttons */}
                <span className={styles["slider-button"]} onClick={prevSlide}>
                    <span className="material-symbols-sharp">arrow_left</span>
                </span>
                <span className={styles["pagination-fraction"]}>
                    {" "}
                    {currentIndex + 1} / {data.length}
                </span>
                <span className={styles["slider-button"]} onClick={nextSlide}>
                    <span className="material-symbols-sharp">arrow_right</span>
                </span>
            </div>
        </div>
    );
};

export default Slider;
