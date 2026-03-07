
import "./DownloadBtn.css"
type DownloadBtnsProps = {
  className?: string;
};

export const DownloadBtns = ({
  className = "MainColor",
}: DownloadBtnsProps) => {
  return (
   
      <div className="gap-3 bottm-poistion btns z-1 w-100 position-absolute d-flex justify-content-center p-3">
        <button className={`px-4 py-2 btn text-light SheetBtn ${className}`}>
          Download Fact Sheet
        </button>

        <button className="px-4 py-2 btn DownloadBTn text-light">
          Download Brochure
        </button>
      </div>
  )
}
