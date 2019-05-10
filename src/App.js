import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, 
         faUsers, 
         faUser, 
         faSearch, 
         faPaperPlane, 
         faUserCog, 
         faSignOutAlt, 
         faEnvelope, 
         faChevronLeft, 
         faChevronRight, 
         faEllipsisV, 
         faPencilAlt,
         faArrowLeft, 
        } from '@fortawesome/free-solid-svg-icons';

//Routes
import routes from './config/routes';

//Reset CSS
import 'reset-css';

//Theme & Global Styles
const theme = {
  primaryBlack: '#232323',
  secondaryBlack: '#141414',
  primaryBlue: '#00d8ff',
  primaryRed: '#EE3E4C',
  lightGray: '#DFE3EA',
  darkGray: '#C4C5C1',
  green: '#20E89A'
};

//Add icons to the font awesome library
library.add(faCommentAlt, 
            faUsers, 
            faUser, 
            faSearch, 
            faPaperPlane, 
            faUserCog, 
            faSignOutAlt, 
            faEnvelope, 
            faChevronRight, 
            faChevronLeft, 
            faEllipsisV, 
            faPencilAlt,
            faArrowLeft
            );

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