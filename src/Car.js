import React, { Component } from 'react';

export default class Car extends Component {

    render() {
        const { id, mark, color, model } = this.props.data;
        return (
            <div>
                <p>{id}: {mark} {model} {color}</p>
            </div>
        )
    }
}