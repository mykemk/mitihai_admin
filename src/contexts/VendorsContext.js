import React from "react";
export const vendorsTestData = [
  {
    firstName: "Michael",
    lastName: "Karanja",
    phoneNumber: "+254791088553",
    email: "myke@gmail.com",
    gender: "male",
    country: "Kenya",
    location: "Kawangware",
    joinDate: "12/3/2020",
    orders: "20",
  },
];
export const vendorsTableActions = { delete: true };
export const vendorsTableColumns = [
  { Header: "First_Name", accessor: "firstName" },
  { Header: "Last_Name", accessor: "lastName" },
  { Header: "Phone_Number", accessor: "phoneNumber" },
  { Header: "Email_Address", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Country", accessor: "country" },
  { Header: "Location", accessor: "location" },
  { Header: "Join_Date", accessor: "joinDate" },
  { Header: "Total_Orders", accessor: "orders" },
];
export const vendorRequestsColumns = [
  { Header: "First Name", accessor: "firstName" },
  { Header: "Last Name", accessor: "lastName" },
  { Header: "Phone_Number", accessor: "phoneNumber" },
  { Header: "Email", accessor: "email" },
  { Header: "Location", accessor: "location" },
  { Header: "Date", accessor: "date" },
  { Header: "Time", accessor: "time" },
];

export const vendorRequestsTestData = [
  {
    firstName: "John",
    lastName: "Njuguna",
    phoneNumber: "+254791088553",
    email: "vendor@vendors.com",
    location: "Githurai",
    date: "12/7/2020",
    time: "12:30 AM",
  },
];
export const vendorRequestsActions = { approve: true, decline: true };
export const VendorsContext = React.createContext(vendorsTestData);
export const VendorsProvider = VendorsContext.Provider;
export const VendorRequestsContext = React.createContext(
  vendorRequestsTestData,
);
export const VendorRequestsProvider = VendorRequestsContext.Provider;
