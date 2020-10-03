import React, { useEffect, useContext, useMemo } from "react";
import BarChart from "../charts/BarChart";
import { getEventDetails, getTreeDetails } from "../../test-data/charts-data";
import Grid from "@material-ui/core/Grid";
import { NavigationContext } from "app/MainSection";
import OutputTable from "components/tables/OutputTable";
import { topEvents, systemTotals } from "contexts/AnalysisContext";

const EventsAnalysis = () => {
  let eventTrends = useMemo(getEventDetails, []);
  let treeTrends = useMemo(getTreeDetails, []);
  const { setAction, setSection } = useContext(NavigationContext);

  useEffect(() => {
    setSection("Events");
    setAction("analysis");
  }, [setSection, setAction]);
  return (
    <div className="dashboard-grid">
      <h3 className="sectionTitle">Events and Turnout</h3>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="space-around"
        align-items="stretch">
        <Grid
          container
          item
          spacing={2}
          direction="row"
          justify="space-around"
          align-items="stretch">
          <Grid item xs={12} md={6}>
            <h3 className="centreTitle">Events Turnout</h3>
            <OutputTable data={topEvents} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart
              labels={eventTrends.labels}
              datasets={eventTrends.datasets}
            />
          </Grid>
        </Grid>
        <h3 className="sectionTitle">Trees and totals</h3>
        <Grid
          container
          item
          spacing={2}
          direction="row"
          justify="space-around"
          align-items="stretch">
          <Grid item xs={12} md={6}>
            <BarChart
              labels={treeTrends.labels}
              datasets={treeTrends.datasets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className="centreTitle">System totals</h3>
            <OutputTable data={systemTotals} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(EventsAnalysis);
