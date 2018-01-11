import React, { Component } from 'react';
import Bacon from './Bacon';

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
            </div>
        );
    }
}

export default BaconList;