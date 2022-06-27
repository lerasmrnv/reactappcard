import React from "react";
import { useState, useEffect, useRef } from "react";

import Slider from "react-slick";
import ItemCard from "../ItemCard/ItemCard";
import words from "../words";


export default function SimpleSlider() {
    const [countItems, setCountItems] = useState(0);

    const addToStudiedCard = () => {
        setCountItems(countItems => countItems + 1);
    }

    const ref = useRef(null);

    useEffect(() => ref.current.focus(), []);

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
                    <ItemCard key={word.id.toString()} english={word.english} russian={word.russian} transcription={word.transcription} addToStudiedCard={addToStudiedCard} />
                )
                }
            </Slider>
            <p className="containerSlider__studiedCard">Изучено слов: {countItems}</p>
        </div>
    );
}
