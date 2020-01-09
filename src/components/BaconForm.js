import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class BaconForm extends Component {
    state = {
        redirectToAllTheBacon: false
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.props.updateBacon(e.target.value)
    }

    redirectToTheBaconPlease = () => {
        this.setState({redirectToAllTheBacon: true})
    }

    render() {
        if (this.state.redirectToAllTheBacon) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <label htmlFor="numberOfParagraphs">Okay, that's fair, how much bacon would you like? </label>
                <br />
                <h3>Currently have {this.props.numberOfParagraphs} bacon</h3>
                <input onChange={this.handleChange} placeholder="Number of Bacon" name="numberOfParagraphs" type="text" />
                <br/>
                <button onClick={this.redirectToTheBaconPlease}>Take me back to the bacon please</button>
                <hr />
                <Link to="/">Nevermind, I already have enough bacon</Link>
            </div>
        );
    }
}

export default BaconForm;