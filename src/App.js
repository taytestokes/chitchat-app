import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {

  componentDidMount(){
    this.socket = io('/');
  }

  render() {
    return (
      <div className="App">
        hello, sockets!
      </div>
    );
  }
}

export default App;