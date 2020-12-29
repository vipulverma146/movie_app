import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 
import { addMovies} from '../actions';

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
    const { favourites}=this.props.store.getState();

    const index=favourites.indexOf(movie);

    if(index !==-1){
      return true; // found movie in favourite
    }
    return false;

  }

  render()
  {
    const{list}=this.props.store.getState();
    console.log('RENDER',this.props.store.getState());
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>


        </div>

        <div className="list">

          {list.map((movie,index)=>(
            <MovieCard
            movie={movie}
            key={`movies-${index}`}
            dispatch={this.props.store.dispatch}

            isMovieFavourite={this.isMovieFavourite(movie)}
            
            />

          ))}

        </div>

      </div>
    </div>
  );
 }
}

export default App;
