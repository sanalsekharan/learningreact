const reducer =(state = {
  place: 'Thrissur',
  weatherdata:null
},action)=>{
  switch(action.type){
    case "Place":
      return [...state,{
        name: action.playload,
        weatherdata:null
      }]
    case "Weatherdata":
      return [...state,{
        name: action.playload.name,
        weatherdata:action.playload
      }]
    default:
      return state;
    }
}

export default reducer;
