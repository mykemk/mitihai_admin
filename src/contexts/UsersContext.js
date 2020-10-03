import React from "react";

export const usersTestData = [
  {
    firstName: "Michael",
    lastName: "Karanja",
    phoneNumber: "+254791088553",
    email: "myke@gmail.com",
    gender: "male",
    country: "Kenya",
    idNumber: "38124247",
    position: "Admin",
    userGroup: "Admin",
    password: "XXY910",
    userName: "me@users",
  },
];
export const usersTableActions = { delete: true, update: true };
export const usersTableColumns = [
  { Header: "First_Name", accessor: "firstName" },
  { Header: "Last_Name", accessor: "lastName" },
  { Header: "Phone_Number", accessor: "phoneNumber" },
  { Header: "Email_Address", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Country", accessor: "country" },
  { Header: "idNumber", accessor: "idNumber" },
  { Header: "Position", accessor: "position" },
  { Header: "Group", accessor: "userGroup" },
];

export const UsersContext = React.createContext(usersTestData);
export const UsersProvider = UsersContext.Provider;
