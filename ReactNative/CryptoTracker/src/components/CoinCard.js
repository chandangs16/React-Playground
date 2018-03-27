import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const CoinCard =(props) => {
    return (
        <View>
            <Image />
            <Text> {props.symbol} </Text>
            <Text> {props.price_usd} </Text>
            </View>

    )
}

export default CoinCard;