import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SideBare.css"
type Props = {
  IsOpen: boolean;
  closeSideBare: () => void;
};

export default function MobileSidebar({ IsOpen, closeSideBare }: Props) {
  const [openMain, setOpenMain] = useState(true);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleSub = (key: string) => {
    setOpenSub(prev => (prev === key ? null : key));
  };

  useEffect(() => {
    if (!IsOpen) {
      setOpenMain(false);
      setOpenSub(null);
    }
  }, [IsOpen]);

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{
        x: IsOpen ? "0%" : "-100%",
        opacity: IsOpen ? 1 : 0,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="sideBarContainer"
    >
      <div className="sidebarItemContainer">
        <ul
          className={`main-menu mobile-menu ${
            IsOpen ? "mobile-menu-active-li" : ""
          }`}
        >
          <li onClick={closeSideBare}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={closeSideBare}>
            <Link to="/Ourstory">Our Story</Link>
          </li>

          <div className="sidebar-accordion accordion accordion-flush">
            <div className="accordion-item">
              <h2 className="accordion-header d-flex align-items-center  gap-2">
                <button
                style={{paddingBottom:"5px"}}
                  className="accordion-button"
                  aria-expanded={openMain}
                  onClick={() => setOpenMain(prev => !prev)}
                >
                  Our Developments
                </button>
                 <span
                 className="text-light mb-3"
    style={{
      display: "inline-block",
      transition: "transform 0.3s ease",
      transform: openMain ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    ▼
  </span>
              </h2>

              <motion.div
                initial={false}
                animate={{
                  height: openMain ? "auto" : 0,
                  opacity: openMain ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`accordion-collapse collapse ${
                  openMain ? "show" : ""
                }`}
                style={{ overflow: "hidden" }}
              >
                <div className="accordion-body">
                  <div className="accordion accordion-flush">

                    <div className="mb-3 accordion-item">
                      <h6 className="customaccheader accordion-header">
                        <button
                          className={`accordion-button MainColor ${
                            openSub === "res" ? "" : "collapsed"
                          }`}
                          aria-expanded={openSub === "res"}
                          onClick={() => toggleSub("res")}
                        >
                          Residential
                        </button>
                      </h6>

                      <motion.div
                        initial={false}
                        animate={{
                          height: openSub === "res" ? "auto" : 0,
                          opacity: openSub === "res" ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`accordion-collapse collapse ${
                          openSub === "res" ? "show" : ""
                        }`}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-body">
                          <Link
                            to="/Uptown"
                            style={{ fontSize: "1.1rem" }}
                            onClick={closeSideBare}
                          >
                            UPTOWN Muscat
                          </Link>
                        </div>
                      </motion.div>
                    </div>

                    <div className="mb-3 accordion-item">
                      <h6 className="customaccheader accordion-header">
                        <button
                          className={`accordion-button ${
                            openSub === "admin" ? "" : "collapsed"
                          }`}
                          aria-expanded={openSub === "admin"}
                          onClick={() => toggleSub("admin")}
                        >
                          Commerical
                        </button>
                      </h6>

                      <motion.div
                        initial={false}
                        animate={{
                          height: openSub === "admin" ? "auto" : 0,
                          opacity: openSub === "admin" ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`accordion-collapse collapse ${
                          openSub === "admin" ? "show" : ""
                        }`}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-body">
                          <Link
                            to="/Central7"
                            style={{ fontSize: "1.1rem" }}
                            onClick={closeSideBare}
                          >
                            Central 7
                          </Link>
                          <Link
                            to="/"
                            style={{ fontSize: "1.1rem" }}
                            onClick={closeSideBare}
                          >
                            Laha Mall
                          </Link>
                        </div>
                      </motion.div>
                    </div>

                 

                    <li className="customaccheader" onClick={closeSideBare}>
                      <Link to="/AllProjects">All Projects</Link>
                    </li>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* <li onClick={closeSideBare}>
            <Link to="/Investment">Investment Opportunities</Link>
          </li> */}
          <li onClick={closeSideBare}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={closeSideBare}>
            <Link to="/MediaCenter">News & Media</Link>
          </li>
          <li onClick={closeSideBare}>
            <Link to="/Careers">Careers</Link>
          </li>
          <li onClick={closeSideBare}>
            <Link to="/FAQPage">FAQs</Link>
          </li>
          <li onClick={closeSideBare}>
            <Link to="/ContactUs">Contact Us</Link>
          </li>

        </ul>
      </div>
    </motion.div>
  );
}
