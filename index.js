import { AppRegistry } from 'react-native';
import React from "react";
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware} from "redux"; 
import { Provider } from "react-redux"
import rootReducer from './src/store/reducers/rootReducer';
import thunk from "redux-thunk"

const store = createStore(rootReducer)

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
  )
  
AppRegistry.registerComponent(appName, () => RNRedux);