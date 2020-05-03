import React from "react";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

function CopyrightFooter() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://cerneckis.com/">
        Antanas Cerneckis
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div style={{ position: "absolute", left: 0, bottom: 0, right: 0 }}>
      {/* <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Some placeholder text
      </Typography> */}
      <CopyrightFooter />
    </div>
  );
}
