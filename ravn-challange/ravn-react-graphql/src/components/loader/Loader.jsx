import React from "react";

import "./Loader.css";

const Loader = ({ error }) => {
  return !error ? (
    <section className="section-loader d-flex-row">
      <div className="loader-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className="h2-text-low-emphasis">Loading</h2>
    </section>
  ) : (
    <section className="section-loader d-flex-row">
      <h2 className="h2-text-high-emphasis margin-16">Failed to Load Data</h2>
    </section>
  );
};

export default Loader;
