import sql from '$lib/server/database';

let sortby = 'inquiry_id'; // Default sorting by inquiry_id
let showHandled = false; // Default to unhandled inquiries

// Fetch inquiries data and apply sorting and handled status
export async function load() {
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
        handled,
        book_status
      FROM
        inquiries
      WHERE
        handled = ${showHandled}
      ORDER BY
        ${sql(sortby)}
    `;
    console.log('Loaded inquiries:', rows); // Debugging line to ensure data fetched correctly
    return { inquiries: rows, showHandled };
  } catch (err) {
    console.error('Error loading inquiries:', err);
    return { inquiries: [], showHandled };
  }
}

// Handle sorting, toggling handled status, and inquiry actions
export const actions = {
  sort: async ({ request }) => {
    const data = await request.formData();
    sortby = data.get('sortby');
    return { success: true };
  },

  toggleHandled: async ({ request }) => {
    const data = await request.formData();
    showHandled = data.get('showHandled') === 'true';
    return { success: true };
  },

  markHandled: async ({ request }) => {
    const data = await request.formData();
    const inquiryId = data.get('inquiry_id');
    try {
      await sql`
        UPDATE inquiries
        SET handled = TRUE
        WHERE inquiry_id = ${inquiryId}
      `;
      return { success: true };
    } catch (err) {
      console.error('Error marking inquiry as handled:', err);
      return { success: false };
    }
  },

  undoHandled: async ({ request }) => {
    const data = await request.formData();
    const inquiryId = data.get('inquiry_id');
    try {
      await sql`
        UPDATE inquiries
        SET handled = FALSE
        WHERE inquiry_id = ${inquiryId}
      `;
      return { success: true };
    } catch (err) {
      console.error('Error undoing inquiry handled:', err);
      return { success: false };
    }
  },

  deleteInquiry: async ({ request }) => {
    const data = await request.formData();
    const inquiryId = data.get('inquiry_id');
    try {
      await sql`
        DELETE FROM inquiries
        WHERE inquiry_id = ${inquiryId}
      `;
      return { success: true };
    } catch (err) {
      console.error('Error deleting inquiry:', err);
      return { success: false };
    }
  },

  markBooked: async ({ request }) => {
    const data = await request.formData();
    const inquiryId = data.get('inquiry_id');
    try {
      await sql`
        UPDATE inquiries
        SET book_status = TRUE
        WHERE inquiry_id = ${inquiryId}
      `;
      return { success: true };
    } catch (err) {
      console.error('Error marking inquiry as booked:', err);
      return { success: false };
    }
  },
};
