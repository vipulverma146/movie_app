// Action type

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES ='REMOVE_FROM_FAVOURITES';



//action creator

export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}


export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie      // single movie is added at a time.
    }
}


export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}