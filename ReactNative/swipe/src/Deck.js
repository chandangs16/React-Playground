
import React, {Component} from 'react';
import {View, Animated,PanResponder,Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_TRESHOLD = 0.25*SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

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
            onPanResponderRelease: (event, gesture) => {
                if(gesture.dx>SWIPE_TRESHOLD){
                    this.forceSwipeRight();
                }
                else if(gesture.dx<-SWIPE_TRESHOLD){
                    console.log('swipe left')
                }
                else{
                    this.resetPosition();
                }
            }
        });
        //this.position=position;

        this.state={panResponder, position};
    }

    forceSwipeRight() {
        Animated.timing(this.state.position, {
            toValue: { x: SCREEN_WIDTH, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start();
    }

    resetPosition() {
        Animated.spring(this.state.position,{
            toValue: {x: 0,y: 0}
        }).start();
    }

    getCardStyle(){

        const { position } = this.state;
        const rotate = position.x.interpolate({
            //to specify how much it should be rotated.
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH*1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{rotate}]
        };
    }

    renderCards() {
        //attach key prop to Animated.View
        return this.props.data.map((item,index) =>{
            if(index===0){
                return (
                    <Animated.View
                        key={item.id}
                        style={this.getCardStyle()}
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