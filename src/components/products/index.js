import createRegisterForm from "utils/component-utils/createRegisterForm";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import createManagePage from "utils/component-utils/createManagePage";

import ProductsForm from "./ProductsForm";
import ProductTable from "./ProductsTable";
import AlertTable from "./ProductsAlerts";
import StockForm from "./StockUpdate";
import { productsTestData } from "contexts/ProductsContext";

export const ProductForm = createRegisterForm(ProductsForm, "Product");
export const ProductsTable = createManagePage(
  ProductTable,
  "Product",
  true,
  true,
);
export const ProductUpdate = createUpdateForm(
  ProductsForm,
  "Product",
  "",
  "",
  productsTestData[0],
);
export const StockAlerts = createManagePage(
  AlertTable,
  "Stock",
  true,
  false,
  true,
);
export const StockUpdate = createUpdateForm(
  StockForm,
  "Stock",
  "",
  "stockForm",
);
