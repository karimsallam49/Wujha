import { Modal } from "react-bootstrap";
import PhoneContactInfo from "../PhoneContactInfo/PhoneContactInfo";
import { PhonepopupForm } from "../PhonePopupForm/PhonepopupForm";
import "./PhonePopup.css";
import type { PopupFormProps } from "../../DTO/AppDTO";

export const PhonePopup = ({OpenRequestForm,closeRequestForm}:PopupFormProps) => {

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
  <Modal.Body style={{ position: "relative" }}>
    <button
      className="phone-popup-close"
      aria-label="Close"
      onClick={() => closeRequestForm(false)}
    >
      <span></span>
      <span></span>
    </button>

    <div className="phonePopup-container">
      <PhonepopupForm />
      <PhoneContactInfo />
    </div>
  </Modal.Body>
</Modal>

    </>
  );
};
