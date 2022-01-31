import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
    type: c.DELETE_KEG,
    id
  });
  export const toggleForm = () => ({
    type: c.TOGGLE_FORM
  });
  export const addKeg = (keg) => {
    const { name, brand,price, flavor, pints, id } = keg;
    return {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      pints: pints,
      id: id
    }
  }
  export const decreseKeg = id => ({
    type: c.DECREMENT,
    id
  });
  