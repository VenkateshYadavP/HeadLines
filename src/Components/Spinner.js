import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
//import App from './App';

// function based component

 const Spinner = ({size}) => {
    return (
        <View style = {Styles.spinnerViewStyle}>
                <ActivityIndicator style = {Styles.spinnerStyle} size = {size || 'large'}/>
        </View>
    );
};

const Styles = {
    spinnerViewStyle: {
        flex:1,
        flexDirection: 'row',
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent:'center',
    },
    spinnerStyle: {
      alignSelf: 'center'
  }
}
export {Spinner} ;
