// Import a Library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] }; // initially empty

  componentWillMount() {
    //console.log('componentWillMount in AlbumList');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      //.then((data) => { console.log(data); });
      //update component state-setState
      .then((responseData) => this.setState({ albums: responseData }));  
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }


  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}


export default AlbumList;
