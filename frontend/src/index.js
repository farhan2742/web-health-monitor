// Import Statements

import React from 'react';                                                  // React Library Components
import ReactDOM from 'react-dom';                                           // React DOM Components
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import App from './App';                                                    // Main App Component

// import { FronteggProvider } from '@frontegg/react';

// const contextOptions = {
//   baseUrl: 'https://app-u1iw8ykxdwtv.frontegg.com',
//   clientId: '49dd877f-9a92-47d6-9cb8-39c240ad0fbc'
// };


// Definition Statements

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );

//ReactDOM.render(<App />, document.getElementById('root'));    

// ReactDOM.render(                                                           // Set Root component
//     <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>    
//         <App />
//     </FronteggProvider>,
//     document.getElementById('root')
// );         