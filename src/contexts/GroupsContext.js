import React from "react";

export const groupsSampleData = [
  {
    groupName: "Admin",
    permisions: [
      { groups: { create: true, read: true, update: true, delete: true } },
      { users: { create: true, read: true, update: true, delete: true } },
      { members: { create: true, read: true, update: true, delete: true } },
      { orders: { create: true, read: true, update: true, delete: true } },
      { products: { create: true, read: true, update: true, delete: true } },
      { vendors: { create: true, read: true, update: true, delete: true } },
      { partners: { create: true, read: true, update: true, delete: true } },
      {
        organization: { create: true, read: true, update: true, delete: true },
      },
    ],
  },
  {
    groupName: "Vendors",
    permisions: [
      { groups: { create: true, read: true, update: true, delete: true } },
      { users: { create: true, read: true, update: true, delete: true } },
      { members: { create: true, read: true, update: true, delete: true } },
      { orders: { create: true, read: true, update: true, delete: true } },
      { products: { create: true, read: true, update: true, delete: true } },
      { vendors: { create: true, read: true, update: true, delete: true } },
      { partners: { create: true, read: true, update: true, delete: true } },
      {
        organization: { create: true, read: true, update: true, delete: true },
      },
    ],
  },
];
export const GroupsContext = React.createContext(groupsSampleData);
export const GroupsProvider = GroupsContext.Provider;
export const permisionSections = [
  "groups",
  "Users",
  "members",
  "orders",
  "products",
  "vendors",
  "partners",
  "organization",
];
export const groupsTableColumns = [
  {
    Header: "Group",
    accessor: "groupName",
  },
];
export const groupsTableActions = { delete: true, update: true };
