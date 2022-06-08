import React, { useState } from "react";

import EditCard from "../EditCard/EditCard";
import DeleteCard from "../DeleteCard/DeleteCard";
import SaveCard from "../SaveCard/SaveCard";
import CloseCard from "../CloseCard/CloseCard";

export default function TableRow({ word, handleDelete, handleSave }) {
    const { id, name: russian, username: english, website: transcription } = word;

    const [edit, setEdit] = useState(false);
    const [tempData, setTempData] = useState({
        id: word.id,
        russian: word.name,
        english: word.username,
        transcription: word.website,
    });

    const handleEdit = () => {
        setEdit((prev) => !prev);
    };

    const handleSaveData = () => {
        handleSave(id, { id: tempData.id, name: tempData.russian, username: tempData.english, website: tempData.transcription });
        handleEdit();
    };

    const handleCanel = () => {
        setEdit((prev) => !prev);
        setTempData({
            id: word.id,
            russian: word.name,
            english: word.username,
            transcription: word.website,
        });
    };

    const handleChange = (field, value) => {
        setTempData((prev) => {
            return { ...prev, [field]: value };
        });
    };

    return (
        <div key={tempData.id} className="tableRow">
            <div className="tableRow_item">{id}</div>
            <div className="tableRow_item">
                {!edit ? (
                    russian
                ) : (
                    <input
                        value={tempData.russian}
                        onChange={(e) => handleChange("russian", e.target.value)}
                    />
                )}
            </div>
            <div className="tableRow_item">
                {!edit ? (
                    english
                ) : (
                    <input
                        value={tempData.english}
                        onChange={(e) => handleChange("english", e.target.value)}
                    />
                )}
            </div>
            <div className="tableRow_item">
                {!edit ? (
                    transcription
                ) : (
                    <input
                        value={tempData.transcription}
                        onChange={(e) => handleChange("transcription", e.target.value)}
                    />
                )}
            </div>
            <div className="tableRow_item">
                {!edit ? (
                    <EditCard handleClick={handleEdit} />
                ) : (
                    <SaveCard handleClick={handleSaveData} />
                )}
                {!edit ? (
                    <DeleteCard handleClick={() => handleDelete(id)} />
                ) : (
                    <CloseCard handleClick={handleCanel} />
                )}
            </div>
        </div>
    );
}
