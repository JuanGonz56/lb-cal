// +page.server.js
import sql from '$lib/server/database';

export async function POST({ request }) {
    const bookingData = await request.json();

    try {
        await sql`
            INSERT INTO inquiries (
                date,
                service,
                contact_info,
                first_name,
                last_name,
                phone,
                caliper_color,
                wheel_color,
                additional_details,
                handled
            ) VALUES (
                ${bookingData.date},
                ${bookingData.service},
                ${bookingData.contact_info},
                ${bookingData.first_name},
                ${bookingData.last_name},
                ${bookingData.phone},
                ${bookingData.caliper_color},
                ${bookingData.wheel_color},
                ${bookingData.additional_details},
                false -- Default for 'handled'
            )
        `;

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error saving booking:', error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to save booking' }), { status: 500 });
    }
}
