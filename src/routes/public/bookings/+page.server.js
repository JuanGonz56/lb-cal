import sql from '$lib/server/database';  // Assuming you're using a database connection
import nodemailer from 'nodemailer'; // Email sending library

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gonzalez.juanant524@gmail.com', // Replace with your SMTP username
    pass: 'mdzb ajac umoc hefz' // Replace with your SMTP password
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
      
      const mailOptions = {
        from: 'gonzalez.juanant524@gmail.com', // Sender address
        to: 'gonzalez.juanant524@gmail.com', // LB Calipers email address
        subject: 'New Booking Inquiry Received',
        html: `
          <div style="font-family: Arial, sans-serif; color: #52c4f5; line-height: 1.8;">
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="cid:lbcaliperlogo" alt="LB Calipers Logo" style="max-width: 200px;">
            </div>
            <!-- Email Header -->
            <h1 style="text-align: center; font-size: 32px; font-weight: bold; color: #52c4f5; margin-bottom: 20px;">
              New Booking Inquiry
            </h1>
            <p style="font-size: 20px; font-weight: bold; color: #52c4f5; text-align: left;">
              Dear LB Calipers,
            </p>
            <p style="font-size: 20px; font-weight:bold; color: #52c4f5; margin-bottom: 20px;">
              A new booking has been submitted through your website. Below are the details of the inquiry:
            </p>
            <!-- Booking Details -->
            <div style="background: #454a4b; padding: 20px; border: 2px solid #52c4f5; border-radius: 10px; margin: 20px 0;">
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Client Name:</strong> ${first_name} ${last_name}</p>
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Phone Number:</strong> ${phone}</p>
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Service Requested:</strong> ${service}</p>
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Appointment Date:</strong> ${new Date(date).toLocaleDateString()}</p>
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Caliper Color:</strong> ${caliper_color || 'N/A'}</p>
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Wheel Color:</strong> ${wheel_color || 'N/A'}</p>
              <p style="color: #52c4f5; font-size: 20px; margin: 5px 0;"><strong>Additional Details:</strong> ${additional_details || 'N/A'}</p>
            </div>
            <!-- Footer -->
            <p style="font-size: 20px; font-weight:bold; text-align: center; color: #52c4f5; margin-top: 20px;">
              Thank you for using LB Calipers' online booking system. For any inquiries or further assistance, feel free to reach out to our team.
            </p>
            <hr style="border: 0; font-weight:bold; border-top: 2px solid #52c4f5; margin: 30px 0;">
            <p style="font-size: 16px; text-align: center; color: #999;">
              This email was generated automatically by the LB Calipers booking system. Please do not reply to this email.
            </p>
          </div>
        `,
        attachments: [
          {
            filename: 'lb-caliper-logo-2.png', // File name for the image
            path: 'static/images/lb-caliper-logo-2.png', // Path to the image in your project
            cid: 'lbcaliperlogo' // Content ID for embedding the image in the email
          }
        ]
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
