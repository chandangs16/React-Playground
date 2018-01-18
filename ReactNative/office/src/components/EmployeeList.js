import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {ListView, View, Text} from 'react-native';
import { employeesFetch} from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
        
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are next set of props that this component will be 
        //rendered with. this.props is still old set of props

        this.createDataSource(nextProps);

    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {

        console.log(this.props);
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>                                
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) =>{
        // return an object containing all properties of employee
        // model, i.e val
        return { ...val, uid} // {shift: 'Monday, name" 'S', id: '12sf4'}
    });

    return { employees };
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);