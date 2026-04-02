"use client";

import React from "react";
import "./JobListSection.css";

const JobListSection: React.FC = () => {
  return (
    <section className=" joblist-section">
      <div className="container-fluid">
        <div className="joblist-container py-3 px-5 rounded-4 bg-white shadow-sm d-flex flex-column justify-content-between align-items-start">
          
          <div className="joblist-header mb-4 mb-md-0">
            <h1 className="fw-bold MainTextSize">Current Openings</h1>
            <h4 className="text-muted" style={{ maxWidth: "550px" }}>
              Wujha is seeking driven, creative, and talented individuals to join our dynamic business
            </h4>
          </div>

          <div className="joblist-footer w-100 text-md-center m-4">
            <h4>No openings for you?</h4>
            <h5 className="mb-0">
              Please{" "}
             <a
  className="formBtn"
  href="mailto:Info@wujha.com?subject=CV Submission&body=Hello,%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0AThanks"
>
  Submit Your CV
</a>{" "}
              and follow us on{" "}
              <a target="_blank" className="LinkedinBTN" href="https://www.linkedin.com/company/wujha/">
                LinkedIn
              </a>{" "}
              to get notified
            </h5>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JobListSection;
