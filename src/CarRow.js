import React, { Component } from 'react';

export default class CarRow extends Component {
    render() {
        const { id, mark, color, model } = this.props.car;

        return (
            <tr>
                <td>{id}</td>
                <td>{mark}</td>
                <td>{model}</td>
                <td>{color}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.onDeleteRow(id)}> X </button>
                </td>
            </tr>
        )
    }

}