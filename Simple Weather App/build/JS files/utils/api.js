var axios = require('axios');

module.exports ={
  fetchPopularRepos: function(city){
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=58fad9a84e0d8316e6f9b8d10588c83a');
    return axios.get(encodedURI)
      .then(function(response){
        return response.data;
      });
  }
}
