import sql from '$lib/server/database';

let sortby = 'inquiry_id';  // Default sorting by inquiry_id

// Fetch inquiries data and apply sorting
export async function load() {
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
        handled
    FROM
        inquiries
    ORDER BY
        ${sql(sortby)}`;  // Dynamic sorting based on user input

    console.log({rows}); // Debugging log

    return { inquiries: rows };
}

// Handling sorting of inquiries
export const actions = {
    sort: async ({ request }) => {
        const data = await request.formData();
        const newSort = data.get('sortby');
        sortby = newSort; // Update the sorting order
        return {
            success: true,
            message: 'Sort order changed'
        };
    },
};
