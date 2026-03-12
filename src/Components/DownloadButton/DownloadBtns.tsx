
import "./DownloadBtn.css"
type DownloadBtnsProps = {
  className?: string;
  project?: "uptown" | "central7";
};
import UptownPDF from "../../assets/FctSht/Fctsht-UTM.pdf"
import CentralPDF from "../../assets/FctSht/Fctsht-C7.pdf"
export const DownloadBtns = ({
  className = "MainColor",
  project = "uptown",
}: DownloadBtnsProps) => {
  const downloadFactSheet = () => {
    const file =
      project === "uptown"
        ? UptownPDF
        : CentralPDF;

    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "factsheet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
   
      <div className="gap-3 bottm-poistion btns  w-100 position-absolute d-flex justify-content-center p-3" style={{zIndex:"1000"}}>
        <button onClick={downloadFactSheet} className={`px-4 py-2 btn text-light SheetBtn ${className}`}>
          Download Fact Sheet
        </button>

        <button className="px-4 py-2 btn DownloadBTn text-light">
          Download Brochure
        </button>
      </div>
  )
}
