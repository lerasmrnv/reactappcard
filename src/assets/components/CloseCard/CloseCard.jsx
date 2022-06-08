import React from 'react';
import { FiXSquare } from "react-icons/fi";

export default function CloseCard({ handleClick }) {
    return (
        <button onClick={handleClick} className='buttonClose'><FiXSquare /></button>
    )
};
