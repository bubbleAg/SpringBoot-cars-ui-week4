import React, { Component } from 'react';
import CarRow from './CarRow';

export default class CarTable extends Component {
    constructor(props) {
        super(props);

        this.deleteCar = this.deleteCar.bind(this);
        this.getAllCars = this.getAllCars.bind(this);
    }

    state = {
        cars: [],
        headers: [
            {
                name: 'Mark',
                property: 'mark',
            },
            {
                name: 'Model',
                property: 'model',
            },
            {
                name: 'Color',
                property: 'color',
            },
            {
                name: 'Production Year',
                property: 'productionYear',
            },
        ]
    }

    deleteCar(id) {
        fetch(`http://localhost:8080/cars/delete/${id}`, {
            method: 'POST'
        }).then(() => this.getAllCars());
    }

    getAllCars() {
        fetch('http://localhost:8080/cars')
            .then(response => response.json())
            .then(data => {
                console.log('get cars', data);
                if (data._embedded) {
                    this.setState({ cars: data._embedded.carList })
                }
            });
    }

    componentDidMount() {
        this.getAllCars();
    }

    render() {
        const { cars, headers } = this.state;

        return (
            <div className="container">
                {
                    cars.length
                        ? <table className="table table-striped">
                            <thead>
                                <tr align="center">
                                    {headers.map(header => <th key={header.property}>{header.name}</th>)}
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map(car => <CarRow
                                    car={car}
                                    key={car.id}
                                    headers={headers}
                                    onDeleteRow={this.deleteCar}
                                />
                                )}
                            </tbody>
                        </table>
                        : <p>loading...</p>
                }
            </div>
        )
    }
}