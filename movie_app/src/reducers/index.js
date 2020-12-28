export default function movies(state=[],action){  // initially state is empty
    if(action.type=='ADD_MOVIES'){
        return action.movies;   // list of movie's array
    }
    return state;
}