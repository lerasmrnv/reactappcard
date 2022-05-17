import React, { useState } from 'react';

import EditCard from './EditCard';
import DeleteCard from './DeleteCard';
import AddCard from './AddCard';

export default function TableRow(props) {
    const [edit, setEdit] = useState(false);

    const handleOnClickEdit = () => {
        setEdit(!edit);
    }

    return (

        <tr className='tableRow'>
            <td>{props.id}</td>
            <td>{props.russian}</td>
            <td>{props.english}</td>
            <td>{props.transcription}</td>
            <td>
                <EditCard />
                <DeleteCard />
            </td>
        </tr>
    )
}

