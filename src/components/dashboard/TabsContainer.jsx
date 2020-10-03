import React from "react";
import Tab from "./Tab";
import Grid from "@material-ui/core/Grid";

const Tabs = () => {
  const summary = {
    orders: 50,
    messages: 10,
    members: 100,
    stockAlerts: 10,
    vendorRequests: 6,
    partners: 3,
    offers: 0,
    vendors: 6,
  };
  return (
    <Grid
      container
      item
      spacing={2}
      direction="row"
      justify="space-around"
      align-items="stretch">
      <Tab name="orders" className="orderDetails" value={summary.orders} />
      <Tab
        name="messages"
        className="notificationDetails"
        value={summary.messages}
      />
      <Tab name="members" className="messageDetails" value={summary.members} />
      <Tab
        name="notifications"
        className="memberDetails"
        value={summary.stockAlerts}
        isStockInfo="true"
      />
      <Tab
        name="requests"
        className="requestDetails"
        value={summary.vendorRequests}
      />
      <Tab
        name="partners"
        className="partnerDetails"
        value={summary.partners}
      />
      <Tab name="offers" className="offerDetails" value={summary.offers} />
      <Tab name="vendors" className="feedbackDetails" value={summary.vendors} />
    </Grid>
  );
};

export default React.memo(Tabs);
