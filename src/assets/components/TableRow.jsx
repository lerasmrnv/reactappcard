import React, { useState } from 'react';

import EditCard from './EditCard';
import DeleteCard from './DeleteCard';
import SaveCard from './SaveCard';
import CloseCard from './CloseCard';

export default function TableRow(props) {
    const [edit, setEdit] = useState(false);
    const [tempData, setTempData] = useState(props);

    const handleEdit = () => {
        setEdit(prev => !prev);
    }

    const handleCanel = () => {
        setEdit(prev => !prev);
        setTempData(props);
    }


    const handleChange = (field, value) => {
        setTempData(prev => { return { ...prev, [field]: value } });
    }


    return (


        <div className='tableRow'>

            <div className='tableRow_item'>{props.id}</div>
            <div className='tableRow_item'>{!edit ? tempData.russian : <input value={tempData.russian} onChange={(e) => handleChange('russian', e.target.value)} />}</div>
            <div className='tableRow_item'>{!edit ? tempData.english : <input value={tempData.english} onChange={(e) => handleChange('english', e.target.value)} />}</div>
            <div className='tableRow_item'>{!edit ? tempData.transcription : <input value={tempData.transcription} onChange={(e) => handleChange('transcription', e.target.value)} />}</div>
            <div className='tableRow_item'>
                {!edit ? <EditCard handleClick={handleEdit} /> : <SaveCard handleClick={handleEdit} />}
                {!edit ? <DeleteCard handleClick={handleEdit} /> : <CloseCard handleClick={handleCanel} />}
            </div>
        </div>
    )
}

