import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Overview from "../pages/Overview";


export default function Nav() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Overview" element={<Overview />}></Route>
        </Routes>
    );
}