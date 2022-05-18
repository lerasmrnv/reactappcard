import React, { useState } from 'react';
import TableRow from './TableRow';
import words from './words';


function Table_words() {
    const [data, setData] = useState(words);

    return (
        <div className='tableWords'>
            <div className='tableHeader'>
                <div className='tableHeader_item'>#</div>
                <div className='tableHeader_item'>Слово</div>
                <div className='tableHeader_item'>Перевод</div>
                <div className='tableHeader_item'>Транскрипция</div>
                <div className='tableHeader_item'></div>
            </div>
            {data.map((word) =>
                <TableRow key={word.id} id={word.id} russian={word.russian} english={word.english} transcription={word.transcription} />
            )}
        </div>
    )
}


export default Table_words;
