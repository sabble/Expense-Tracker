const initialState = {
  transactions: [
    {
      id: 1,
      text: "Cash",
      amount: 300,
    },
    {
      id: 2,
      text: "Food",
      amount: -10,
    },
    {
      id: 3,
      text: "Book",
      amount: -20,
    },
  ],
};



const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default RootReducer;
