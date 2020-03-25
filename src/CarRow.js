import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class CarRow extends Component {
    render() {
        const { car, headers } = this.props;
        const link = `/cars/edit/${car.id}`;

        return (
            <tr>
                {headers.map(header => <td align="center" key={header.property}>{car[header.property]}</td>)}

                <td>
                    <Link className="btn btn-info" to={link}>Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.onDeleteRow(car.id)}> X </button>
                </td>
            </tr>
        )
    }

}