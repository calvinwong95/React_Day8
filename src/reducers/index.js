import { combineReducers } from "redux";

import fetchMovieReducer from "./fetchMovieReducer";
import fetchMovieDetails from "./fetchMovieDetailsReducer";

export default combineReducers ({
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetails,
});