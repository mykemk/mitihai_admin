import Shorttext from "./ShortText";
import Longtext from "./LongText";
import Dateinput from "./DateInput";
import Select from "./Select";
import Timeinput from "./TimeInput";
import createDescriptionField from "./DescriptionField";
import Costinput from "./CostInput";
import Listinput from "./ListInput";
import Phonenumber from "./PhoneNumber";
import Quantityinput from "./QuantityInput";
import Calculatedinput from "./CalculatedInput";
import Shortoutput from "./ShortOutput";
import Linkinput from "./LinkInput";
import Postalcode from "./PostalCode";
import Email from "./Email";
import Fileinput from "./FileInput";
import Passwordinput from "./PasswordInput";
import Idnumber from "./IdNumber";
import Listfields from "./ListFields";

let Shortdescription = createDescriptionField(true);
let LongDescription = createDescriptionField(false);

export {
  Shorttext,
  Longtext,
  Dateinput,
  Select,
  Timeinput,
  Shortdescription,
  LongDescription,
  Costinput,
  Listinput,
  Phonenumber,
  Quantityinput,
  Calculatedinput,
  Shortoutput,
  Linkinput,
  Postalcode,
  Email,
  Fileinput,
  Listfields,
  Passwordinput,
  Idnumber,
};
