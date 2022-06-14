import React from "react";
import { Routes, Route } from 'react-router-dom';

import TableWords from "../TableWords/TableWords";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function Main() {
    return (
        <div className="mainContainer">
            <Routes>
                <Route path="/game" element={<SimpleSlider />} />
                <Route path="/" element={<TableWords />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

