import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm'
import {Card, CradSection, Button, CardSection, } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect()(EmployeeEdit);