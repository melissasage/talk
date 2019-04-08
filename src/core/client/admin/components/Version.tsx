import React, { StatelessComponent } from "react";

import { Typography } from "talk-ui/components";

import styles from "./Version.css";

const Version: StatelessComponent = () => {
  return (
    <Typography className={styles.version} variant="detail">
      {process.env.TALK_VERSION ? `v${process.env.TALK_VERSION}` : "Unknown"}
    </Typography>
  );
};

export default Version;