import createUpdateForm from "utils/component-utils/createUpdateForm";
import createRegisterForm from "utils/component-utils/createRegisterForm";
import createManagePage from "utils/component-utils/createManagePage";
import { eventsSampleData } from "contexts/EventsContext";

import EventForm from "./EventForm";
import EventTable from "./EventsTable";
import PasteventUpdate from "./EventUpdate";
import PastEventsTable from "./PastEventsTable";

export const EventRegister = createRegisterForm(EventForm, "Event", "events");
export const EventUpdate = createUpdateForm(
  EventForm,
  "Event",
  "events",
  "",
  eventsSampleData[0],
);
export const EventsTable = createManagePage(
  EventTable,
  "Event",
  true,
  false,
  false,
  true,
);
export const PastEventUpdate = createUpdateForm(PasteventUpdate, "Event");
export const PastEventsManage = createManagePage(PastEventsTable, "Event");
