import createRegisterForm from "utils/component-utils/createRegisterForm";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import createManagePage from "utils/component-utils/createManagePage";
import OffersForm from "./OfferForm";
import OfferTable from "./OfferTable";
import { offersSampleData } from "contexts/OffersContext";

export const OfferForm = createRegisterForm(
  OffersForm,
  "Offer",
  "",
  "offerForm",
);
export const OfferUpdate = createUpdateForm(
  OffersForm,
  "Offer",
  "",
  "offerForm",
  offersSampleData[0],
);
export const OffersTable = createManagePage(OfferTable, "Offer", true);
