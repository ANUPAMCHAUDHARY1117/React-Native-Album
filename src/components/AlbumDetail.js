import React , {Component} from 'react';
import {View, Text} from 'react-native';
import Card from './Card';

class AlbumDetail extends Component{
    constructor(props){
        super(props);
        
    }   

    render(){
        var album = this.props.album;
        return(
            <Card title={album.title}/>
        )
    }
}

export default AlbumDetail;