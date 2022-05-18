import React from 'react';
import { FiTrash2 } from "react-icons/fi";


export default function DeleteCard({ handleClick }) {
    return (
        <button onClick={handleClick} className='buttonDelete'><FiTrash2 /></button>
    )
}
