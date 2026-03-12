import { FaMapMarkerAlt } from "react-icons/fa";
import "./PhoneContactInfo.css";

const PhoneContactInfo = () => {
  return (
    <div className="call-popup-1">
      <h3 className="fw-bold mb-4 fs-2">Reach us easily at</h3>

      <div className="location-card">
        <h5 className="location-title">
            <FaMapMarkerAlt className="me-2" />
          Muscat, Oman
        </h5>
        <p className="mb-0">
          Office no. 11, Building No. 2870, Way No. 2333,  
          Madinat Al Sultan Qaboos. P.O. Box 407,  
          P.C. 133 Al Khuwair, Muscat, Sultanate of Oman.
        </p>
        <div className="contact-details">
          <p className="d-flex align-items-center mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M10.0002 6.45301L19.1287 0.588728C18.7617 0.313452 18.3161 0.163228 17.8573 0.160156H2.14301C1.68425 0.163228 1.23859 0.313452 0.871582 0.588728L10.0002 6.45301Z"
                  fill="white"
                />
                <path
                  d="M10.3857 7.90299L10.2643 7.96013H10.2071C10.1414 7.98951 10.0715 8.00878 10 8.01727C9.94071 8.02474 9.88072 8.02474 9.82143 8.01727H9.76429L9.64286 7.96013L0.0714285 1.77441C0.0256986 1.94694 0.00170336 2.12451 0 2.30299V12.303C0 12.8713 0.225765 13.4164 0.627628 13.8182C1.02949 14.2201 1.57454 14.4458 2.14286 14.4458H17.8571C18.4255 14.4458 18.9705 14.2201 19.3724 13.8182C19.7742 13.4164 20 12.8713 20 12.303V2.30299C19.9983 2.12451 19.9743 1.94694 19.9286 1.77441L10.3857 7.90299Z"
                  fill="white"
                />
              </g>
            </svg>
            Inquiry@wujha.com
          </p>
          <p className="d-flex align-items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.7463 15.8747C12.0601 15.8747 11.0961 15.6265 9.65255 14.82C7.8972 13.8356 6.53947 12.9268 4.79361 11.1855C3.11033 9.50331 2.29119 8.41417 1.14474 6.32799C-0.150415 3.97252 0.070366 2.73784 0.317163 2.21014C0.611069 1.57944 1.0449 1.20221 1.60564 0.827799C1.92414 0.619124 2.26119 0.440242 2.61251 0.293424C2.64767 0.278307 2.68037 0.263893 2.70955 0.250885C2.88357 0.172486 3.14724 0.0540098 3.48123 0.180572C3.70412 0.264244 3.9031 0.435455 4.21458 0.743072C4.85337 1.37307 5.7263 2.77616 6.04833 3.46522C6.26454 3.92963 6.40763 4.2362 6.40798 4.58002C6.40798 4.98256 6.20548 5.29299 5.95974 5.62803C5.91369 5.69096 5.86798 5.75108 5.82369 5.80944C5.55615 6.161 5.49744 6.2626 5.53611 6.44401C5.61451 6.80858 6.19915 7.89385 7.15997 8.85256C8.12079 9.81127 9.17478 10.359 9.54076 10.4371C9.7299 10.4775 9.83361 10.4163 10.1964 10.1393C10.2485 10.0996 10.3019 10.0584 10.3578 10.0173C10.7326 9.7385 11.0286 9.54128 11.4216 9.54128H11.4237C11.7658 9.54128 12.0586 9.68963 12.5438 9.93432C13.1766 10.2535 14.6219 11.1152 15.2558 11.7547C15.5641 12.0655 15.736 12.2638 15.82 12.4863C15.9466 12.8214 15.8274 13.084 15.7497 13.2598C15.7367 13.2889 15.7223 13.3209 15.7072 13.3564C15.5592 13.7071 15.3792 14.0435 15.1696 14.3612C14.7959 14.9202 14.4173 15.353 13.7852 15.6472C13.4606 15.8007 13.1053 15.8785 12.7463 15.8747Z"
                fill="white"
              />
            </svg>
            (+968) 80033666
          </p>
        </div>
      </div>

      <div className="location-card">
        <h5 className="location-title">
           <FaMapMarkerAlt className="me-2" />
          Dubai branch
        </h5>
        <p className="mb-3">
          Burj Al Salam Tower
          Sheikh Zayed Road, Trade Centre 1,
          Dubai, United Arab Emirates.
        </p>
      </div>

      <div className="location-card mb-2">
        <h5 className="location-title">
        <FaMapMarkerAlt className="me-2" />
          Cairo, Egypt
        </h5>
        <p className="mb-0">
          Office B4-2-1.A, Building B4,  
          Mivida Business Park, 90 St.,  
          5th Settlement, Cairo, Egypt.
        </p>
        <p className="mb-0">
          <span className="another-branch">
            Another Branch :
          </span>
          <br />
          3rd Floor, office 1309, Park St., Sheikh Zayed, Cairo, Egypt.
        </p>
        
        <p className="phone-number mt-1">
          <svg
            stroke="currentColor"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 8 }}
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
          </svg>
          Hotline: 17667 (Egypt)
        </p>
      </div>

      <h4 className="fw-bold mt-4 fs-3">Follow us</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com/WUJHARealEstate" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@WUJHA" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://x.com/wujha" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>

      <button className="custom-btn video-call-click">
        CONNECT WITH A BRAND AMBASSADOR
      </button>
    </div>
  );
};

export default PhoneContactInfo;