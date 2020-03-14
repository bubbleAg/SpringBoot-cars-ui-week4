import React, { Component } from 'react';
import Car from './Car';

export default class App extends Component {

    state = {
        cars: [],
    }

    componentDidMount() {
        fetch('http://localhost:8080/cars')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ cars: data._embedded.carList })
            });
    }

    render() {
        return (
            <div>
                Cars:
                {this.state.cars.map(car => <Car key={car.id} data={car} />)}
            </div>
        );
    }
}
