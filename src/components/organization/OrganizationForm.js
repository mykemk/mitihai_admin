import React from "react";
import { orgUpdate } from "../organization/org-styles.module.css";
import createUpdateForm from "utils/component-utils/createUpdateForm";
import {
  Longtext,
  Shorttext,
  Phonenumber,
  Dateinput,
  LongDescription,
  Postalcode,
  Linkinput,
  Email,
  Fileinput,
} from "../form-components";
const OrganizationUpdate = () => {
  return (
    <fieldset className={orgUpdate}>
      <Longtext
        label="Organization Name"
        placeholder="Organization's name"
        name="orgName"
      />
      <Fileinput label="Logo" name="logo" />
      <Shorttext
        label="Country of Location"
        name="country"
        placeholder="e.g Kenya"
      />
      <Postalcode
        label="Postal Address"
        name="boxNumber"
        placeholder="e.g 132"
      />
      <Postalcode
        label="Postal Code"
        name="postalCode"
        placeholder="e.g 60601"
      />
      <Shorttext label="Town" name="town" placeholder="e.g Thika" />
      <Email
        label="Email"
        name="email"
        placeholder="e.g support@woodworldgroup.com"
      />
      <Phonenumber
        label="Phone Number"
        name="phoneNumber"
        placeholder="+2547...."
      />
      <Linkinput
        label="Facebook Account"
        name="facebook"
        placeholder="e.g https://www.facebook.com/our_account"
      />
      <Linkinput
        label="Twitter Account"
        name="twitter"
        placeholder="e.g https://www.twitter.com/our_account"
      />
      <Linkinput
        label="Instagram Account"
        name="instagram"
        placeholder="e.g https://www.instagram.com/our_account"
      />
      <Linkinput
        label="LinkedIn Profile"
        name="linkedIn"
        placeholder="e.g https://www.linkedIn.com/our_account"
      />
      <Longtext
        label="Founders(s)"
        name="founders"
        placeholder="e.g Bill Watson and John Doe"
      />
      <Dateinput label="Started On " name="startedOn" />
      <LongDescription
        label="Vision"
        name="vision"
        placeholder="What is your vision...?"
      />
      <LongDescription
        label="Mision"
        name="mision"
        placeholder="What is your mision...?"
      />
    </fieldset>
  );
};

export default createUpdateForm(OrganizationUpdate, "Organization", true);
