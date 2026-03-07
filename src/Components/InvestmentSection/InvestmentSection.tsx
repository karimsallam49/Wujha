import "./InvestmentSection.css";
const InvestmentSection = () => {
  return (
    <div className="p-0 investment-contaniner container-fluid">
      <div className="forms-section-investment">
        <div className="investment-head"></div>

        <div className="container">
          <div className="row">
            {/* Left Form */}
            <div className="form-box left-box col-md-6">
              <h2 className="form-title">SIGN UP</h2>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    id="company"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <select className="mb-3 form-select">
                      <option>UAE (+971)</option>
                      <option>KSA (+966)</option>
                      <option>EG (+20)</option>
                    </select>
                  </div>

                  <div className="col-md-8">
                    <input
                      type="text"
                      className="mb-3 form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>

                <button type="submit" className="submit-btn w-100">
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Right Box */}
            <div className="form-box right-box col-md-5">
              <h2 className="form-title">DOWNLOAD ASSETS</h2>

              <ul className="assets-list">
                <li>Financial Information (1H25 Financial statements)</li>
                <li>Financial Information (FY24 Financial statements)</li>
                <li>Financial Information (1H24 Financial statements)</li>
                <li>Financial Information (FY23 Financial statements)</li>
                <li>Other Publications</li>
                <li>Company Announcement</li>
              </ul>

              <button className="submit-btn w-100">
                DOWNLOAD ALL ASSETS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;
