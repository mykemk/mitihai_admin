import React, { PureComponent } from "react";

export class StockUpdate extends PureComponent {
  render() {
    return (
      <>
        <label>Select Product</label>
        <select name="productId">
          <option value="myId">Product 1</option>
          <option value="myId">Product 2</option>
          <option value="myId">Product 3</option>
        </select>
        <label>Quantity Added</label>
        <input
          type="number"
          min="1"
          name="updateQuantity"
          required
          placeholder="...."
        />
      </>
    );
  }
}

export default StockUpdate;
