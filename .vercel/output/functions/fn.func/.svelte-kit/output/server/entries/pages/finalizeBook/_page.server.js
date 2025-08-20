import { s as sql } from "../../../chunks/database.js";
async function load() {
  try {
    const rows = await sql`
      SELECT
        inquiry_id,
        first_name,
        last_name,
        phone,
        service,
        caliper_color,
        wheel_color,
        date,
        additional_details,
        quoted_price
      FROM
        inquiries
      WHERE
        book_status = TRUE
    `;
    return { inquiries: rows, form: null };
  } catch (err) {
    console.error("Error loading booked inquiries:", err);
    return { inquiries: [], form: null };
  }
}
const actions = {
  updatePrice: async ({ request }) => {
    const data = await request.formData();
    const inquiryId = data.get("inquiry_id");
    const quotedPrice = data.get("quoted_price");
    try {
      await sql`
        UPDATE inquiries
        SET quoted_price = ${quotedPrice}
        WHERE inquiry_id = ${inquiryId}
      `;
      return {
        success: true,
        form: { message: `Quoted price for Inquiry #${inquiryId} updated successfully.` }
      };
    } catch (err) {
      console.error("Error updating quoted price:", err);
      return {
        success: false,
        form: { message: "Failed to update the quoted price." }
      };
    }
  }
};
export {
  actions,
  load
};
