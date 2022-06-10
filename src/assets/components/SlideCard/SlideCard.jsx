import React, { useState } from 'react';
import ItemCard from "../ItemCard/ItemCard";

import "./SlideCard.scss";


export default function SlideCard({ words }) {
    const [sliderPosition, setSliderPosition] = useState(1);

    const handlePrevSlide = () => {
        if (sliderPosition > 1) {
            setSliderPosition(prev => prev - 1);
        } else if (sliderPosition === 1) {
            setSliderPosition(words.length);
        }

    }
    const handleNextSlide = () => {
        if (sliderPosition < words.length) {
            setSliderPosition(prev => prev + 1);
        }
        else if (sliderPosition === words.length) {
            setSliderPosition(1);
        }

    }

    return (
        <div className='slider'>
            <button className='prev__button' onClick={handlePrevSlide}>❮</button>
            <div className='slides'>
                <ItemCard english={words[sliderPosition].english} russian={words[sliderPosition].russian} transcription={words[sliderPosition].transcription} />
            </div>
            <button className='next__button' onClick={handleNextSlide}>❯</button>
        </div>
    )
}

