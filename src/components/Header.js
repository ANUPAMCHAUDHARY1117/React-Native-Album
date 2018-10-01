import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';


class Header extends Component {
    constructor(props){
    super(props);
    
    }
    render(){
        const headerName = this.props;
        return(
            <View style = {styles.viewStlye}>
                <Text style = {styles.textStyle}>{headerName.headerText}</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    viewStlye : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        shadowColor : '#000',
        shadowOffset : {width : 0, height :20 },
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative'
    },
    textStyle : {
        fontSize : 20
    }
})
export default Header;