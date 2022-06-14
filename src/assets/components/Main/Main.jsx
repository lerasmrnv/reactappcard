import React from "react";
import { Routes, Route } from 'react-router-dom';

import TableWords from "../TableWords/TableWords";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

export default function Main() {
    return (
        <div className="mainContainer">
            <Routes>
                <Route path="/" element={<TableWords />} />
                <Route path="/game" element={<SimpleSlider />} />
            </Routes>
        </div>
    )
}

