const totalReducer= (state, action)=>{
    if(action.type === 'add') {
        return state + action.price;
      }
      return state - action.price
}
export default totalReducer;