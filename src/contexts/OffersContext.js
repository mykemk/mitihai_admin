import React from "react";

export const offersTableColumns = [
  { Header: "Offer_Name", accessor: "offerName" },
  { Header: "Product", accessor: "productName" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Start_Date", accessor: "startDate" },
  { Header: "Duration(days)", accessor: "duration" },
  { Header: "Status", accessor: "status" },
];

export const offersSampleData = [
  {
    offerName: "Jibambe",
    productName: "Classic Watch",
    discount: 20,
    startTime: "12:30",
    startDate: "2020-12-12",
    duration: 10,
    status: "active",
  },
];
export const offersTableActions = { update: true, delete: true };
export const OffersContext = React.createContext(offersSampleData);
export const OffersProvider = OffersContext.Provider;
