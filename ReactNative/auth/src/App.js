import React, {Component} from 'react';
import {View, Image} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner,CardSection } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
    state = {loggedIn: null};
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAu7H-Lpxsyav39-u-_LZ2g0VkJH_YC2wo',
            authDomain: 'authentication-b7224.firebaseapp.com',
            databaseURL: 'https://authentication-b7224.firebaseio.com',
            projectId: 'authentication-b7224',
            storageBucket: 'authentication-b7224.appspot.com',
            messagingSenderId: '643786171758'
          });

          firebase.auth().onAuthStateChanged((user) => {
              if(user) {
                  this.setState({loggedIn: true});
              }
              else {
                  this.setState({loggedIn: false});
              }

          });
    }

    renderContent() {
        switch(this.state.loggedIn){
            case true:
              return (
                <CardSection>
                    <Button onPress= {() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </CardSection>
                
              );

            case false:
              return <LoginForm />;

            default:
              return <Spinner size="large" />;
        }
        // if(this.state.loggedIn){
        //     return (
        //         <Button>
        //             Log Out
        //         </Button>
        //     );
        // }
        // return <LoginForm />
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                
                    {this.renderContent()}
                
            </View>
        );
    }
};

export default App;
