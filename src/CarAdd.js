import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class CarAdd extends Component {
    state = {
        car: {},
        redirect: false
    }

    addNewCar() {
        fetch(`http://localhost:8080/cars/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.car)
        })
            .then(r => {
                if (r.ok == false) {
                    r.json().then(r => alert(r.message));
                    return;
                }

                alert('success :)');
                this.setState({ redirect: true })
            })
    }

    onInputChange({ target }) {
        const { value, name } = target;
        const car = { ...this.state.car, [name]: value }

        this.setState({ car });
    }

    onSubmit(e) {
        e.preventDefault();
        this.addNewCar();
    }

    render() {
        const { car, redirect } = this.state;

        return (
            <div className="container">
                <Link className="my-3 btn btn-info" to="/cars">Back to all cars</Link>
                <form onSubmit={this.onSubmit.bind(this)}>

                    <div className="form-group">
                        <label>Mark</label>
                        <input type="text"
                            className="form-control"
                            name="mark"
                            onChange={(e) => this.onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Model</label>
                        <input type="text"
                            className="form-control"
                            name="model"
                            onChange={(e) => this.onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Color</label>
                        <input type="text"
                            className="form-control"
                            name="color"
                            onChange={(e) => this.onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Production Year</label>
                        <input type="number"
                            className="form-control"
                            name="productionYear"
                            onChange={(e) => this.onInputChange(e)} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">Submit</button>
                </form>

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