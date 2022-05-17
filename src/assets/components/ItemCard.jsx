import React, { useState } from 'react';
import '../styles/item_card/item_card.css';
import EditCard from './EditCard';


export default function ItemCard() {
    const [check, setCheck] = useState(false);

    const handleOnCheck = () => {
        setCheck(!check);
    }

    return (
        <div className='item_card'>
            <h2 className='english-word_item_card'>Item</h2>
            <p className='transcription_item_card'>[trskjdb]</p>
            {(check ? <p className='russian-word_item_card'>Перевод</p> : <button className='onCheck_translation' onClick={handleOnCheck}>Проверить</button>)}
        </div>
    )
}
