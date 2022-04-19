import React from "react";
import './SubHeader.scss';

export default function Subheader(props) {
    return (
      <div className="sub-header">
          <h3>{props.title}</h3>
      </div>
    );
  }