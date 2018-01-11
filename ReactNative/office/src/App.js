import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';



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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
