
import React, {Component} from 'react';
import {View, Animated,PanResponder} from 'react-native';

class Deck extends Component {

    constructor(props){
        super(props);

        const panResponder = PanResponder.create({
            // executed anytime the user taps on the screen, any press down. if true, this
            //intance of panresponder responsible for user touching the screen
            onStartShouldSetPanResponder: () =>true,
            //true callback. this callback is called when user drags on screen
            // gesture has info on what user is doing on screen, what pixel value, 
            //how quickly finger is moved
            onPanResponderMove: (event, gesture) => {
                console.log(gesture)
            },
            //when user clicks and relases touch
            onPanResponderRelease: () => {}
        })

        this.state={panResponder};
    }

    renderCards() {
        return this.props.data.map(item =>{
            return this.props.renderCard(item);
        });
    }

    render () {
        return (
            
            //panHandlers is an object that has bunch of callbacks that help
            //intercept presses from user
            //... spreads all the properties over the view
            <View {...this.state.panResponder.panHandlers}>
                {this.renderCards()}
            </View>
        );
    }
}
export default Deck;