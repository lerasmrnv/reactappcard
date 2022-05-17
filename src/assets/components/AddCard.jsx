import React from 'react';
import SaveCard from './SaveCard';
import DeleteCard from './DeleteCard';

export default function AddCard() {
    return (
        <tr className='add_card'>
            <td><input /></td>
            <td><input /></td>
            <td><input /></td>
            <td><input /></td>
            <td>
                <SaveCard />
                <DeleteCard />
            </td>
        </tr>
    )
}


