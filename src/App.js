import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faUsers, faSearch, faPaperPlane, faUserCog } from '@fortawesome/free-solid-svg-icons';

//Routes
import routes from './routes';

//Reset CSS
import 'reset-css';

//Theme & Global Styles
const theme = {
  primaryBlack: '#191919',
  secondaryBlack: '#202020',
  primaryBlue: '#3498DB',
  primaryRed: '#EE3E4C',
  lightGray: '#EFF1F9'
};

//Add icons to the font awesome library
library.add(faCommentAlt, faUsers, faSearch, faPaperPlane, faUserCog);

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