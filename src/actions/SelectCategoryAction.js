import {
    SELECT_CATEGORY
} from "./types";
export const selectCategory = (category) => {
   return {
       type: SELECT_CATEGORY,
       payload: category
   }
}