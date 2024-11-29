import sql from '$lib/server/database';  // Assuming you're using a database connection

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
