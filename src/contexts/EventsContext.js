import React from "react";

export const eventsTableColumns = [
  { Header: "Event_Name", accessor: "name" },
  { Header: "Venue", accessor: "venue" },
  { Header: "Time", accessor: "time" },
  { Header: "Date", accessor: "date" },
  { Header: "Confirmations", accessor: "willAttend" },
  { Header: "Invitees", accessor: "toBeNotified" },
  { Header: "Status", accessor: "status" },
];
export const pastEventsTableColumns = [
  { Header: "Event_Name", accessor: "name" },
  { Header: "Attendees_Count", accessor: "attendees" },
  { Header: "Trees_Planted", accessor: "treesPlanted" },
  { Header: "Photos", accessor: "photosCount" },
];

export const pastEventsActions = { eventsActions: true };
export const eventsActions = { delete: "true", update: "true" };

export const eventsSampleData = [
  {
    id: 1,
    name: "Bambika event",
    venue: "Uhuru Gardens",
    time: "12:30",
    date: "2020-12-12",

    activities: [
      { activityName: "Eat" },
      { activityName: "Jump" },
      { activityName: "Plant Trees" },
    ],
    willAttend: 50,
    toBeNotified: "Everyone",
    attendees: 50,
    photosCount: 10,
    treesPlanted: 100,
    status: "Done",
  },
];
export const EventsContext = React.createContext(eventsSampleData);
export const EventsProvider = EventsContext.Provider;
