import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAu7H-Lpxsyav39-u-_LZ2g0VkJH_YC2wo',
            authDomain: 'authentication-b7224.firebaseapp.com',
            databaseURL: 'https://authentication-b7224.firebaseio.com',
            projectId: 'authentication-b7224',
            storageBucket: 'authentication-b7224.appspot.com',
            messagingSenderId: '643786171758'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
};

export default App;
