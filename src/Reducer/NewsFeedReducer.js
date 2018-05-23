import {
    HEADLINE_FETCH_BEGIN,
    HEADLINE_FETCH_SUCCESS,
    HEADLINE_FETCH_FAILED,
    HEADLINE_REFRESH_BEGIN
} from "../actions/types";
const INITIAL_VALUE = {
    
}
export default (state= INITIAL_VALUE,action) => {
    console.log(action)
    switch (action.type) {
        case HEADLINE_FETCH_BEGIN:
            return {...INITIAL_VALUE,loading:true,error: ''};
        case HEADLINE_REFRESH_BEGIN:
            return {...state,refreshing:true,error: ''};
        case HEADLINE_FETCH_SUCCESS:
            return action.payload;
        case HEADLINE_FETCH_FAILED:
            return {...INITIAL_VALUE,loading:false,refreshing:false,error: 'Failed to fetch please try again'};
        default: 
            return state;
    }
}