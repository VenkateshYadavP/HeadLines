import {
    SELECT_SOURCE
} from "./types";
export const selectSource = (id) => {
   return {
       type: SELECT_SOURCE,
       payload: id
   }
}