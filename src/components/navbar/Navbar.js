import React from "react";
import NavOption from "./NavigationOption";
import Grid from "@material-ui/core/Grid";
import { Icon } from "@blueprintjs/core";
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

function Navbar({ toggleNavbar }) {
  return (
    <Grid container className={Styles.sidenav}>
      {/* Logo holder goes here with icon to hide navbar*/}

      <div className={Styles.logoHolder}>
        <h4 className={Styles.logo}>Mitihai</h4>
        <span className={Styles.sidebarCloser} onClick={toggleNavbar}>
          <Icon icon="chevron-left" iconSize={Icon.SIZE_LARGE} />
        </span>
      </div>
      <div className={Styles.linksWrapper}>
        <Link className={Styles.navOption} to="/dashboard">
          <Icon icon="dashboard" iconSize={Icon.SIZE_STANDARD} />
          {` Dashboard`}
        </Link>
        <NavOption
          iconName="group-objects"
          option="Groups"
          route="group"
          actions={{ create: true, read: true }}
        />
        <NavOption
          iconName="people"
          option="Users"
          route="user"
          actions={{ create: true, read: true }}
        />
        <NavOption
          iconName="timeline-events"
          option="Events"
          route="event"
          actions={{ create: true, read: true }}
        />
        <NavOption
          iconName="follower"
          option="Partners"
          route="partner"
          actions={{ create: true, read: true }}
        />
        <Link className={Styles.navOption} to="/members">
          <Icon icon="people" iconSize={Icon.SIZE_STANDARD} />
          {` Members`}
        </Link>

        <NavOption
          iconName="data-lineage"
          option="Categories"
          route="category"
          actions={{ create: true, read: true }}
        />
        <NavOption
          iconName="tag"
          option="Products"
          route="product"
          actions={{ create: true, read: true }}
        />

        <Link className={Styles.navOption} to="/offers">
          <Icon icon="shop" iconSize={Icon.SIZE_STANDARD} />
          {` Offers`}
        </Link>

        <NavOption
          iconName="shopping-cart"
          option="Orders"
          route="order"
          actions={{ create: true, read: true }}
        />
        <NavOption
          iconName="mugshot"
          option="Vendors"
          actions={[
            { label: "Approved Vendors", route: "vendors" },
            { label: "Vendor Requests", route: "vendors/requests" },
          ]}
        />
        <NavOption
          iconName="chart"
          option="Analysis"
          actions={[
            { label: "Sales Analysis", route: "analysis/sales" },
            { label: "Members Analysis", route: "analysis/members" },
            { label: "Events Analysis", route: "analysis/events" },
          ]}
        /> 
        <Link className={Styles.navOption} to="/faqs">
          <Icon icon="help" iconSize={Icon.SIZE_STANDARD} />
          {` FAQs`}
        </Link>
        <Link className={Styles.navOption} to="/organization">
          <Icon icon="layers" iconSize={Icon.SIZE_STANDARD} />
          {` Organization`}
        </Link>
        <UserProfile />
      </div>
    </Grid>
  );
}

export default React.memo(Navbar);
