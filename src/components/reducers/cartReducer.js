const cartReducer= (state, action)=>{
    switch(action.type) {
        case 'add':
          return [...state, action.service];
        case 'remove':
            const serviceIndex = state.findIndex(item => item.name === action.service.name);
            if(serviceIndex < 0) {
                return state;
            }
          const update = [...state];
          update.splice(serviceIndex, 1);
          return update;
        default:
          return state;
      }
}
export default cartReducer;