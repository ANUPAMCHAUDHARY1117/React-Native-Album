import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
    constructor(props){
        super(props);
    }

    state = {albums :[]}

    componentWillMount(){
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums : response.data}))
    }
  
    renderAlbums(){
      return this.state.albums.map(album =>
         <AlbumDetail key={album.title} album={album}/>)
    }

    render(){
        return(
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList