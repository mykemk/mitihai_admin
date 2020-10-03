import React from "react";
import {
  Customersection,
  Billingsection,
  Productsection,
} from "./order-form-components";
import { useBilling } from "utils/hooks/useBilling";
import { BillingProvider } from "contexts/BillingContext";

const OrderForm = () => {
  const { billingState, dispatch } = useBilling();
  return (
    <>
      <Customersection />
      <BillingProvider
        value={{ billingState: billingState, dispatch: dispatch }}>
        <Productsection />
        <Billingsection />
      </BillingProvider>
    </>
  );
};

export default OrderForm;
