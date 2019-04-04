import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

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

//Add icons to the font awesome library
library.add(faCommentAlt, faUsers);

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