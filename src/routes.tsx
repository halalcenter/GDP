import { Routes, Route } from "react-router-dom";
import App from "./App";
import VisionCraft from "./visioncraft/VisionCraft";
import ScrollToTop from "./visioncraft/ScrollTop";

function New(){
    return(
        <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<App /> } />
            <Route path="/visioncraft" element={<VisionCraft />} />
        </Routes>
        </>
    )
}

export default New;