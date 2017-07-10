import React, {Component} from 'react';
import api from '../utils/api';

export default class PlaceInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      place: '',
      weatherdata:null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    var value = event.target.value;
    this.setState(function(){
      return{
        username: value
      }
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.username);

  }
  render(){

    return(
      <form className = 'column' onSubmit = {this.handleSubmit}>
        <label className ='header' htmlFor = 'username'>
        Weather Search By Place
        </label>
        <input id = 'cityname'
        placeholder = 'City Name'
        type = 'text'
        autoComplete='off'
        onChange ={this.handleChange}
        />
        <button
        className ='button'
        type= 'submit'
        >
        Submit</button>

      </form>
    )
  }
}
