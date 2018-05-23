import React,{Component} from "react";
import {  
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import Category from "./Category";
import News from "./News";
import { fetchHeadlines,selectCategory } from "../actions";
import { Spinner } from "./Spinner";
class NewsFeed extends Component {
    componentDidMount() {
        this.props.selectCategory(this.props.categories[0])
    }
    onPressCategory = (category) => {
        this.props.selectCategory(category)
    }
    _renderNewsItem = ({item}) => {
        return  <News news = {item}/>
    }
    _renderCategoryItem = ({item,index}) => {
        console.log("this.props.selectedCategory == item",this.props.selectedCategory == item)
        if(this.props.selectedCategory == item) {
            return  <Category category = {item} onPressItem = {this.onPressCategory} isSelected/>
        } else {
            return <Category category = {item} onPressItem = {this.onPressCategory}/>
        }
    }
    _NewsKeyExtractor = (item, index) => {
        return item.url.toString();
    }
    _categoriesKeyExtractor = (item, index) => {
        return index.toString();
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.selectedSource != nextProps.selectedSource) {
                if (nextProps.selectedSource && nextProps.selectedSource.length > 0) {
                    this.props.fetchHeadlines(null,nextProps.selectedSource)
                    this.props.selectCategory(null)
                } else {
                    this.props.selectCategory(this.props.categories[0])
                }
        } else if(nextProps.selectedCategory && this.props.selectedCategory != nextProps.selectedCategory) {
            this.props.fetchHeadlines(nextProps.selectedCategory,null)
        }
    }
    refresh = () => {
        if(this.props.selectedCategory) {
            this.props.fetchHeadlines(this.props.selectedCategory,null,true)
        } else {
            this.props.fetchHeadlines(null,this.props.selectedSource,true)
        }
    }
    renderBody() {
        console.log("testtt"+this.props.newsFeed.loading)
        const {newsContainer,activityIndicatorContainer,errorContainer,errorTextStyle} = styles
        if (this.props.newsFeed.response){
            return <View style = {newsContainer}>
            <FlatList
            data = {this.props.newsFeed.response.articles}
            renderItem = {this._renderNewsItem}
            keyExtractor = {this._NewsKeyExtractor}
            refreshing = {this.props.newsFeed.refreshing === true}
            onRefresh={this.refresh}
            />
            </View>
        } else  if (this.props.newsFeed.error) {
            return <View style = {errorContainer}>
            <Text style = {errorTextStyle}>{this.props.newsFeed.error}</Text>
            </View>                
        } else {
            return  <Spinner size = "large"/>
        }
    }
    renderCategories() {
        const {categoriesContainer} = styles

        if(!this.props.selectedSource) {
            return  <View style = {categoriesContainer}>
            <FlatList
            data = {this.props.categories}
            renderItem = {this._renderCategoryItem}
            extraData={this.props.selectedCategory}
            keyExtractor = {this._categoriesKeyExtractor}
            horizontal
            showsHorizontalScrollIndicator = {false}
            ref={(ref) => { this.flatListRef = ref; }}
            />
            </View>
        }
    }
    render(){
        const {container,poweredTextStyle} = styles
        return (
            <View style = {container}>
            {this.renderCategories()}
            {this.renderBody()}
            </View>
        );
    }
}
const makePropsFromState = (state) => {
    console.log(state.newsFeed)
    return {categories: state.categories,
        newsFeed: state.newsFeed,
        selectedSource:state.selectedSource,
        selectedCategory:state.selectedCategory
    }
    }
export default connect(makePropsFromState,{fetchHeadlines,selectCategory})(NewsFeed);
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor:'white',
            flex:1
        },
        categoriesContainer: {
            margin: 4,
            alignItems:'center',
            justifyContent:'center'
        },
        newsContainer: {
            margin: 4,
            flex:1
        },
        errorContainer: {
            margin: 4,
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
        errorTextStyle: {
            alignSelf: 'center',
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
        },
        poweredTextStyle: {
            alignSelf: 'center',
            color: 'black',
            fontSize: 11,
            fontWeight: '400',
            paddingTop: 1,
            paddingBottom: 1,
            shadowRadius: 2,
            shadowOffset: {
                width: 0,
                height: -3,
            },
            shadowColor: '#000000',
            elevation: 4,
        }
    });