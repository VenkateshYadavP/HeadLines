import React,{Component} from "react";
import {  
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    LayoutAnimation
} from "react-native";
import Utility from "../Utility";
import { connect } from "react-redux";
import { selectNews } from "../actions";
import { Actions } from "react-native-router-flux";
const {height, width} = Dimensions.get('window'); 
class News extends Component {

    renderImage() {
        const {image} =  styles;
        if (this.props.news.urlToImage) {
           return  <Image source={{ uri: this.props.news.urlToImage }} style = {image} resizeMode = 'cover'/>
        } else {
           return  <Image source={require("../resources/imageNotAvailable.jpeg")} style = {image} resizeMode = 'cover'/>
        }
    }
    knowMoreClicked() {
        console.log(this.props.news.url)
        Actions.NewsDetail({url: this.props.news.url})
    }
    
    
    render(){
        const {title,publishedAt,source} =  this.props.news;
        const {name} = source;
        const {newsContainer,container,titleText,image,titleContainer,infoContainer,sourceNameText,publishedAtText} =  styles;
        return  <TouchableWithoutFeedback onPress = {this.knowMoreClicked.bind(this)}>
                    <View style = {newsContainer}>
                    <View style = {container}>
                        {this.renderImage()}
                        <View style = {titleContainer}>
                        <Text style = {titleText}>
                            {title}
                        </Text>
                        <View style = {infoContainer}>
                        <Text style = {sourceNameText} >
                            {name}
                        </Text>
                        <Text style = {publishedAtText} >
                            {Utility.getTimeDifference(publishedAt)}                                
                        </Text>
                        </View>
                        </View>
                    </View>
                    </View>
                </TouchableWithoutFeedback>
    }
}

export default News;

const styles = StyleSheet.create({
    newsContainer: {
        margin:8,
        justifyContent:'flex-start',
        backgroundColor:'white',
        borderWidth: 2,
        borderColor: '#d3d3d3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2,
        flexDirection:'column',
        borderRadius:4
    },
    container: {
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    titleContainer: {
        flex:1,
        justifyContent:'space-between',
        flexDirection:'column'
    },
    infoContainer: {
        justifyContent:'space-between',
        flexDirection:'row',
        padding:2
    },
    titleText: {
        color:'#545454',
        margin: 8,
        fontSize: 16,
        fontWeight: '700',
        flex: 1, 
        flexWrap: 'wrap'
    },
    sourceNameText: {
        flex:2,
        color:'#545454',
        margin: 4,
        fontSize: 13,
        fontWeight: '400',
        flexWrap:'wrap'
    },
    publishedAtText: {
        color:'#545454',
        margin: 4,
        fontSize: 13,
        fontWeight: '400',
    },
    image: {
        margin: 8,
        height: 100,
        width: 100,
        backgroundColor:'#D3D3D3'
    }
});