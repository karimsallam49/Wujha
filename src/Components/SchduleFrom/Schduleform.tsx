import  { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import "./schdule.css"
import type { PopupFormProps } from "../../DTO/AppDTO";


export default function RequestFormModal({OpenRequestForm,closeRequestForm}:PopupFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    residence: "1 Bedroom",
    broker: "Yes",
    message: "",
  });
  const [errors] = useState({ name: false, mobile: false, email: false });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
    closeRequestForm();
  };

  return (
    <>
    
      <Modal className="custom-modal w-100" contentClassName="schdule-modal" dialogClassName="modal-90w d-flex align-items-center justify-content-center" show={OpenRequestForm} onHide={closeRequestForm} centered>
        <Modal.Header closeButton>
        </Modal.Header>
          <Modal.Title className="w-100 text-center schdule-heading">
            
            Leave A Request
            </Modal.Title> 
        <Modal.Body className="custom-modal w-100">
          <Form className="w-100 schdule-form" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between gap-3">

              <div className="form-group">
        <label>First NAME</label>
        <input type="text" name="name" value={formData.firstName} onChange={handleChange} />
        {errors.name && <p className="error-text">Name is required.</p>}
      </div>
              <div className="form-group">
        <label>Last NAME</label>
        <input type="text" name="name" value={formData.firstName} onChange={handleChange} />
        {errors.name && <p className="error-text">Name is required.</p>}
      </div>
            </div>

      <div className="form-group row-mobile">
        <div className="country-code">+971 ▼</div>
        <div className="mobile-input">
          <label>MOBILE</label>
          <input type="text" name="mobile" value={formData.phone} onChange={handleChange} />
        </div>
      </div>
          {errors.mobile && <p className="error-text">Mobile number is required.</p>}

      <div className="form-group">
        <label>EMAIL</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">Email is required.</p>}
      </div>

            {/* Residence Options */}
            <Form.Group className="mb-3">
              <Form.Label>
                Type of residence you are interested in
              </Form.Label>
              <div className="d-flex flex-wrap gap-3 schdule-radio">
                {["1 Bedroom", "2 Bedroom", "3 Bedroom", "Studio"].map(
                  (option) => (
                    <Form.Check
                      key={option}
                      type="radio"
                      label={option}
                      name="residence"
                      value={option}
                      checked={formData.residence === option}
                      onChange={handleChange}
                    />
                  )
                )}
              </div>
            </Form.Group>

            {/* Broker */}
            <Form.Group className="mb-3">
              <Form.Label>Are you a broker?</Form.Label>
              <div  className="d-flex gap-3 schdule-radio">
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="broker"
                  value="Yes"
                  checked={formData.broker === "Yes"}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="broker"
                  value="No"
                  checked={formData.broker === "No"}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
              className="custom-textarea"
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Submit */}
            <div className="d-flex justify-content-between align-items-center">
                 <p>
                Field with * required
              </p>
            <button
  type="submit"
  className="btn d-block px-5 py-2 rounded-pill"
  style={{
    backgroundColor: "#d9534f",
    border: "none",
    fontWeight: 500,     // قريب من Bootstrap
    textAlign: "center",
  }}
>
  SUBMIT
</button>

             
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
