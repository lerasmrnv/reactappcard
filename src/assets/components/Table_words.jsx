import React from 'react';
import TableRow from './TableRow';
import words from './words';
import Add_card from './Add_card';


class Table_words extends React.Component {
    render() {
        const selected = true;
        return (
            <table className='tableWords'>
                <tr className='tableHeader'>
                    <td>#</td>
                    <td>Слово</td>
                    <td>Перевод</td>
                    <td>Транскрипция</td>
                    <td></td>
                </tr>
                {selected ? <Add_card /> : ''}
                {words.map((word) =>
                    <TableRow id={word.id} russian={word.russian} english={word.english} transcription={word.transcription}></TableRow>
                )}
            </table>
        )
    }
}

export default Table_words;
