import React,{Component} from "react";
import {  
    Text,
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";
class Category extends Component {
    render(){
        const {container,categoryText,selectedContainerStyle,selectedCategoryText} =  styles;
        return  <TouchableWithoutFeedback onPress = {() => this.props.onPressItem(this.props.category)}>
                    <View style = {this.props.isSelected ? selectedContainerStyle : container}>
                        <Text style = {this.props.isSelected ? selectedCategoryText:  categoryText}>
                            {this.props.category}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        margin: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 2,
        borderColor: 'green',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 6,
        backgroundColor:'white'
    },
    selectedContainerStyle:{
        margin: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 3,
        borderColor: 'green',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 6,
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius:2,
        elevation: 4,
    },
    categoryText: {
        fontSize: 15,
        fontWeight: '600'
    },
    selectedCategoryText: {
        fontSize: 17,
        fontWeight: '900',
        color:'green'
    }
});