import React, { useEffect, useContext, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import { NavigationContext } from "app/MainSection";

import {
  getMembershipTrends,
  getMemberCategories,
  getPartnershipTrends,
} from "../../test-data/charts-data";
import OutputTable from "components/tables/OutputTable";
import { countriesData } from "contexts/AnalysisContext";

const MemberAnalysis = () => {
  let membershipTrends = useMemo(getMembershipTrends, []);
  let memberCategories = useMemo(getMemberCategories, []);
  let partnerTrends = useMemo(getPartnershipTrends, []);
  const { setAction, setSection } = useContext(NavigationContext);

  useEffect(() => {
    setSection("Membership");
    setAction("analysis");
  }, [setSection, setAction]);

  return (
    <div className="dashboard-grid">
      <h3 className="sectionTitle">Members and Partners</h3>
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
            <PieChart
              labels={memberCategories.labels}
              datasets={memberCategories.datasets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart
              labels={membershipTrends.labels}
              datasets={membershipTrends.datasets}
            />
          </Grid>
        </Grid>
        <h3 className="sectionTitle">Partners</h3>
        <Grid
          container
          item
          spacing={2}
          direction="row"
          justify="space-around"
          align-items="stretch">
          <Grid item xs={12} md={6}>
            <BarChart
              labels={partnerTrends.labels}
              datasets={partnerTrends.datasets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className="centreTitle">Members per country</h3>
            <OutputTable data={countriesData} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default React.memo(MemberAnalysis);
