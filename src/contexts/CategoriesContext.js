import React from "react";

export const categoriesTableColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const categoriesTestData = [
  {
    name: "Lifestyle",
    description: "Has a super awesome lifestyle products",
    image: "me/me/you.jpg",
  },
];

export const categoriesTableActions = { delete: true, update: true };
export const CategoriesContext = React.createContext(categoriesTestData);
export const CategoriesProvider = CategoriesContext.Provider;
