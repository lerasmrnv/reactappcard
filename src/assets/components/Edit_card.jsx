import React from 'react';
import { FiEdit2 } from "react-icons/fi";

class Edit_card extends React.Component {
    render() {

        return (
            <button className='buttonEdit' value={this.props.selected}><FiEdit2 /></button>
        )
    }
}

export default Edit_card;