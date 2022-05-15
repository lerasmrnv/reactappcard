import React, { Component } from 'react';
import Save_card from './Save_card';
import Delete_card from './Delete_card';

class Add_card extends Component {
    render() {
        return (
            <tr className='add_card'>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td>
                    <Save_card />
                    <Delete_card />
                </td>
            </tr>
        )
    }
}

export default Add_card;

