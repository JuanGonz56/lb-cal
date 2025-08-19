import sql from '$lib/server/database';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const first_name = data.get("first_name");
    const last_name = data.get("last_name");
    const phone = data.get("phone");
    const date = data.get("date");
    const service = data.get("service");
    const caliper_color = data.get("caliper_color");
    const wheel_color = data.get("wheel_color");
    const additional_details = data.get("additional_details");

    try {
      await sql`
        INSERT INTO inquiries (first_name, last_name, phone, date, service, caliper_color, wheel_color, additional_details)
        VALUES (${first_name}, ${last_name}, ${phone}, ${date}, ${service}, ${caliper_color}, ${wheel_color}, ${additional_details})
      `;
      return { success: true, message: "Congrats, your booking was submitted!" };
    } catch (error) {
      console.error("Error creating inquiry:", error);
      return { success: false, message: "Failed to submit booking." };
    }
  },
};

export const load = async () => {
  return {};
};