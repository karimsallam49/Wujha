import { useState, useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "./BrandModel.css";
import { FormMeeting } from "../formMeeting/FormMeeting";

const BrandAmbassadorModal = ({ show, handleClose }: any) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [step, setStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
  ];

  const renderCalendar = () => {
    const headerDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysElements: any[] = [];

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const header = headerDays.map((day, i) => (
      <div
        key={`header-${i}`}
        style={{
          width: "40px",
          height: "40px",
          lineHeight: "40px",
          textAlign: "center",
          margin: "5px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {day}
      </div>
    ));

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      daysElements.push(
        <div
          key={`prev-${dayNum}`}
          style={{
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            textAlign: "center",
            borderRadius: "50%",
            margin: "5px",
            opacity: 0.3,
            color: "#fff",
          }}
        >
          {dayNum}
        </div>
      );
    }

    for (let d = 1; d <= daysInMonth; d++) {
      daysElements.push(
        <div
          key={`current-${d}`}
          onClick={() => setSelectedDate(d)}
          style={{
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            textAlign: "center",
            borderRadius: "50%",
            margin: "5px",
            cursor: "pointer",
            background: selectedDate === d ? "#fff" : "transparent",
            color: selectedDate === d ? "#000" : "#fff",
            border: "1px solid #555",
          }}
        >
          {d}
        </div>
      );
    }

    const totalBoxes = Math.ceil(daysElements.length / 7) * 7;
    for (let i = daysElements.length + 1; i <= totalBoxes; i++) {
      const dayNum = i - daysElements.length;
      daysElements.push(
        <div
          key={`next-${dayNum}`}
          style={{
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            textAlign: "center",
            borderRadius: "50%",
            margin: "5px",
            opacity: 0.3,
            color: "#fff",
          }}
        >
          {dayNum}
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>{header}</div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {daysElements}
        </div>
      </div>
    );
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      contentClassName="modal-content-custom"
      dialogClassName="modal-dialog-custom"
    >
      <Modal.Body className="blur-dark" style={{ color: "#fff" }}>
        <h3 className="text-center mb-4">
          MEET OUR <strong>BRAND AMBASSADOR</strong>
        </h3>

        <Row>
          {!isMobile && (
            <>
              <Col md={5}>
                <FormMeeting 
                  appointmentDate={selectedDate}
                  appointmentTime={selectedTime}
                />
              </Col>

              <Col md={5}>
                <div style={{ fontSize: "18px" }}>
                  SELECT DATE (UAE TIMEZONE GMT+4)
                </div>
                <div className="calender">
                  <div style={{ padding: "10px", borderRadius: "5px" }}>
                    {renderCalendar()}
                  </div>
                </div>
              </Col>

              <Col md={2}>
                <h6 className="time-border">Time Slots</h6>
                <div
                  className="time-border"
                  style={{ overflowY: "auto", height: "100%" }}
                >
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`btn ${
                        selectedTime === slot ? "btn-light" : "btn-dark"
                      } d-block w-100 mb-2`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </Col>
            </>
          )}

          {isMobile && (
            <Col  xs={12}>
              <div className="text-center mb-3">Step {step} of 3</div>

              {step === 1 && (
                <>
                  <FormMeeting 
                    appointmentDate={selectedDate}
                    appointmentTime={selectedTime}
                  />
                  <button
                    className="btn btn-light w-100 mt-3"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-2">
                    SELECT DATE (UAE TIMEZONE GMT+4)
                  </div>

                  <div className="calender mb-3">{renderCalendar()}</div>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-light w-50"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-light w-50"
                      onClick={() => setStep(3)}
                      disabled={!selectedDate}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h6 className="mb-2">Time Slots</h6>

                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`btn ${
                        selectedTime === slot ? "btn-light" : "btn-dark"
                      } d-block w-100 mb-2`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}

                  <div className="d-flex gap-2 mt-3">
                    <button
                      className="btn btn-outline-light w-50"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-success w-50"
                      disabled={!selectedTime}
                      onClick={() => handleClose}
                    >
                      Confirm
                    </button>
                  </div>
                </>
              )}
            </Col>
          )}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default BrandAmbassadorModal;
