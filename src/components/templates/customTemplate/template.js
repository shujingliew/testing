import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const Template = ({ document }) => (
  <div className="container" style={{background: "blue"}}>
    <h1>CERTIFICATE OF COMPLETION</h1>
    <h2>{document.particpantName}</h2>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
