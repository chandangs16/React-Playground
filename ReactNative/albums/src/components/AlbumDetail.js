// Import a Library to help create a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
     <Card>
         <CardSection>
             <View style={thumbnailContainerStyle}>
                 <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }} 
                 />
             </View>
             <View style={headerContentStyle}>
                <Text style={headerTextStyle}> {title}</Text>
                <Text> {artist}</Text>
             </View>
         </CardSection>

         <CardSection>
             <Image style ={imageStyle} source={{ uri: image }} />
         </CardSection>

     </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 70,
        width: 70
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
