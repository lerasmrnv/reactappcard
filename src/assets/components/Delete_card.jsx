import React, { Component } from 'react';
import { FiTrash2 } from "react-icons/fi";


export default class Delete_card extends Component {
    render() {
        return (
            <button className='buttonDelete'><FiTrash2 /></button>
        )
    }
} 