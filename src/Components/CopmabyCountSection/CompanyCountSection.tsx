
import"./CompanyStule.css"
const CompanyCountsSection = () => {
  return (
    <section className="section-space-top company-counts section-space-bottom">
      <div className="container">
        <div className="row align-items-center justify-content-center counter">
          <div className="col-sm-4 company-counts-box-main" data-aos="fade-right">
            <div className="company-counts-box d-flex align-items-center">
              <div className="icons">
                <img src="https://sobharealty.com/sites/default/files/2024-07/10%25.svg" alt="new logo" loading="lazy" />
              </div>
              <div className="x-devider"></div>
              <div className="d-flex row col">
                <h2 className="company-count">
                  ~<span className="count" data-count="8">8</span>Mn
                </h2>
                <span className="company-discribe">Square Feet of Land Area Developed</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 company-counts-box-main" data-aos="fade-right">
            <div className="company-counts-box d-flex align-items-center">
              <div className="icons">
                <img src="https://sobharealty.com/sites/default/files/2024-07/3000.svg" alt="logo" loading="lazy" />
              </div>
              <div className="x-devider"></div>
              <div className="d-flex row col">
                <h2 className="company-count">
                  ~<span className="count" data-count="3000">3000</span>
                </h2>
                <span className="company-discribe">Employees as of 2024</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 company-counts-box-main" data-aos="fade-right">
            <div className="company-counts-box d-flex align-items-center">
              <div className="icons">
                <img src="https://sobharealty.com/sites/default/files/2024-07/6mn.svg" alt="logo" loading="lazy" />
              </div>
              <div className="x-devider"></div>
              <div className="d-flex row col">
                <h2 className="company-count">
                  ~<span className="count" data-count="10">10</span>%
                </h2>
                <span className="company-discribe">Market Share in Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCountsSection;
