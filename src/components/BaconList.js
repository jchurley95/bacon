import React, { Component } from 'react';
import Bacon from './Bacon';
import {Link} from 'react-router-dom';

class BaconList extends Component {
    
    render() {

        const baconArray = this.props.bacon;
        console.log(baconArray);

        const baconComponent = baconArray.map((bacon, index) => {
          return <Bacon
              bacon={bacon}
              key={index}
              keyId={index}
              />
        });

        return (
            <div>
                {baconComponent}
                <Link to="/baconForm">I would like to change the number of bacon currently available</Link>
            </div>
        );
    }
}

export default BaconList;