import { useReducer } from "react";

let initialState = {
  grossAmount: 0,
  amountDue: 0,
};
function billingReducer(state, action) {
  switch (action.option) {
    case "CHANGE_GROSSAMOUNT":
      return {
        grossAmount: state.grossAmount + action.difference,
        amountDue: state.grossAmount + action.difference,
      };
    case "OFFER_DISCOUNT":
      return {
        grossAmount: state.grossAmount,
        amountDue: state.amountDue - action.discount,
      };
    case "PAY":
      return {
        grossAmount: state.grossAmount,
        amountDue: state.amountDue - action.amountPaid,
      };
    default:
      return state;
  }
}

export function useBilling() {
  const [billingState, dispatch] = useReducer(billingReducer, initialState);
  return { billingState, dispatch };
}
