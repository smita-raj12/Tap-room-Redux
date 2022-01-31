import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
    const { name, brand,price, flavor, pints, id } = action;
    
    switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
            name: name,
            brand: brand,
            price: price,
            flavor: flavor,
            pints: pints,
            id: id
        }
    });
    
    case c.DELETE_KEG:
        let newState = { ...state };
        delete newState[id];
        return newState;
    
    case c.DECREMENT: 
        let newState2 = {...state} 
        Object.values(newState2).map(q => {
            return(q.pints --);
        })
        return  newState2;    
    default:
        return state;
    }
};