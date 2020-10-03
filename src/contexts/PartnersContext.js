import React from "react";

export const partnersTableColumns = [
  { Header: "Partner_Name", accessor: "partnerName" },
  { Header: "Country", accessor: "country" },
  { Header: "Email", accessor: "email" },
  { Header: "Type", accessor: "partnerType" },
  { Header: "Partnership_Description", accessor: "partnershipDesc" },
];

export const partnersTestData = [
  {
    partnerName: "Safaricom",
    country: "Kenya",
    email: "saf@safaricom.com",
    phoneNumber: "+254722000000",
    partnerType: "Organization",
    partnershipDesc: "Super awesome catalystic",
  },
];

export const partnersTableActions = { delete: true, update: true };

export const PartnersContext = React.createContext(partnersTestData);
export const PartnersProvider = PartnersContext.Provider;
