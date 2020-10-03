import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";

const EventSearch = () => {
  let today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const event = { eventName: "Bambika", venue: "Roysambu", time: "11:00 AM" };
  return (
    <div className="eventDisplay">
      <Paper elevation={4} variant="outlined" square>
        <h3 className="tabHeading">Upcoming Event</h3>
        <input
          className="tabSearch"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <td>Event Details</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event Name</td>
              <td>{event.eventName}</td>
            </tr>
            <tr>
              <td>Venue</td>
              <td>{event.venue}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{event.time}</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </div>
  );
};

export default React.memo(EventSearch);
