// Import a Library to help create a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonSTyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonSTyle}>
         <Text style={textStyle}>
            {children}
         </Text>
        </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonSTyle: {
        flex: 1, // expand to fill as much content as possible.
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }
};

//export default Button;

//if using export *, use below:
export {Button};