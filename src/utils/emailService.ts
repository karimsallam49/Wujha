interface FormData {
  name: string;
  mobile: string;
  email: string;
  countryCode?: string;
  formType?: string;
}

async function getConfig() {
  const res = await fetch("/config/contact.json");
  return res.json();
}

export const emailService = {
  async sendFormData(formData: FormData, formType: string = "Contact Form") {
    try {

      const config = await getConfig();

      const emailData = {
        to: config.contactEmail,
        from: formData.email,
        subject: `New ${formType} Submission from ${formData.name}`,
        body: `
          <h2>New Form Submission</h2>
          <p><strong>Form Type:</strong> ${formType}</p>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Mobile:</strong> ${formData.countryCode || "+971"} ${formData.mobile}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `,
        replyTo: formData.email,
      };

      console.log("Sending email:", emailData);

      await simulateEmailSending(emailData);

      return { success: true, message: "Form submitted successfully!" };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to submit form." };
    }
  },
};

async function simulateEmailSending(emailData: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent successfully:", emailData);
      resolve(true);
    }, 1000);
  });
}