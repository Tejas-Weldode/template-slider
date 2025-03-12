import { useState } from "react";
import Slider from "./components/Slider/Slider";

function App() {
    return (
        <div className="container">
            <h1>Slider Template by Tejas Weldode</h1>
            <Slider data={["0", "1", "2", "3", "4", "5", "6"]} />
        </div>
    );
}

export default App;
