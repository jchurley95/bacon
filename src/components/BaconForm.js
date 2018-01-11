import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class BaconForm extends Component {
    state = {
            numberOfParagraphs: 0,
            redirectToAllTheBacon: false
        }
    
    handleChange = (e) => {
        let newState = {...this.state}
        let value = e.target.value
        newState[e.target.name] = value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateBacon(this.state.numberOfParagraphs)
        this.state.redirectToAllTheBacon = true
    }

    render() {
        
        return (
            <div>

                <form onSubmit={this.handleSubmit}>


                    <label htmlFor="numberOfParagraphs">Okay, that's fair, how much bacon would you like? </label>
                    <br />
                    <input onChange={this.handleChange} placeholder="Number of Bacon" name="numberOfParagraphs" type="text" />
                    <br/>
                    <input value="Give me that much bacon please" type="Submit" />
                </form>
                <hr />
                <Link to="/">Nevermind, I already have enough bacon</Link>
            </div>
        );
    }
}

export default BaconForm;