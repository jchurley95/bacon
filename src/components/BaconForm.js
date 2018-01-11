import React, { Component } from 'react';

class BaconForm extends Component {
    state = {
            numberOfParagraphs: 0
        }
    
    handleChange = (e) => {
        let newState = {...this.state}
        let value = e.target.value
        newState[e.target.name] = value
        this.setState(newState)
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.numberOfParagraphs)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="numberOfParagraphs">Enter the number of paragraphs: </label>
                    <br />
                    <input onChange={this.handleChange} placeholder="Number of Bacon" name="numberOfParagraphs" type="text" />
                    <br/>
                    <input value="Gimme Dat Bacon" type="Submit" />
                </form>
            </div>
        );
    }
}

export default BaconForm;