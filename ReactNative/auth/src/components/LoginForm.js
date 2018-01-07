import React, {Component} from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { emailText: '', password: '', error: '' };

    onButtonPress() {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(() => {
                    this.setState({ error: 'Authentication Failed!!'});
                });
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                      label="Email"
                      placeholder="user@gmail.com"
                      value={this.state.emailText}
                      onChangeText={emailText => this.setState({ emailText })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                      secureTextEntry
                      placeholder="password"
                      label="Password"
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;