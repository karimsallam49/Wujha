import { Outlet, useLocation } from "react-router-dom";
import MainNav from "../Nav/MainNav";
import { useEffect, useRef, useState } from "react";
import "./AppLayouStyle.css";
import MobileSidebar from "../SideBare/SideBare";
import { FooterSection } from "../Footer/FooterSection";
import ContactList from "../ContactList/ContactList";

const AppLayout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const hidefooter = location.pathname === "/ContactUs";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (scrollRef.current) {
      console.log("scrolled");
      
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname,scrollRef.current]); 

  return (
    <div className="app-layout">
      <ContactList />
      <MobileSidebar closeSideBare={toggleSidebar} IsOpen={sidebarOpen} />
      <MainNav
        scrollRef={scrollRef}
        
        IsSideOpen={sidebarOpen}
        setSidebarOpen={toggleSidebar}
      />

      <div
        className="LayoutSyle"
        ref={scrollRef}
          key={location.pathname}
        style={{
          height: "100vh",
          width: "100%",
          overflow: "scroll",
          paddingBottom: "0",
        }}
      >
        <Outlet context={{ scrollRef }} />

        {!hidefooter && <FooterSection />}
      </div>
    </div>
  );
};

export default AppLayout;
