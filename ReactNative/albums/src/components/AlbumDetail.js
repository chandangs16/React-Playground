// Import a Library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
    return (
     <View>
      <Text> {props.album.title}</Text>
     </View>
    );
};

export default AlbumDetail;
