import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
// import { IconContext } from 'react-icons';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './constants/Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        {/* <IconContext.Provider
          value={{
            size: '1.3em',
            style: { verticalAlign: 'middle', marginRight: '8px' },
          }}
        > */}
          <Provider store={store}>
            <App />
          </Provider>
        {/* </IconContext.Provider> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import { store } from './Redux/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals