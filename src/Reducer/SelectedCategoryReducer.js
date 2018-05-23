import {
    SELECT_CATEGORY
  } from "../actions/types";
  const INITIAL_VALUE = null
  export default (state= INITIAL_VALUE,action) => {
      console.log(action)
      switch (action.type) {
          case SELECT_CATEGORY:
              return action.payload;
          default: 
              return state;
      }
  }