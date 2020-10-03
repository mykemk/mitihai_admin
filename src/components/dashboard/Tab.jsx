import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Tab = ({ name, className, value, isStockInfo = false }) => {
  return (
    <Grid item xs={6} sm={3} md={3}>
      <Link to={`/${name}`}>
        <div className={`tab ${name}`}>
          <div className={className}>
            <span className="summary">
              {!isStockInfo
                ? name[0].toUpperCase() + name.slice(1)
                : "Stock Alerts"}
              :
            </span>
            <br />
            <span className="values"> {value}</span>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default React.memo(Tab);
