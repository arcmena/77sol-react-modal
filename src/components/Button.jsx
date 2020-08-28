import React from "react";
import { Button } from "@material-ui/core";

export default ({ className, onClick, label, children }) => {
  return (
    <div className={label ? "label" : ""}>
      <Button variant="contained" className={className} onClick={onClick}>
        {children}
      </Button>
      {label ? <label>{label}</label> : null}
    </div>
  );
};
