import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {
  constructor(){
    super()

    this.state = {
      messages: [],
      input: '',
      handle: '',
      userID: ''
    }
  }

  // --- Lifecycle Methods --- //
  componentDidMount(){
    this.handleSocketEvents();
  }


  // --- Custom Methods --- //
    //this method listens for socket events;
  handleSocketEvents = () => {
    this.socket = io('/');
    this.socket.on('welcome', this.setUserId);
    this.socket.on('message dispatched', this.updateMessages);
  }

  //Sets the user id to the socket id
  setUserId = (user) => {
    this.setState({
      userID: user.userID
    })
  }

  //Update the message array on state with the new messages
  updateMessages = message => {
    const updatedMessages = this.state.messages.slice();
    updatedMessages.push(message);
    this.setState({
      messages: updatedMessages
    })
  }

  //Handles user input
  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  //Sends message
  sendMessage = () => {
    this.socket.emit('new message', {
      message: this.state.input,
    });
    this.setState({ input: '' });
  };

  render() {
    const {messages, input} = this.state;

    const messagesToDisplay = messages.map((data, index) => {
      return <h1>{data.message}</h1>
    })

    return (
      <div className="App">
        <div>{messagesToDisplay}</div>
        <input value={input} onChange={this.handleInput} placeholder="...."/>
        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default App;