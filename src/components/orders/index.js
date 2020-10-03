import createManagePage from "utils/component-utils/createManagePage";
import createRegisterForm from "utils/component-utils/createRegisterForm";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import OrdersForm from "./OrderForm";
import OrderTable from "./OrderTable";
import { ordersTestData } from "contexts/OrderContext";

export const OrdersTable = createManagePage(OrderTable, "Order", true);
export const OrderForm = createRegisterForm(OrdersForm, "Order");
export const OrderUpdate = createUpdateForm(
  OrdersForm,
  "Order",
  "",
  "",
  ordersTestData[0],
);
