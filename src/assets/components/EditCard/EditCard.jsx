import React from 'react';
import { FiEdit2 } from "react-icons/fi";

export default function EditCard({ handleClick }) {
    return (
        <button onClick={handleClick} className='buttonEdit'><FiEdit2 /></button>
    )
};

