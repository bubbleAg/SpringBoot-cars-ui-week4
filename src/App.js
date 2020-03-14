import React, { Component } from 'react';
import CarTable from './CarTable';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.deleteCar = this.deleteCar.bind(this);
        this.getAllCars = this.getAllCars.bind(this);
    }

    state = {
        cars: [],
    }

    deleteCar(id) {
        fetch(`http://localhost:8080/cars/delete/${id}`, {
            method: 'POST'
        })

        this.getAllCars();
    }

    getAllCars() {
        fetch('http://localhost:8080/cars')
            .then(response => response.json())
            .then(data => {
                if (data._embedded) {
                    this.setState({ cars: data._embedded.carList })
                }
            });
    }

    componentDidMount() {
        this.getAllCars();
    }

    render() {
        return (
            <div className="panel-body">
                <CarTable onDeleteCar={this.deleteCar} cars={this.state.cars} />
            </div>
        );
    }
}
