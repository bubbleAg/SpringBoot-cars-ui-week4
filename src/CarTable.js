import React, { Component } from 'react';
import CarRow from './CarRow';

export default class CarTable extends Component {
    render() {
        const cars = this.props.cars;

        return (
            <>
                {
                    cars.length
                        ? <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Mark</th>
                                    <th>Model</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map(car => <CarRow
                                    car={car}
                                    key={car.id}
                                    onDeleteRow={this.props.onDeleteCar}
                                />
                                )}
                            </tbody>
                        </table>
                        : <p>loading...</p>
                }
            </>
        )
    }
}