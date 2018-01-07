import React, {Component} from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { emailText: '', password: '' };

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

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;