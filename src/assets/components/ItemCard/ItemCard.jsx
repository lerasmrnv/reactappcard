import React, { forwardRef, useState } from 'react';

function ItemCard(props, ref) {

    const [check, setCheck] = useState(false);

    const handleOnCheck = () => {
        setCheck(!check);
        props.addToStudiedCard();
    }

    return (
        <div div className='item_card' >
            <h2 className='english-word_item_card'>{props.english}</h2>
            <p className='transcription_item_card'>[{props.transcription}]</p>
            {
                (check ?
                    <p className='russian-word_item_card'>{props.russian}</p>
                    : <button className='onCheck_translation' onClick={handleOnCheck} ref={ref} >Проверить</button>
                )}
        </div>
    )
}

export default forwardRef(ItemCard);


