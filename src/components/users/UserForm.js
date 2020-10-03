import React from "react";
import {
  Shorttext,
  Phonenumber,
  Email,
  Select,
  Passwordinput,
  Idnumber,
} from "../form-components";
import Grid from "@material-ui/core/Grid";

const Userform = () => {
  return (
    <>
      <Shorttext
        className="columnHalf"
        label="First Name"
        placeholder="First Name"
        name="firstName"
      />
      <Shorttext
        className="columnHalf"
        label="Last Name"
        name="lastName"
        placeholder="Second Name"
      />
      <Idnumber
        label="Id Number"
        placeholder="Id Number"
        name="idNumber"
        className="columnHalf"
      />
      <Phonenumber
        label="Phone Number"
        name="phoneNumber"
        placeholder="Phone Number"
        className="columnHalf"
      />
      <Email
        label="Email Address"
        className="columnHalf"
        name="email"
        placeholder="username@example.com"
      />
      <Select
        label="Gender"
        name="gender"
        className="columnHalf"
        options={["Male", "Female", "Other"]}
      />
      <Select
        label="Country"
        name="country"
        className="columnHalf"
        options={["Kenya", "China"]}
      />
      <Select
        label="Position"
        name="position"
        className="columnHalf"
        options={["Admin", "Manager", "Sales Person", "Store Kepper"]}
      />
      <Select
        className="columnHalf"
        label="User Group"
        name="userGroup"
        options={["User", "Admin", "Sales", "Manager"]}
      />
      <Shorttext
        // style={{ float: "none" }}
        className="columnHalf"
        name="userName"
        placeholder="User Name"
        label="UserName"
      />
      <Passwordinput
        style={{ float: "none" }}
        className="columnHalf"
        label="Password"
        name="password"
        placeholder="Password"
      />
      <Grid item xs={12} md={6}></Grid>
    </>
  );
};

export default Userform;
