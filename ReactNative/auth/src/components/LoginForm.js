import React, {Component} from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { emailText: '' };

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

                <CardSection />

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