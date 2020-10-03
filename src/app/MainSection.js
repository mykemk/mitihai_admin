import React, { useState } from "react";
import Dashboard from "components/dashboard";
import {
  EventRegister,
  EventsTable,
  EventUpdate,
  PastEventUpdate,
  PastEventsManage,
} from "../components/events";
import { FaqsTable, FaqRegister, FaqUpdate } from "components/faqs";
import { GroupForm, GroupsTable, GroupUpdate } from "components/Groups";
import { MembersTable } from "components/members";
import { OffersTable, OfferForm, OfferUpdate } from "components/offers";
import { OrdersTable, OrderForm, OrderUpdate } from "components/orders";
import OrganizationForm from "components/organization/OrganizationForm";
import { PartnerForm, PartnersTable, PartnerUpdate } from "components/partners";
import {
  CategoriesTable,
  CategoryForm,
  CategoryUpdate,
} from "components/product_categories";
import {
  ProductForm,
  ProductsTable,
  StockAlerts,
  StockUpdate,
  ProductUpdate,
} from "components/products";
import { UserForm, UsersTable, UserUpdate } from "components/users";
import { VendorsTable, VendorRequests } from "components/vendors";
import { Route, Redirect } from "react-router-dom";
import {
  Salesanalysis,
  Memberanalysis,
  Eventsanalysis,
} from "components/analysis";

import EventGallery from "components/events/EventGallery";
import OverlayContent from "components/ui-utils/OverlayContent";
import Messages from "components/state-components/Emails";
import Breadcrumbs from "components/ui-utils/Breadcrumbs";
import LogOut from "components/auth/LogOut";
import CurrentUserState from "components/ui-utils/CurrentUserState";

export const NavigationContext = React.createContext(null);
const NavigationProvider = NavigationContext.Provider;

function MainSection({ isNavbarShown, fullWidthStyle }) {
  const [section, setSection] = useState("Dashboard");
  const [action, setAction] = useState("");
  return (
    <div className="main" style={isNavbarShown ? null : fullWidthStyle}>
      <NavigationProvider
        value={{
          section: section,
          action: action,
          setSection: setSection,
          setAction: setAction,
        }}>
        <Breadcrumbs />
        <CurrentUserState />
        <div className="content-section">
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/logout">
            <LogOut />
          </Route>
          <Route path="/notifications">
            <Redirect to="/stocks" />
          </Route>
          <Route path="/requests">
            <Redirect to="/vendors/requests" />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/feedback">
            <Messages />
          </Route>

          <Route exact path="/groups">
            <GroupsTable />
          </Route>
          <Route path="/groups/create">
            <GroupForm />
          </Route>
          <Route path="/groups/update">
            <GroupUpdate />
          </Route>

          <Route exact path="/users">
            <UsersTable />
          </Route>
          <Route path="/users/create">
            <UserForm />
          </Route>
          <Route path="/users/update">
            <UserUpdate />
          </Route>

          <Route exact path="/events">
            <EventsTable />
          </Route>
          <Route path="/events/create">
            <EventRegister />
          </Route>
          <Route path="/events/update">
            <EventUpdate />
          </Route>

          <Route exact path="/pastevents">
            <PastEventsManage />
          </Route>
          <Route exact path="/pastevents/photos">
            <EventGallery />
          </Route>
          <Route path="/pastevents/update">
            <PastEventUpdate />
          </Route>

          <Route exact path="/partners">
            <PartnersTable />
          </Route>
          <Route path="/partners/create">
            <PartnerForm />
          </Route>
          <Route path="/partners/update">
            <PartnerUpdate />
          </Route>

          <Route exact path="/members">
            <MembersTable />
          </Route>

          <Route path="/categorys/create">
            <CategoryForm />
          </Route>
          <Route exact path="/categorys">
            <CategoriesTable />
          </Route>
          <Route path="/categorys/update">
            <CategoryUpdate />
          </Route>

          <Route exact path="/products">
            <ProductsTable />
          </Route>
          <Route path="/products/create">
            <ProductForm />
          </Route>
          <Route path="/products/update">
            <ProductUpdate />
          </Route>

          <Route exact path="/stocks">
            <StockAlerts />
          </Route>
          <Route path="/stocks/create">
            <OverlayContent>
              <StockUpdate />
            </OverlayContent>
          </Route>

          <Route exact path="/offers">
            <OffersTable />
          </Route>
          <Route path="/offers/create">
            <OverlayContent>
              <OfferForm />
            </OverlayContent>
          </Route>
          <Route path="/offers/update">
            <OverlayContent>
              <OfferUpdate />
            </OverlayContent>
          </Route>

          <Route exact path="/orders">
            <OrdersTable />
          </Route>
          <Route path="/orders/create">
            <OrderForm />
          </Route>
          <Route path="/orders/update">
            <OrderUpdate />
          </Route>

          <Route path="/vendors/requests">
            <VendorRequests />
          </Route>
          <Route path="/vendors">
            <VendorsTable />
          </Route>

          <Route path="/analysis/sales">
            <Salesanalysis />
          </Route>
          <Route path="/analysis/members">
            <Memberanalysis />
          </Route>
          <Route path="/analysis/events">
            <Eventsanalysis />
          </Route>

          <Route exact path="/faqs">
            <FaqsTable />
          </Route>
          <Route path="/faqs/create">
            <OverlayContent>
              <FaqRegister />
            </OverlayContent>
          </Route>
          <Route exact path="/faqs/update">
            <OverlayContent>
              <FaqUpdate />
            </OverlayContent>
          </Route>

          <Route path="/organization">
            <OrganizationForm />
          </Route>
        </div>
      </NavigationProvider>
    </div>
  );
}
export default React.memo(MainSection);
