interface TextOnlySectionProps {
  years: number;
  description: string;
}
import "../../index.css"
export default function TextOnlySection({
  years,
  description,
}: TextOnlySectionProps) {
  return (
    <div
      className="container d-flex flex-column flex-lg-row text-only-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        padding: "3rem 2rem",
        height: "60vh",
        width: "100%",
      }}
    >

      <div className="d-flex justify-content-center align-items-center Yearsofexp"> 

      <h1
        className=" d-flex g-1 align-items-center abouttitle"
        style={{ gap:"5px" }}
      >
        <span className="m-1 about-span MainColor">
          <span>{years}</span>
        </span>

        <span className="experinceyear" >
          + years of Experience
        </span>
      </h1>
      </div>

      <p
        className="BlackColor"
        style={{
          flex: "1 1 0%",
          lineHeight: 1.6,
          margin: "0px",
          maxWidth: "700px",
          fontSize: "clamp(0.9rem, 0.6rem + 1vw, 1.2rem)",
        }}
      >
        {description}
      </p>
    </div>
  );
}
