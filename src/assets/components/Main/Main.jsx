import React from "react";

import TableWords from "../TableWords/TableWords";
import SlideCard from "../SlideCard/SlideCard";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import words from "../words";



export default function Main() {
    return (
        <div className="mainContainer">
            <TableWords />

            <SlideCard words={words} />

            <SimpleSlider />

        </div>
    )
}

