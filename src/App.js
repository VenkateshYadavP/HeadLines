import React,{Component} from "react";
import {  
    Text
} from "react-native";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducer from "./Reducer";
import Router from "./Router";
export default class App extends Component {
    render(){
        return(
            <Provider store = {createStore(reducer,applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}