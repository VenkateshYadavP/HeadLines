import {
  SELECT_SOURCE
} from "../actions/types";
const INITIAL_VALUE = null
export default (state= INITIAL_VALUE,action) => {
    console.log(action)
    switch (action.type) {
        case SELECT_SOURCE:
            return action.payload;
        default: 
            return state;
    }
}