import sql from '$lib/server/database'; // Assuming you're using a database connection

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

    try {
      // Insert into database (adjust column names accordingly)
      await sql`
    INSERT INTO inquiries
        (date, service, handled, first_name, last_name, phone, caliper_color, wheel_color, additional_details)
    VALUES
        (${date}, ${service}, ${false}, ${first_name}, ${last_name}, ${phone}, ${caliper_color}, ${wheel_color}, ${additional_details})
`;


      // Return success message
      return {
        success: true,
        message: 'Booking successfully submitted!'
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
