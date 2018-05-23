import NewsAPI from "newsapi";
import {
    SOURCES_FETCH_BEGIN,
    SOURCES_FETCH_SUCCESS,
    SOURCES_FETCH_FAILED
} from "./types";
const newsapi = new NewsAPI('beefa5656aea44029b1ae4452708be0a');
export const fetchSources = () => {
    return (dispatch) => {
        dispatch({type:SOURCES_FETCH_BEGIN})
        var params = {
            language: 'en'
        }
        newsapi.v2.sources(params).then(response => {
            console.log(response);
            console.log(response)
            if (response.status == "ok") {
              dispatch({
                  type: SOURCES_FETCH_SUCCESS,
                  payload: response.sources
              });
            } 
          }).catch(()=>{
            dispatch({
                type: SOURCES_FETCH_FAILED,
            });
          })
    }
}