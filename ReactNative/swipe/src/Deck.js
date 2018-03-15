
import React, {Component} from 'react';
import {View, Animated,PanResponder} from 'react-native';

class Deck extends Component {

    constructor(props){
        super(props);

        const position = new Animated.ValueXY();


        const panResponder = PanResponder.create({
            // executed anytime the user taps on the screen, any press down. if true, this
            //intance of panresponder responsible for user touching the screen
            onStartShouldSetPanResponder: () =>true,
            //true callback. this callback is called when user drags on screen
            // gesture has info on what user is doing on screen, what pixel value, 
            //how quickly finger is moved
            onPanResponderMove: (event, gesture) => {
                //debugger
                //console.log(gesture);
                position.setValue({x: gesture.dx, y: gesture.dy });
            },
            //when user clicks and relases touch
            onPanResponderRelease: () => {}
        });
        //this.position=position;

        this.state={panResponder, position};
    }

    renderCards() {
        return this.props.data.map((item,index) =>{
            if(index===0){
                return (
                    <Animated.View
                        style={this.state.position.getLayout()}
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            return this.props.renderCard(item);
        });
    }

    render () {
        return (
            
            //panHandlers is an object that has bunch of callbacks that help
            //intercept presses from user
            //... spreads all the properties over the view
            //to tie panResponder to view add below property
            <View>
                {this.renderCards()}
            </View>
        );
    }
}
export default Deck;