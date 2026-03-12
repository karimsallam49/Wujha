import { Modal, Tabs, Tab } from "react-bootstrap";
import PhoneContactInfo from "../PhoneContactInfo/PhoneContactInfo";
import { PhonepopupForm } from "../PhonePopupForm/PhonepopupForm";
import "./PhonePopup.css";
import type { PopupFormProps } from "../../DTO/AppDTO";

export const PhonePopup = ({ OpenRequestForm, closeRequestForm }: PopupFormProps) => {
  return (
    <>
    <Modal
      show={OpenRequestForm}
      onHide={() => closeRequestForm(false)}
      centered
      contentClassName="Phone-modal-content"
      dialogClassName="glass-dialog modal-dialog"
      backdropClassName="blurred-backdrop"
      className="w-100"
      
    >
        <button
          className="phone-popup-close"
          aria-label="Close"
          onClick={() => closeRequestForm(false)}
        >
          <span></span>
          <span></span>
        </button>
      <Modal.Body style={{ position: "relative" }}>

        <div className="phonePopup-container desktop-view">
          <PhonepopupForm />
          <PhoneContactInfo />
        </div>

        <div className="mobile-view">
          <Tabs defaultActiveKey="form" className="phone-tabs mb-3" fill>
            <Tab eventKey="form" title="Request Call">
              <PhonepopupForm />
            </Tab>

            <Tab eventKey="contact" title="Contact Info">
              <PhoneContactInfo />
            </Tab>
          </Tabs>
        </div>

      </Modal.Body>
    </Modal>
          </>
  );
};