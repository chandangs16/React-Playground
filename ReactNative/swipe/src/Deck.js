
import React, {Component} from 'react';
import {View, Animated,PanResponder,Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_TRESHOLD = 0.25*SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {

    static defaultProps = {
        onSwipeRight: () => {},
        onSwipeLeft : () => {}
    }
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
                    this.forceSwipe('right');
                }
                else if(gesture.dx<-SWIPE_TRESHOLD){
                    this.forceSwipe('left');
                }
                else{
                    this.resetPosition();
                }
            }
        });
        //this.position=position;

        this.state={panResponder, position, index: 0};
    }

    forceSwipe(direction) {
        const x= direction === 'right'? SCREEN_WIDTH: -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));

    }

    onSwipeComplete(direction) {
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = data[this.state.index];

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({ x: 0, y: 0 });
        this.setState({ index: this.state.index + 1 });
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

        if(this.state.index>=this.props.data.length){
            return this.props.renderNoMoreCards();
        }
        //attach key prop to Animated.View
        return this.props.data.map((item,i) =>{
            if(i<this.state.index){ return null;}
            if(i===this.state.index){
                return (
                    <Animated.View
                        key={item.id}
                        style={[this.getCardStyle(),styles.cardStyle, {zIndex: i*-1}]}
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            return (
                <View key={item.id} style={[styles.cardStyle,{zIndex: i*-1}]}>
                    {this.props.renderCard(item)}
                </View>
            );
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

const styles = {
    cardStyle:{
        position:'absolute',
        width: SCREEN_WIDTH
    }
}
export default Deck;