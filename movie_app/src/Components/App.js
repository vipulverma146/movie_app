import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 
import { addMovies,setShowFavourites} from '../actions';

class App extends React.Component{ 
  componentDidMount(){

    const {store}=this.props;
    // subscribing

    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();  //use to forcefully update the app component

    })

    // make api call to get movies

    // dispatch action
    store.dispatch(addMovies(data));

    console.log("STATE",store.getState());
  }

  isMovieFavourite=(movie)=>{
    const { movies}=this.props.store.getState();

    const index=movies.favourites.indexOf(movie);

    if(index !==-1){
      return true; // found movie in favourite
    }
    return false;

  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val));
  }

  render()
  {
    const { movies }=this.props.store.getState();   // { movies:{},search:{}}
    const{list,favourites,showFavourites}= movies;
    console.log('RENDER',this.props.store.getState());

    const displayMovies= showFavourites ? favourites: list;
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>


        </div>

        <div className="list">

          {displayMovies.map((movie,index)=>(
            <MovieCard
            movie={movie}
            key={`movies-${index}`}
            dispatch={this.props.store.dispatch}

            isMovieFavourite={this.isMovieFavourite(movie)}
            
            />

          ))}

        </div>
        {
          displayMovies.length ===0? <div className="no-movies">No Movies to display!</div>:null
        }

      </div>
    </div>
  );
 }
}

export default App;
