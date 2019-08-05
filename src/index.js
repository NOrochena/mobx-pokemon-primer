import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

// Import Provider from mobx-react wraps your entire App.
// This allows components to inject any store that is a prop of Provider.
import { Provider } from 'mobx-react'

// Import your MobX stores. 
import userStore from './stores/userStore'
import pokemonStore from './stores/pokemonStore'

ReactDOM.render(
    // Add each MobX store as a prop of provider.
    // and make sure App is wrapped in Provider.
    <Provider 
        userStore={userStore}
        pokemonStore={pokemonStore}
    >
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
