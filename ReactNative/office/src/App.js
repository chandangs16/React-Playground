import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router'



class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCLncHsCCOmKZy9RYc1VnT2fsgziRdjD98",
            authDomain: "officemanager-c3d34.firebaseapp.com",
            databaseURL: "https://officemanager-c3d34.firebaseio.com",
            projectId: "officemanager-c3d34",
            storageBucket: "officemanager-c3d34.appspot.com",
            messagingSenderId: "1063818884981"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store=createStore(reducers, {}, applyMiddleware(ReduxThunk)); // 2nd argument to pass any initial state to redux app. 
        //3rd argument is store enhancer
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
