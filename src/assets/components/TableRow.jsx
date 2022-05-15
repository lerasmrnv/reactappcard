import React, { Component } from 'react';

import Edit_card from './Edit_card';
import Delete_card from './Delete_card';

export default class TableRow extends Component {
    render() {
        const { id, russian, english, transcription } = this.props;
        return (
            <tr className='tableRow'>
                <td>{id}</td>
                <td>{russian}</td>
                <td>{english}</td>
                <td>{transcription}</td>
                <td>
                    <Edit_card />
                    <Delete_card />
                </td>
            </tr>
        )
    }
}
