import React, {Component} from 'react';
import api from '../utils/api';
import WeatherDisplay from './WeatherDisplay';
import PlaceInput from './PlaceInput';
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

let Home =(props)=>{
  return(
    <h1 className = 'App-header'>{props.name}</h1>
  );
}

export default class App extends Component{
  constructor(props) {
    super(props);

    this.updateWeatherData
     = this.updateWeatherData.bind(this);
  }
  componentDidMount(){
    this.updateWeatherData('Thrissur');
  }
  updateWeatherData(place){
    store.dispatch({type: 'Place', playload:place});
    api.fetchPopularRepos(place)
    .then(function(repo){
      this.setState(function(){
          store.dispatch({type: 'Weatherdata', playload:repo});
      })
    }.bind(this));
}

  render(){
    let weatherdata = [...store.getState()].pop();
    console.log(weatherdata);
    return(
      <div className= 'container'>
        <Home name ='sanal' />
        <div className = 'weatherContainer'>
        <PlaceInput onSubmit= {this.updateWeatherData}/>
        <WeatherDisplay data = {weatherdata}/>
      </div>
      </div>
    )
  }
}
