import React, { useState } from 'react';

export default function ItemCard(props) {

    const [check, setCheck] = useState(false);


    const handleOnCheck = () => {
        setCheck(!check);
    }

    return (
        <div className='item_card'>
            <h2 className='english-word_item_card'>{props.english}</h2>
            <p className='transcription_item_card'>[{props.transcription}]</p>
            {(check ?
                <p className='russian-word_item_card'>{props.russian}</p>
                : <button className='onCheck_translation' onClick={handleOnCheck}>Проверить</button>
            )}
        </div>
    )
}


