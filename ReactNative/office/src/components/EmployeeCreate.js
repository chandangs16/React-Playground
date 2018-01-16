import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Chandan"
                    />
                </CardSection>
                    <Input
                        label="Phone"
                        placeholder="480-410-2417"
                    />
                <CardSection>

                </CardSection>

                <CardSection>

                </CardSection>
                <Button>
                    Create
                </Button>
                <CardSection>

                </CardSection>

            </Card>

        );
    }
}

export default EmployeeCreate;