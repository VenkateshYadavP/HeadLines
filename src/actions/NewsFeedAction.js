import NewsAPI from "newsapi";
import data from "../data";
import {
    HEADLINE_FETCH_BEGIN,
    HEADLINE_FETCH_SUCCESS,
    HEADLINE_FETCH_FAILED,
    HEADLINE_REFRESH_BEGIN,
    SELECT_CATEGORY
} from "./types";
const newsapi = new NewsAPI('');
export const fetchHeadlines = (category,source = null,isRefresh) => {
    return (dispatch) => {
        if (!isRefresh) {
            dispatch({type:HEADLINE_FETCH_BEGIN})
        } else {
            dispatch({type:HEADLINE_REFRESH_BEGIN})
        }
        params = {
        }
        if (source && source.length > 0){
            params["sources"] = source
        } else {
            params["category"] = category
            params["country"] = 'in'
        }
        params["language"] = 'en'
        console.log("params",params)
        newsapi.v2.topHeadlines(params).then((response) => {
              console.log(response)
              if (response.status == "ok") {
                dispatch({
                    type: HEADLINE_FETCH_SUCCESS,
                    payload: {response:response,selectedCategory:category}
                });
              } 
          }).catch(()=>{
            dispatch({
                type: HEADLINE_FETCH_FAILED,
            });
          })
    }
}