import { combineReducers } from "redux";
import CategoriesReducer from "./CateogoriesReducer";
import NewsFeedReducer from "./NewsFeedReducer";
import FetchSourcesReducer from "./FetchSourcesReducer";
import SelectSourceReducer from "./SelectSourceReducer";
import SelectedCategoryReducer from "./SelectedCategoryReducer";
export default combineReducers({
    categories: CategoriesReducer,
    newsFeed: NewsFeedReducer,
    sources:FetchSourcesReducer,
    selectedCategory: SelectedCategoryReducer,
    selectedSource:SelectSourceReducer
});