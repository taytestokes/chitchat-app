import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';


//Routes
import routes from './routes';

//Theme & Global Styles
const theme = {
  primaryBlack: '#232323',
  secondaryBlack: '#404040',
  primaryGreen: '#28B463',
  primaryBlue: '3498DB'
};

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  font-family: "font-family: 'Roboto', sans-serif";
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {routes}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;