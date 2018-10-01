import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CardSection extends Component{
    constructor(props){
        super(props);
    }
    render(){
        cardSectionTitle = this.props.cardSectionTitle;
        return(
            <View style={styles.containerStyle}><Text>{cardSectionTitle}</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#ddd',
        position : 'relative'
    }
})

export default CardSection;