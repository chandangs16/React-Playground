// Import a Library to help create a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle
    } = styles;
    return (
     <Card>
         <CardSection>
             <View style={thumbnailContainerStyle}>
                 <Image 
                    style={thumbnailStyle}
                    source={{ uri: album.thumbnail_image }} 
                 />
             </View>
             <View style={headerContentStyle}>
                <Text style={headerTextStyle}> {title}</Text>
                <Text> {artist}</Text>
             </View>
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
    }
};

export default AlbumDetail;
