import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render(){ 
        var title = this.props.title;
        return(            
            <CardSection cardSectionTitle={title}/>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        borderWidth : 1,
        borderRadius : 2,
        borderColor : '#ddd',
        borderBottomWidth : 0,
        shadowColor : '#000',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.1,
        shadowRadius : 2,
        elevation :1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10
    }
})

export default Card;