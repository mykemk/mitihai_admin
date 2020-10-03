import createManagePage from "utils/component-utils/createManagePage";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import createRegisterForm from "utils/component-utils/createRegisterForm";

import FaqForm from "./FaqForm";
import FaqTable from "./FaqsTable";
import { faqsSampleData } from "contexts/FaqsContext";

export const FaqUpdate = createUpdateForm(
  FaqForm,
  "FAQ",
  "",
  "faqForm",
  faqsSampleData[0],
);
export const FaqRegister = createRegisterForm(FaqForm, "FAQ", "", "faqForm");
export const FaqsTable = createManagePage(FaqTable, "FAQ", true);
