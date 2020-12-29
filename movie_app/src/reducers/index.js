import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES } from '../actions';

const initialMoviesState={
    list:[],
    favourites:[]
}

export default function movies(state=initialMoviesState,action){  // initially state is empty
    // if(action.type===ADD_MOVIES){
    //     return {
    //          returning new object
    //         ...state ,   old state as parameter
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){

        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }

        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]   //add favourite along with prev. favourites.
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray=state.favourites.filter(movie => movie.Title !== action.movie.Title);
            return{
                ...state,
                favourites:filteredArray

            }
        default:
            return state;
    }
}