import sql from '$lib/server/database';  // Assuming you're using a database connection
import nodemailer from 'nodemailer'; // Email sending library

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io', // Replace with your SMTP server
  port: 2525, // Replace with your SMTP port (e.g., 465 for SSL or 587 for STARTTLS)
  secure: false, // Set to true if using SSL
  auth: {
    user: '97fb4de73401a0', // Replace with your SMTP username
    pass: 'e90f423efe01e1' // Replace with your SMTP password
  }
});

// Handle the POST request for submitting a booking
export const actions = {
  submit: async ({ request }) => {
    const data = await request.formData();

    // Get form data
    const first_name = data.get('first_name');
    const last_name = data.get('last_name');
    const phone = data.get('phone');
    const service = data.get('service');
    const caliper_color = data.get('caliper_color');
    const wheel_color = data.get('wheel_color');
    const additional_details = data.get('additional_details');
    const date = data.get('date');

    // Validate required fields
    if (!first_name || !last_name || !phone || !service || !date) {
      return {
        status: 400,
        message: 'Please fill out all required fields.'
      };
    }

    // Check if caliper or wheel color needs to be selected
    if ((service === "Caliper Restoration" || service === "Both") && !caliper_color) {
      return {
        status: 400,
        message: 'Please select a caliper color.'
      };
    }

    if ((service === "Custom Powder Coating" || service === "Both") && !wheel_color) {
      return {
        status: 400,
        message: 'Please select a wheel color.'
      };
    }

    // Insert into database (adjust column names accordingly)
    try {
      await sql`
        INSERT INTO inquiries
          (date, service, handled, first_name, last_name, phone, caliper_color, wheel_color, additional_details)
        VALUES
          (${date}, ${service}, ${false}, ${first_name}, ${last_name}, ${phone}, ${caliper_color || null}, ${wheel_color || null}, ${additional_details})
      `;
      
       // Send email notification
       const mailOptions = {
        from: 'your-email@example.com', // Sender address
        to: 'lbcalipers@example.com', // Replace with the LB Calipers email address
        subject: 'New Booking Inquiry',
        text: `A new booking has been submitted:
        - Name: ${first_name} ${last_name}
        - Phone: ${phone}
        - Service: ${service}
        - Date: ${date}
        - Caliper Color: ${caliper_color || 'N/A'}
        - Wheel Color: ${wheel_color || 'N/A'}
        - Additional Details: ${additional_details || 'N/A'}`
      };

      await transporter.sendMail(mailOptions);

      // Return success message
      return {
        success: true,
        message: 'Booking successfully submitted! We will contact you soon to confirm your appointment!'
       
      };
    } catch (err) {
      console.error('Error inserting booking:', err);
      return {
        success: false,
        message: 'Error occurred while submitting the booking.'
      };
    }
  }
};
