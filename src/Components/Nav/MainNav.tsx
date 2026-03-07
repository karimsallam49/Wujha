import { useEffect, useRef, useState } from "react";
import "./MainNavStyle.css";
import { Link, useLocation } from "react-router-dom";
import { MenuButton } from "../MenuButton/MenuButton";
import LogoPic from "../../assets/Images/wujha logo-DFqlX04L.png"
type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
   setSidebarOpen:()=>void 
 IsSideOpen:boolean
};

export default function MainNav({ scrollRef, setSidebarOpen, IsSideOpen }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    
    const el = scrollRef?.current;
    if (!el) return;

    const onScroll = () => {
      setIsScrolled(el.scrollTop > 50);
    };

    el.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, [scrollRef, location.pathname, IsSideOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
        setOpenAcc(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  const toggleAcc = (key: string) => {
    setOpenAcc(prev => (prev === key ? null : key));
  };

  return (
    <div
      className={`appheader d-flex justify-content-between align-items-center overflow-visible ${
        isScrolled || IsSideOpen ? "scrolled" : ""
      }`}
    >
      <div className="logo logoscrolled">
        <Link to="/" className="w-100">
          <img
            alt="Wujha Logo"
            className="logo-ig w-100"
            src={LogoPic}
            style={{ objectFit: "cover", height: "50px" }}
          />
        </Link>
      </div>

      <nav className="overflow-visible nav-links w-100">
        <ul className="overflow-visible align-items-center ">
          <div className="logo" style={{maxWidth:"100px"}}>
       <Link to="/" className="w-100">
          <img
            alt="Wujha Logo"
            className="logo-ig w-100"
            src={LogoPic}
            style={{ objectFit: "cover", height: "50px" }}
          />
        </Link>
      </div>
          <li>
            <Link to="/Ourstory">Our Story</Link>
          </li>

          <li
            ref={dropdownRef}
            className={`overflow-visible dropdown ${
              openDropdown ? "show" : ""
            }`}
          >
            <span
              className="drop-toggle"
              onClick={() => setOpenDropdown(prev => !prev)}
            >
              Our Developments ▾
            </span>

            <div
              className={`p-3 dropdown-menu ${
                openDropdown ? "show" : ""
              }`}
              style={{ minWidth: "260px" }}
            >
              <div className="accordion accordion-flush">

                <div className="mb-2 bg-transparent border-0 accordion-item" style={{background:"none"}}>
                  <h2 className="customaccheader accordion-header">
                    <button
                      className="accordion-button"
                      onClick={() => toggleAcc("res")}
                    >
                      Residential
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      openAcc === "res" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <Link
                        to="/Uptown"
                        className="mb-2 d-block accordion-link"
                        onClick={() => setOpenDropdown(false)}
                        style={{ fontSize: "1.1rem" }}
                      >
                        UPTOWN Muscat
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mb-2 bg-transparent border-0 accordion-item bg-light" style={{background:"none"}}>
                  <h2 className="customaccheader accordion-header">
                    <button
                      className="accordion-button"
                      onClick={() => toggleAcc("admin")}
                    >
                      Commerical
                    </button>
                  </h2>
                 <div
  className={`accordion-collapse collapse ${
    openAcc === "admin" ? "show" : ""
  }`}
>
  <div className="accordion-body custom-accordion-body">
    <Link
      to="/Central7"
      className="accordion-link"
      onClick={() => setOpenDropdown(false)}
    >
      Central 7
    </Link>

    <Link
      to="/"
      className="accordion-link"
      onClick={() => setOpenDropdown(false)}
    >
      Laha Mall
    </Link>
  </div>
</div>

                </div>

                {/* <div className="mb-2 bg-transparent border-0 accordion-item">
                  <h2 className="customaccheader accordion-header">
                    <button
                      className="accordion-button"
                      onClick={() => toggleAcc("com")}
                    >
                      Commercial
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      openAcc === "com" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <Link
                        to="/"
                        className="mb-2 d-block"
                        onClick={() => setOpenDropdown(false)}
                        style={{ fontSize: "1.1rem" }}
                      >
                        Commercial Page
                      </Link>
                    </div>
                  </div>
                </div> */}

                <li className="customaccheade">
                  <Link
                    to="/AllProjects"
                    className="d-block"
                    onClick={() => setOpenDropdown(false)}
                    style={{ fontSize: "1.1rem", color: "black" }}
                  >
                    All Projects
                  </Link>
                </li>

              </div>
            </div>
          </li>

          {/* <li><Link to="/Investment">Investment Opportunities</Link></li> */}
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/MediaCenter">News & Media</Link></li>
          <li><Link to="/Careers">Careers</Link></li>
          <li><Link to="/FAQPage">FAQs</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </nav>

      <div onClick={setSidebarOpen}>
<MenuButton isOpen={IsSideOpen}/>
</div>
    </div>
  );
}
