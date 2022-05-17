import React from 'react';
import TableRow from './TableRow';
import words from './words';
import AddCard from './AddCard';


function Table_words() {
    return (
        <table className='tableWords'>
            <tbody>
                <tr className='tableHeader'>
                    <th>#</th>
                    <th>Слово</th>
                    <th>Перевод</th>
                    <th>Транскрипция</th>
                    <th></th>
                </tr>
                {words.map((word) =>
                    <TableRow key={word.id} id={word.id} russian={word.russian} english={word.english} transcription={word.transcription} />
                )}
            </tbody>
        </table>
    )
}


export default Table_words;
