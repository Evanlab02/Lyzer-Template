import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Overview from "../pages/Overview";
import OverviewV2 from "../pages/OverviewV2";


export default function Nav() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Overview" element={<Overview />}></Route>
            <Route path="/OverviewV2" element={<OverviewV2 />}></Route>
        </Routes>
    );
}