import React, { useState, useMemo } from "react";
import { Calculatedinput, Costinput, Shortoutput } from "../../form-components";
import { billingDetails } from "../orders-styles.module.css";
import { BillingContext } from "../../../contexts/BillingContext";
import { useOrderCheckout } from "../../../utils/hooks/useOrderCheckout";
import { Alert, Position } from "@blueprintjs/core";
import FeedbackMessage from "components/state-components/FeedbackMessage";

const BillingSection = () => {
  //values from the checkout hook
  const {
    updateAmount,
    updateDiscount,
    grossAmount,
    amountDue,
    amountPaid,
    isFreeOrder,
    isExcessDiscount,
    isFullyPaid,
  } = useOrderCheckout(BillingContext);

  //unique style for the input fields in the billing section
  let screenWidth = window.screen.availWidth;
  const inputFieldsStyle = useMemo(() => {
    if (screenWidth >= 600) return { width: "60%" };
    return { width: "95%" };
  }, [screenWidth]);

  const [showAlert, setShowAlert] = useState(true);
  const [freeOrderMade, setFreeOrderMade] = useState(false);

  function toggleAlert() {
    setShowAlert(!showAlert);
  }
  function confirmFreeOrder() {
    setFreeOrderMade(true);
    setShowAlert(!showAlert);
  }
  return (
    <fieldset className={billingDetails}>
      <Calculatedinput
        inputStyle={inputFieldsStyle}
        name="grossAmount"
        label="Gross Amount"
        value={grossAmount}
      />
      <Costinput
        inputStyle={inputFieldsStyle}
        label="Discount"
        name="discount"
        placeholder="kshs.."
        onChange={updateDiscount}
      />
      <Calculatedinput
        inputStyle={inputFieldsStyle}
        label="Amount Due"
        name="amountDue"
        value={isFullyPaid ? 0 : amountDue}
      />
      <Costinput
        inputStyle={inputFieldsStyle}
        label="Amount Paid"
        name="amountPaid"
        placeholder="Kshs.."
        onChange={updateAmount}
      />
      <Shortoutput
        inputStyle={inputFieldsStyle}
        label="Payment Status"
        name="paymentStatus"
        value={
          amountPaid ? (isFullyPaid ? "Fully paid" : "on credit") : "unpaid"
        }
      />
      <Calculatedinput
        inputStyle={inputFieldsStyle}
        label="Balance"
        value={!isFullyPaid | isExcessDiscount ? 0 : -amountDue}
      />
      {isFreeOrder && (
        <Alert
          isOpen={showAlert}
          canOutsideClickCancel={false}
          confirmButtonText="Yes, Continue"
          onConfirm={confirmFreeOrder}
          onCancel={toggleAlert}
          icon="delete"
          cancelButtonText="No,Cancel"
          intent="warning">
          Your discount reached 100%, Are you sure you want to make this order
          free ?
        </Alert>
      )}
      {freeOrderMade && (
        <FeedbackMessage
          message="You have confirmed a free order"
          icon="add"
          intent="warning"
          position={Position.BOTTOM_RIGHT}
        />
      )}
    </fieldset>
  );
};

export default BillingSection;
