import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

//Routes
import routes from './routes';

//Reset CSS
import 'reset-css';

//Theme & Global Styles
const theme = {
  primaryBlack: '#232323',
  secondaryBlack: '#404040',
  primaryBlue: '#3498DB',
  primaryRed: '#EE3E4C',
  lightGray: '#EEEEEE'
};

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