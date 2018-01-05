// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

// Import a Library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// or can do this way
// const App= () => {
//   return (
//     <Text> Some Text </Text>
//   );
// };


// Render componene to device
AppRegistry.registerComponent('albums', () => App);
