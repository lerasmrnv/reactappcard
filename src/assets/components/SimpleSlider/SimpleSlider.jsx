import React from "react";
import Slider from "react-slick";
import "./simpleSlider.css";

import ItemCard from "../ItemCard/ItemCard";
import words from "../words";

export default function SimpleSlider() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="containerSlider">
            <Slider {...settings} >
                {words.map((word) =>
                    <ItemCard key={word.id.toString()} english={word.english} russian={word.russian} transcription={word.transcription} />
                )
                }
            </Slider>
        </div>
    );
}
