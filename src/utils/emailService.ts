interface FormData {
  name: string;
  mobile: string;
  email: string;
  countryCode?: string;
  formType?: string;
  appointmentDate?: string;
  appointmentTime?: string;
}

const loadConfig = async () => {
  try {
    const response = await fetch('/config/contact.json');
    const config = await response.json();
    return config;
  } catch (error) {
    console.error('Failed to load config:', error);
    return { contactEmail: 'Karimsallam97@gmail.com' };
  }
};

export const emailService = {
  async sendFormData(formData: FormData, formType: string = 'Contact Form') {
    try {
      const config = await loadConfig();
      
      // Primary method: Open user's email client (Outlook, etc.)
      return this.sendEmailWithMailto(formData, formType, config.contactEmail);
    } catch (error) {
      console.error('Error preparing email:', error);
      return { success: false, message: 'Failed to open email client.' };
    }
  },

  async sendWithEmailJS(formData: FormData, formType: string, recipientEmail: string) {
    try {
      if (!(window as any).emailjs) {
        await this.loadEmailJS();
      }

      const serviceID = 'service_your_service_id'; 
      const templateID = 'template_your_template_id'; 
      const publicKey = 'your_public_key'; 

      const templateParams = {
        to_email: recipientEmail,
        from_name: formData.name,
        from_email: formData.email,
        mobile: `${formData.countryCode || '+971'} ${formData.mobile}`,
        form_type: formType,
        message: `
          New form submission from ${formData.name}
          
          Form Type: ${formType}
          Name: ${formData.name}
          Email: ${formData.email}
          Mobile: ${formData.countryCode || '+971'} ${formData.mobile}
          Submitted at: ${new Date().toLocaleString()}
        `,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await (window as any).emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully via EmailJS!', response);
      return { success: true, message: 'Form submitted successfully!' };
    } catch (error) {
      console.error('EmailJS error:', error);
      throw error;
    }
  },

  // Primary method: Open user's email client (Outlook, Gmail, etc.)
  sendEmailWithMailto(formData: FormData, formType: string, recipientEmail: string = 'Karimsallam97@gmail.com') {
    const subject = `New ${formType} from ${formData.name}`;
    
    // Build email body with appointment info if available
    let appointmentInfo = '';
    if (formData.appointmentDate || formData.appointmentTime) {
      appointmentInfo = `

📅 APPOINTMENT DETAILS:
Requested Date: ${formData.appointmentDate || 'Not specified'}
Requested Time: ${formData.appointmentTime || 'Not specified'}`;
    }
    
    const body = `
New Form Submission

Form Type: ${formType}
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.countryCode || '+971'} ${formData.mobile}
Submitted at: ${new Date().toLocaleString()}${appointmentInfo}

---
This message was sent from the Wujha website contact form.
    `.trim();

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
    
    return { success: true, message: 'Email client opened. Please send the email to complete submission.' };
  },
  loadEmailJS(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).emailjs) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        (window as any).emailjs.init('your_public_key'); 
        resolve();
      };
      script.onerror = () => reject(new Error('Failed to load EmailJS'));
    });
  }
};