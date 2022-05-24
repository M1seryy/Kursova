let defaultState = {
  customer: [],
};

export const customerReducers = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customer: [...state.customer, action.payload] };
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customer: state.customer.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
