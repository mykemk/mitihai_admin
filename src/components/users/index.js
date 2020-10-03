import createRegisterForm from "utils/component-utils/createRegisterForm";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import createManagePage from "utils/component-utils/createManagePage";
import UserTable from "./Userstable";
import UsersForm from "./UserForm";
import { usersTestData } from "contexts/UsersContext";

export const UserForm = createRegisterForm(UsersForm, "User");
export const UserUpdate = createUpdateForm(
  UsersForm,
  "User",
  "",
  "",
  usersTestData[0],
);
export const UsersTable = createManagePage(UserTable, "User");
