
import React, {Component} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



let WeatherDisplay=(props) =>{



  let weatherdata = props.data;
  let weatherDetails,temp,temp_min,temp_max,icon,name ,weatherDetailsMain;

  if(weatherdata){
    name = weatherdata.name;
    weatherDetails = weatherdata.weatherdata.weather[0];
    weatherDetailsMain = weatherDetails.main;
    temp = weatherdata.weatherdata.main.temp;
    temp_min = weatherdata.weatherdata.main.temp_min;
    temp_max = weatherdata.weatherdata.main.temp_max;
    icon ='http://openweathermap.org/img/w/'+weatherDetails.icon+'.png';
    console.log(icon)
}
return(
<div>
    <div><h1>Weather in {name} : {weatherDetailsMain}<img src={icon} /></h1></div>
    <div><b>Current temperature {temp}&deg;c</b></div>
    <div><b>Min/max</b> temperature <b>{temp_min}&deg;c/{temp_max}&deg;c</b></div>

</div>
)

}

export default WeatherDisplay;
