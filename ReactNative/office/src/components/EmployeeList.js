import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {ListView, FlatList } from 'react-native';
import { employeesFetch} from '../actions';
import ListItem from './ListItem';

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

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    renderItem({ item }) {
        return <ListItem employee={item} />
    }

    render() {

        console.log(this.props);
        return (
            <FlatList
                
                // data={this.props.employees}
                // // renderItem= {this.renderRow}
                // renderItem={({ item }) => <Text>{item.name}</Text>}
                enableEmptySections
                data={this.dataSource}
                renderItem={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) =>({ ...val, uid }));
        // return an object containing all properties of employee
        // model, i.e val
        //return { ...val, uid} // {shift: 'Monday, name" 'S', id: '12sf4'}
    //});

    return { employees };
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);