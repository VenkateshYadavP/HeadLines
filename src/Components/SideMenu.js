import React,{Component} from "react";
import {  
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { fetchSources,selectSource } from "../actions";
import { Actions} from "react-native-router-flux";
import { connect } from "react-redux";

class SideMenu extends React.Component {
  componentDidMount() {
    this.props.fetchSources()
  }
  KeyExtractor = (item, index) => {
    return index.toString();
  }
  renderSeparator = () => {
    return (
      <View
      style={{
        height: 1,
        backgroundColor: "#CED0CE",
      }}
      />
    );
  };
  onPressItem(id) {
    Actions.newsFeed()
    this.props.selectSource(id)
  }
  onPressHome() {
    Actions.newsFeed()
    this.props.selectSource(null)
  }
  getHomeStyle() {
    return (this.props.selectedSource == null ? styles.selectedHomeText : styles.homeText)
  }
  render() {
    const {rootContainer,appTitleContainer,titleText,appHomeContainer,homeText,separatorStyle,sourceContainer,listStyle,poweredBy} =  styles;
      return (
        <View style = {rootContainer}>
        <View style = {appTitleContainer}>
        <Text style = {titleText}>
        Headlines
        </Text>
        </View>
        <TouchableWithoutFeedback onPress = {() => this.onPressHome()}>
        <View style = {appHomeContainer}>
        <Text style = {this.getHomeStyle()}>
        Home
        </Text>
        </View>
        </TouchableWithoutFeedback>
        <View style={separatorStyle}/>
        <View style={sourceContainer}>
        {this._renderSources()}
        </View>
        <View style={separatorStyle}/>
        <Text style = {poweredBy}>
        Powered by NewsAPI.org
        </Text>
        </View>
      );
  }
  _renderSources = () => {
    const {listStyle,loaderContainer,loaderText} =  styles;
    if(this.props.sources.length > 0) {
     return <FlatList
      style = {listStyle}
      data = {this.props.sources}
      renderItem = {this._renderSourceItem}
      keyExtractor = {this.KeyExtractor}
      ItemSeparatorComponent={this.renderSeparator}
      extraData = {this.props.selectedSource}
      />
    }else {
      return (
        <View style={loaderContainer}>
        <Text style = {loaderText}>
        Fetching sources...
        </Text>
        </View>
      );
    }
  }
  _renderSourceItem = ({item,index}) => {
    const {titleContainer,sourceText,selectedSourceText} =  styles;
     finalStyle = this.props.selectedSource == item.id ? selectedSourceText : sourceText
    return (
      <TouchableWithoutFeedback onPress = {() => this.onPressItem(item.id)}>
      <View style = {titleContainer}>
      <Text style = {finalStyle}>
      {item.name}
      </Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
  
}
const makePropsFromState = (state) => {
  console.log(state)
  return {
    sources:state.sources,
    selectedSource:state.selectedSource
  }
}
export default connect(makePropsFromState,{fetchSources,selectSource})(SideMenu);

const styles = StyleSheet.create({
  rootContainer:{
    flex:1
  },
  appTitleContainer: {
    height: 100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
    marginBottom:4
  },
  titleText: {
    color:'white',
    fontSize:26,
    fontWeight:"900"
  },
  appHomeContainer: {
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    margin:4
  },
  homeText: {
    fontSize:20,
    fontWeight:"600",
    color:'#545454',
  },
  selectedHomeText: {
    fontSize:20,
    fontWeight:"600",
    color:'black'
  },
  separatorStyle:{ height: 2,
    backgroundColor: "#CED0CE",
  },
  titleContainer: {
    margin: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  sourceContainer: {
    flex:1,
    justifyContent:'center',

  },
  loaderContainer: {
    alignItems:'center'
  },
  loaderText: {
    alignItems:'center',
    fontSize:17,
    fontWeight:"600"
  },
  sourceText: {
    fontSize:17,
    fontWeight:"600",
    color:'#696969',
    textAlign:'center'
  },
  selectedSourceText: {
    color:'black',
    fontSize:18,
    fontWeight:"600",
  },
  listStyle:{
    paddingBottom:50
  },
  poweredBy:{
    margin:10,
    fontSize:13,
    fontWeight:"600",
    alignSelf:'center',
    textDecorationLine:'underline'
  }
});