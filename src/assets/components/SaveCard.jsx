import React from 'react';
import { FiCheckSquare } from "react-icons/fi";


export default function SaveCard({ handleClick }) {
    return (
        <button onClick={handleClick} className='buttonSave'><FiCheckSquare /></button>
    )
}

