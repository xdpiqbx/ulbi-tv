const defaultState = { customers: [] };

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] };
    case 'GET_CUSTOMER':
      return state.customers[action.payload];
    default:
      return state;
  }
};
