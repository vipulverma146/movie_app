// Action type

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES ='REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES ='SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST ='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT ='ADD_SEARCH_RESULT';






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


export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }
  



// search movie

export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=5e04a79b&type=movie&t=${movie}`
   return function(dispatch){
    fetch(url).then(Response =>Response.json())
    .then(movie=>{
        console.log('movie',movie);

        // dispatch an action
        dispatch(addMovieSearchResult(movie));
    })
 }
}

export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    };
}