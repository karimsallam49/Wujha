import { DownloadBtns } from "../DownloadButton/DownloadBtns";
import "./HomeWaitingSection.css"
const HomeWaitingSection = () => {
  return (
    <div className="homewaitingContainer position-relative">
      <h1>Home is waiting for</h1>
      <h1>you here</h1>

      <button className="sch-btn">Take A Tour</button>
<DownloadBtns className="MainColor"/>
    </div>
  );
};

export default HomeWaitingSection;
