import React from "react";
import {
  Select,
  Quantityinput,
  Calculatedinput,
  Costinput,
} from "../../form-components";
import { orderLabels } from "../orders-styles.module.css";
import { BillingContext } from "../../../contexts/BillingContext";
import { useUpdateGrossAmount } from "../../../utils/hooks/useUpdateGrossAmount";

const ProductField = ({ remove, index }) => {
  //modules from gross amount custom hook
  // Takes a method 'remove' and 'index' as props to be used to remove the product added
  const { updateQuantity, quantity, total, price } = useUpdateGrossAmount(
    BillingContext,
  );

  return (
    <tr className={orderLabels}>
      <td>
        <Select
          name={`products[${index}].productId`}
          options={["Product 1", "Product 2", "Product 3"]}
        />
      </td>
      <td>
        <Quantityinput
          onChange={updateQuantity}
          value={quantity}
          name={`products[${index}].quantity`}
        />
      </td>
      <td>
        <Calculatedinput value={price} name={`products[${index}].price`} />
      </td>
      <td>
        <Costinput name={`products[${index}].engraveCost`} value={0} />
      </td>
      <td>
        <Calculatedinput value={total} name={`products[${index}].total`} />
      </td>
      <td>
        <button
          type="button"
          className="table-action-btns primaryAction"
          onClick={() => remove(index)}>
          x
        </button>
      </td>
    </tr>
  );
};

export default ProductField;
