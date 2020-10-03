import React from "react";

export const membersTestData = [
  {
    firstName: "Michael",
    lastName: "Karanja",
    phoneNumber: "+254791088553",
    email: "myke@gmail.com",
    gender: "male",
    country: "Kenya",
    membershipPlan: "Custom",
  },
];
export const membersTableActions = { delete: true, approvePayment: true };
export const membersTableColumns = [
  { Header: "First_Name", accessor: "firstName" },
  { Header: "Last_Name", accessor: "lastName" },
  { Header: "Phone_Number", accessor: "phoneNumber" },
  { Header: "Email_Address", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Country", accessor: "country" },
  { Header: "Membership_Plan", accessor: "membershipPlan" },
];

export const MembersContext = React.createContext(membersTestData);
export const MembersProvider = MembersContext.Provider;
