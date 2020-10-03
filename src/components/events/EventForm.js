import React from "react";
import {
  Shorttext,
  Longtext,
  Dateinput,
  Select,
  Timeinput,
  Listinput,
} from "../form-components";
import Grid from "@material-ui/core/Grid";
const EventForm = () => {
  return (
    <>
      <Grid container direction="row" spacing={2} justify="space-evenly">
        <Grid item xs={12} md={6}>
          <Shorttext name="name" label="Event Name" placeholder="Event Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Longtext
            label="Venue"
            name="venue"
            placeholder="e.g Uhuru Garderns"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Dateinput label="Event Date" name="date" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Timeinput label="Starting Time" name="time" />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          name="toBeNotified"
          label="Invitees"
          options={["Everyone", "Only Vendors", "Platinum members", "None"]}
          style={{ marginTop: "2%" }}
        />
      </Grid>
      <Listinput
        label="Event activities"
        name="activities"
        className="eventActivities"
        itemLabel="activityName"
        placeholder="Mention the activity here..."
      />
    </>
  );
};
export default EventForm;
