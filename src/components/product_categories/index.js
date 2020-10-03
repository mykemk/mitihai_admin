import createRegisterForm from "utils/component-utils/createRegisterForm";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import createManagePage from "utils/component-utils/createManagePage";

import { categoriesTestData } from "contexts/CategoriesContext";
import CategoriesForm from "./CategoriesForm";
import CategoryTable from "./CategoriesTable";

export const CategoriesTable = createManagePage(CategoryTable, "Category");
export const CategoryForm = createRegisterForm(
  CategoriesForm,
  "Category",
  "",
  "faqForm",
);
export const CategoryUpdate = createUpdateForm(
  CategoriesForm,
  "Category",
  "",
  "faqForm",
  categoriesTestData[0],
);
