import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

import React from "react";

export default function NavSidebarPro() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          Home
          <Link to="/" />
        </MenuItem>
        <SubMenu title="About">
          <MenuItem>
            About App
            <Link to="/about_app" />
          </MenuItem>
          <MenuItem>
            About Author
            <Link to="/about_author" />
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
