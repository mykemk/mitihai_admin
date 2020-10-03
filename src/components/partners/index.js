import createRegisterForm from "utils/component-utils/createRegisterForm";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import createManagePage from "utils/component-utils/createManagePage";
import {partnersTestData} from "contexts/PartnersContext";

import PartnersForm from "./PartnerForm";
import PartnerTable from "./PartnersTable";

export const PartnerForm = createRegisterForm(PartnersForm, "Partner");
export const PartnerUpdate = createUpdateForm(PartnersForm, "Partner","","",partnersTestData[0]);
export const PartnersTable = createManagePage(PartnerTable, "Partner");
