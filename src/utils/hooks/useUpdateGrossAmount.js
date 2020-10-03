import { useState, useContext, useCallback, useEffect } from "react";

export function useUpdateGrossAmount(billingContext) {
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(100);
  const { dispatch } = useContext(billingContext);

  // Callback function to update the product quantity
  const updateQuantity = useCallback(
    (value) => {
      if (Number.isNaN(value)) return setQuantity(0);
      return setQuantity(value);
    },
    [setQuantity],
  );
  // Callback function to update the product price
  const updatePrice = useCallback(
    (value) => {
      if (Number.isNaN(value)) return setPrice(0);
      return setPrice(value);
    },
    [setPrice],
  );
  // callback function to calculate the total
  const calculateTotal = useCallback(
    (quantity, price) => {
      let newTotal = quantity * price;
      dispatch({ option: "CHANGE_GROSSAMOUNT", difference: newTotal - total });
      setTotal(newTotal);
    },
    [dispatch, setTotal, total],
  );
  // Updates the rendered total after a price/ quantity has changed
  useEffect(() => {
    calculateTotal(quantity, price);
  }, [price, quantity, calculateTotal]);

  return { updatePrice, updateQuantity, quantity, total, price };
}
