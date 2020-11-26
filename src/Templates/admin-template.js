import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "../Pages/Admin/NavbarAdmin";
import {cookieService} from "../Services/"

const AdminLayout = props => {
    return (
        <Fragment>
            <NavbarAdmin/>
            {props.children}
        </Fragment>
    )
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (cookieService.get("tentkAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/loginAdmin" />;
        }
      }}
    />
  );
}
