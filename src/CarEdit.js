import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Redirect
} from 'react-router-dom'

export default class CarEdit extends Component {
    state = {
        isLoaded: false,
        redirect: false,
        car: {}
    }

    fetchCarById(id) {
        fetch(`http://localhost:8080/cars/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ car: data, isLoaded: true })
            });
    }

    modifyCar(id) {
        fetch(`http://localhost:8080/cars/modify/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.car)
        }).then(r => {
            if (r.ok) {
                alert('success :)');
                this.setState({ redirect: true })
                return;
            }

            alert('Failed to add new car.');
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchCarById(id);
    }

    onInputChange({ target }) {
        const { value, name } = target;
        const car = { ...this.state.car, [name]: value }

        this.setState({ car });
    }

    onSubmit(e) {        
        const { id } = this.props.match.params;
        e.preventDefault();
        this.modifyCar(id);
    }

    render() {
        const { isLoaded, car, redirect } = this.state;

        return (
            <div className="container">
                <Link className="my-3 btn btn-info" to="/cars">Back to all cars</Link>
                {isLoaded && <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Mark</label>
                        <input type="text"
                            className="form-control"
                            name="mark"
                            onChange={(e) => this.onInputChange(e)}
                            value={car.mark} />
                    </div>

                    <div className="form-group">
                        <label>Model</label>
                        <input type="text"
                            className="form-control"
                            name="model"
                            onChange={(e) => this.onInputChange(e)}
                            value={car.model} />
                    </div>

                    <div className="form-group">
                        <label>Color</label>
                        <input type="text"
                            className="form-control"
                            name="color"
                            onChange={(e) => this.onInputChange(e)}
                            value={car.color} />
                    </div>

                    <div className="form-group">
                        <label>Production Year</label>
                        <input type="number"
                            className="form-control"
                            name="productionYear"
                            onChange={(e) => this.onInputChange(e)}
                            value={car.productionYear} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">Submit</button>
                </form>
                }

                {isLoaded || <p>Loading caaar</p>}
                {redirect && <Redirect
                    to={{
                        pathname: "/cars",
                    }}
                />
                }
            </div>
        )
    }

}