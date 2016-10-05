import React from 'react';
import AddFish from './AddFish'

class Inventory extends React.Component {
    render() {
        return (
          <div>
          <h2>Inventory</h2>
          <AddFish addFish={this.props.addFish}/>
          <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
          </div>

        )
    }
}

export default Inventory;
