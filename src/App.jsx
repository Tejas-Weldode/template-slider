import { useEffect, useState } from "react";
import Slider from "./components/Slider/Slider";
import sliderImages from "./data/sliderIamges";
import styles from "./App.module.css";

function App() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [backgroundImg, setBackgroundImg] = useState(
        sliderImages[activeIndex]
    ); // required because the image must change during the transition, not before starting the transition
    const [fade, setFade] = useState(false);
    useEffect(() => {
        setFade(false); // Start fade-out

        const timeout = setTimeout(() => {
            setBackgroundImg(sliderImages[activeIndex]);
            return setFade(true);
        }, 300); // Adjust timing to match CSS transition

        return () => clearTimeout(timeout);
    }, [activeIndex]);

    return (
        <div className="container">
            <div className={styles["container-background-div"]}>
                <img
                    className={`${styles["container-background-img"]} ${
                        fade ? styles["fade-out"] : styles["fade-in"]
                    }`}
                    src={backgroundImg}
                />
            </div>
            <div className={styles["glass-overlay"]}></div>{" "}
            {/* Added overlay */}
            <h1 className={styles["heading"]}>Slider Template by Tejas Weldode</h1>
            <Slider data={sliderImages} onActiveIndexChange={setActiveIndex} />
        </div>
    );
}

export default App;
