import { FETCH_MOVIE, FETCH_MOVIE_FAIL, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_DETAILS,FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAIL } from "../types";
import axios from 'axios';

export const fetchMovie = (data) => (dispatch) => {
    dispatch({
        type: FETCH_MOVIE,
        payload: data,
    });

    try {
        axios.get(`https://www.omdbapi.com/?apikey=192e4cfd&s=${data}&page=1`)
        .then((res)=>{
            console.log('res...',res);
        if (res.status === 200 && res.data.Response === 'True') {
            dispatch({
                type: FETCH_MOVIE_SUCCESS,
                payload: res.data,
            });
        } else {
            alert (res.data.Error);
        }
    })

        .catch((error)=>{
            console.log('error...',error.response.data.Error);
            dispatch({
                type: FETCH_MOVIE_FAIL,
                error: error.response.data.Error,
            })
            
        })
    } catch(error) {
        console.log('error...',error);
        dispatch({
            type:FETCH_MOVIE_FAIL,
            error: error,
        })
    }
}


export const fetchMovieDetails = (data) => (dispatch) => {
    dispatch({
        type: FETCH_MOVIE_DETAILS,
    })

    try{
        axios.get(`https://www.omdbapi.com/?apikey=192e4cfd&i=${data}`)
        .then((res)=>{
            if(res.status === 200) {
                dispatch({
                    type: FETCH_MOVIE_DETAILS_SUCCESS,
                    payload: res.data,
                })
            }
        })
        .catch((error)=>{
            console.log('error...',error);
            dispatch({
                type: FETCH_MOVIE_DETAILS_FAIL,
                error: error.response.data.Error,
            })
        })

    } catch(error) {
        console.log('error 2...' , error);
        dispatch({
            type: FETCH_MOVIE_DETAILS_FAIL,
            error: error.response.data,
        })
    }
}