import { FC } from "react";
import Footer from "../Footer";
import { LayoutProps } from "./index.d";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-sm relative">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
