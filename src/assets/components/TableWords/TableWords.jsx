import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';


function TableWords() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDelete = (id) => {
        setUser((prev) => [...prev.filter((user) => user.id !== id)]);
    };

    const handleSave = (id, newUser) => {
        setUser((prev) => [
            ...prev.map((user) => {
                if (user.id === id) {
                    return newUser;
                } else {
                    return user;
                }
            }),
        ]);
    };

    const fetchUsers = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();

            setUser(data);
        }
        catch (error) {
            alert(error);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div className='tableWords'>
            <div className='tableHeader'>
                <div className='tableHeader_item'>#</div>
                <div className='tableHeader_item'>Слово</div>
                <div className='tableHeader_item'>Перевод</div>
                <div className='tableHeader_item'>Транскрипция</div>
                <div className='tableHeader_item'></div>
            </div>
            {loading
                ? "Loading..."
                : users.map((word) => (
                    <TableRow
                        key={word.id.toString()}
                        word={word}
                        handleDelete={handleDelete}
                        handleSave={handleSave}
                    />
                ))}
        </div>
    )
}

export default TableWords;
