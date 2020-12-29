
import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES} from '../actions';

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}

export  function movies(state=initialMoviesState,action){  // initially state is empty
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
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
            return state;
    }
}



const initialSearchState={
    result:{}
}
// craeting Search reducer
export function search(state=initialSearchState,action){
    return state;
}




const initialRootState={
    movies:initialMoviesState,
    search:initialSearchState
}

//  craeting rootReducer

// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         Search:search(state.search,action)
//     }
// }


export default combineReducers({
    movies,
    search
})

