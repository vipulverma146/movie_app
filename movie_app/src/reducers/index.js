import {ADD_MOVIES} from '../actions';

const initialMoviesState={
    list:[],
    Favourites:[]
}

export default function movies(state=initialMoviesState,action){  // initially state is empty
    if(action.type===ADD_MOVIES){
        return {
            // returning new object
            ...state ,  // old state as parameter
            list:action.movies
        }
    }
    return state;
}