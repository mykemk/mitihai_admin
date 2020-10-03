import createRegisterForm from "utils/component-utils/createRegisterForm";
import createManagePage from "utils/component-utils/createManagePage";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import Groupsinput from "./Groupsinput";
import GroupTable from "./Groupstable";
import { groupsSampleData } from "contexts/GroupsContext";

export const GroupForm = createRegisterForm(Groupsinput, "Group");
export const GroupUpdate = createUpdateForm(
  Groupsinput,
  "Group",
  "",
  "",
  groupsSampleData[0],
);

export const GroupsTable = createManagePage(GroupTable, "Group", true);
