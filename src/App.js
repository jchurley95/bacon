import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';

import Header from './components/Header';
import BaconList from './components/BaconList';
import BaconForm from './components/BaconForm';
import {Link} from 'react-router-dom';
const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class App extends Component {
  constructor () {
    super();

    this.state = {
      bacon: [],
      numberOfParagraphs: 0
    }
  }

  updateBacon = (numberOfParagraphs) => {
    this.setState({numberOfParagraphs})
    this.getBacon()
  }

  getBacon = () => {
    const numberOfParagraphs = this.state.numberOfParagraphs;
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${numberOfParagraphs}`)
    .then((response) => {
      const bacon = response.data;
      this.setState({bacon});
    })
  }

  componentWillMount() {
    this.getBacon();
  }

  render() {

    let BaconListComponent = () => (
      <BaconList
        bacon={this.state.bacon}
         />
    )
    let BaconFormComponent = () => (
      <BaconForm 
        numberOfParagraphs={this.numberOfParagraphs}
        updateBacon = {this.updateBacon}
        />
    )

    return (
      <Router>
        <AppWrapper>
          <Header/>
          <Switch>
            <Route exact path="/" component={BaconListComponent}/>
            <Route exact path="/baconForm" component={BaconFormComponent}/>
            {/* next route */}
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
