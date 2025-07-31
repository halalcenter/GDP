import { Routes, Route } from "react-router-dom";
import App from "./App";
import VisionCraft from "./visioncraft/VisionCraft";
import ScrollToTop from "./visioncraft/ScrollTop";
import Codestruct from "./code-struct/CodeStruct";

function New(){
    return(
        <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<App /> } />
            <Route path="/visioncraft" element={<VisionCraft />} />
            <Route path="/codestruct" element={<Codestruct />} />
        </Routes>
        </>
    )
}

export default New;