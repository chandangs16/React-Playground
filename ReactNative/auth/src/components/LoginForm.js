import React, {Component} from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { emailText: '', password: '', error: '', loading: false };

    onButtonPress() {
        const {emailText, password} = this.state;

        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(emailText,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(emailText,password)
            .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({
            emailText: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading){
            return <Spinner size="small" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
            </Button>
        );
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
                    {this.renderButton()}
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