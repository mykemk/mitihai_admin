import React, { useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import EventChart from "components/dashboard/EventChart.jsx";
import Tabs from "./TabsContainer.jsx";
import DashboardChart from "./DashboardChart.jsx";
import { NavigationContext } from "app/MainSection";

const Dashboard = () => {
  const { setAction, setSection } = useContext(NavigationContext);
  useEffect(() => {
    setSection("Dashboard");
    setAction("");
  }, [setSection, setAction]);
  return (
    <div className="dashboard-grid">
      <Grid
        container
        spacing={3}
        direction="column"
        justify="space-evenly"
        align-items="stretch">
        <h2 className="sectionTitle">Today</h2>
        <Tabs />
        <Grid
          container
          item
          spacing={2}
          direction="row"
          justify="space-evenly"
          align-items="stretch">
          <Grid item xs={12} sm={6} md={6}>
            <DashboardChart />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <EventChart />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(Dashboard);
