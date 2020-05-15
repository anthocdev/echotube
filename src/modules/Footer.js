import React from "react";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
/* Simple Footer with copyright notice */
function CopyrightFooter() {
  return (
    <Typography variant="body2" style={{ color: "#ffffff" }} align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://cerneckis.com/">
        Antanas Cerneckis <br />
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(153, 50, 204, 0.6)",
      }}
    >
      <CopyrightFooter />
    </div>
  );
}
