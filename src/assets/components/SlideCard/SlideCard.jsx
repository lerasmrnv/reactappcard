import React, { useState } from 'react';
import ItemCard from "../ItemCard/ItemCard";

import "./SlideCard.scss";


export default function SlideCard({ words }) {
    const [sliderPosition, setSliderPosition] = useState(1);


    const handlePrevSlide = () => {
        if (sliderPosition > 0) {
            setSliderPosition(prev => prev - 1);
        } else if (sliderPosition === 0) {
            setSliderPosition(words.length - 1);
        }

    }
    const handleNextSlide = () => {
        if (sliderPosition < words.length - 1) {
            setSliderPosition(prev => prev + 1);
        }
        else if (sliderPosition === words.length - 1) {
            setSliderPosition(0);
        }

    }

    return (
        <div className='slider' >
            <button className='prev__button' onClick={handlePrevSlide}>❮</button>
            <div className='slides'>
                <ItemCard english={words[sliderPosition].english} russian={words[sliderPosition].russian} transcription={words[sliderPosition].transcription} />
            </div>
            <button className='next__button' onClick={handleNextSlide}>❯</button>
        </div>
    )
}

