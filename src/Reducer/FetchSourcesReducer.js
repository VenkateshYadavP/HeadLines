import {
    SOURCES_FETCH_BEGIN,
    SOURCES_FETCH_SUCCESS,
    SOURCES_FETCH_FAILED
} from "../actions/types";
const INITIAL_VALUE = []
export default (state= INITIAL_VALUE,action) => {
    console.log(action)
    switch (action.type) {
        case SOURCES_FETCH_BEGIN:
            return {...INITIAL_VALUE,loading:true,error: ''};
        case SOURCES_FETCH_SUCCESS:
            return action.payload;
        case SOURCES_FETCH_FAILED:
            return {...INITIAL_VALUE,loading:false,error: 'Failed to fetch please try again'};
        default: 
            return state;
    }
}