import sql from '$lib/server/database'; // Import your database logic

export const actions = {
  // POST action to handle form submission
  submit: async ({ request }) => {
    // Extract form data from the incoming request
    const data = await request.formData();
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const phoneNumber = data.get('phoneNumber');
    const serviceType = data.get('serviceType');
    const caliperColor = data.get('caliperColor');
    const wheelColor = data.get('wheelColor');
    const message = data.get('message');
    const appointmentDate = data.get('appointmentDate');

    // Insert the form data into the database
    try {
      await sql`
        INSERT INTO bookings (first_name, last_name, phone, service, caliper_color, wheel_color, message, appointment_date)
        VALUES (${firstName}, ${lastName}, ${phoneNumber}, ${serviceType}, ${caliperColor}, ${wheelColor}, ${message}, ${appointmentDate})
      `;

      return {
        success: true,
        message: 'Booking successfully added!'
      };
    } catch (error) {
      console.error('Error saving booking:', error);
      return {
        success: false,
        message: 'An error occurred while submitting your booking. Please try again later.'
      };
    }
  },
};
