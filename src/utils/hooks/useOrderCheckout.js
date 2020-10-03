import { useState, useEffect, useCallback, useContext, useMemo } from "react";

export function useOrderCheckout(billingContext) {
  const { billingState, dispatch } = useContext(billingContext);
  const { grossAmount, amountDue } = billingState;
  const [discount, setDiscount] = useState(0);
  const [amountPaid, setAmountpaid] = useState(0);
  const [discountChange, setDiscountChange] = useState(0);
  const [amountChange, setAmountChange] = useState(0);

  const offerDiscount = useCallback(
    (discount) => {
      dispatch({ option: "OFFER_DISCOUNT", discount: discount });
    },
    [dispatch],
  );

  const makePayment = useCallback(
    (amountPaid) => {
      dispatch({ option: "PAY", amountPaid: amountPaid });
    },
    [dispatch],
  );

  const updateDiscount = useCallback(
    async (newDiscount) => {
      if (Number.isNaN(newDiscount)) return setDiscountChange(0);
      setDiscountChange(newDiscount - discount);
      setDiscount(newDiscount);
    },
    [setDiscountChange, setDiscount, discount],
  );

  const updateAmount = useCallback(
    async (newAmount) => {
      if (Number.isNaN(newAmount)) return setAmountChange(0);
      setAmountChange(newAmount - amountPaid);
      setAmountpaid(newAmount);
    },
    [setAmountChange, setAmountpaid, amountPaid],
  );
  let freeOrder = useMemo(() => {
    return discount && discount > amountDue;
  }, [discount, amountDue]);
  let [isExcessDiscount, isFreeOrder, isFullyPaid] = [
    discount > amountDue,
    freeOrder,
    amountDue <= 0,
  ];

  useEffect(() => {
    offerDiscount(discountChange);
  }, [discountChange, offerDiscount]);

  useEffect(() => {
    makePayment(amountChange);
  }, [amountChange, makePayment]);

  return {
    updateDiscount,
    updateAmount,
    grossAmount,
    amountDue,
    amountPaid,
    discount,
    isFreeOrder,
    isExcessDiscount,
    isFullyPaid,
  };
}
