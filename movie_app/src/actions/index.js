// Action type

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';



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