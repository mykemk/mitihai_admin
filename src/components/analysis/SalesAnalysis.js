import React, { useEffect, useContext, useMemo } from "react";
import Linechart from "../charts/LineChart";
import Doughnut from "../charts/DoughnutChart";
import Grid from "@material-ui/core/Grid";
import { NavigationContext } from "app/MainSection";

import {
  getWeeklySales,
  getCategorySales,
  getAnnualSales,
} from "../../test-data/charts-data";
import OutputTable from "components/tables/OutputTable";
import { topSales } from "contexts/AnalysisContext";

const SalesAnalysis = () => {
  let weeklySales = useMemo(getWeeklySales, []);
  let anualSales = useMemo(getAnnualSales, []);
  let categorySales = useMemo(getCategorySales, []);
  const { setAction, setSection } = useContext(NavigationContext);

  useEffect(() => {
    setSection("Sales");
    setAction("analysis");
  }, [setSection, setAction]);
  return (
    <div className="dashboard-grid">
      <h3 className="sectionTitle">Weekly Sales Trends</h3>
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
            <Doughnut
              labels={categorySales.labels}
              datasets={categorySales.datasets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Linechart
              labels={weeklySales.labels}
              datasets={weeklySales.datasets}
            />
          </Grid>
        </Grid>
        <h3 className="sectionTitle">Annual sales Trends</h3>
        <Grid
          container
          item
          spacing={2}
          direction="row"
          justify="space-around"
          align-items="stretch">
          <Grid item xs={12} md={6}>
            <Linechart
              labels={anualSales.labels}
              datasets={anualSales.datasets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className="centreTitle">Top Sales</h3>
            <OutputTable data={topSales} title="" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(SalesAnalysis);
