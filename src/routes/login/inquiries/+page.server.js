import sql from '$lib/server/database';

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
        appointment_date,
        additional_details
      FROM inquiries
    `;
    console.log({rows});

    return { inquiries: rows };
}

export const actions = {
	handle: async ({ request }) => {
		const data = await request.formData();
        const containerNumber = data.get('containerNumber');
        const nameOfShip = data.get('nameOfShip');
        const containerSize = data.get('containerSize');
        const dateContainerShipped = data.get('dateContainerShipped');

        if (containerNumber == 'ERROR') {
            return {
                success: false,
                message: 'Invalid container number'
            };
        }

        await sql`
            INSERT INTO containers
                (containernumber, nameofship, containersize, datecontainershipped)
            VALUES
                (${containerNumber}, ${nameOfShip}, ${containerSize}, ${dateContainerShipped})
        `;
        return {
            success: true,
            message: 'Container added'
        };
    },
};