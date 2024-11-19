<script>
    export let data; // This will receive the inquiries data from the server
    console.log("Inquiries data received from server:", data);  // Debugging log to check if data is coming through
</script>

<h1>Fetched from Database</h1>

<!-- Sorting buttons for Inquiry ID and Appointment Date -->
<div class="sort-buttons-container">
    <p><strong>Sort By:</strong></p>
    <form action="?/sort" method="post">
        <input type="hidden" name="sortby" value="inquiry_id" />
        <button class="sort-button">Client ID</button>
    </form>
    <form action="?/sort" method="post">
        <input type="hidden" name="sortby" value="date" />
        <button class="sort-button">Appointment Date</button>
    </form>
</div>

<!-- Display the data in a table -->
<table class="inquiries-table">
    <thead>
        <tr>
            <th>Client ID #</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Caliper Color</th>
            <th>Wheel Color</th>
            <th>Appointment Date</th>
            <th>Additional Details</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.inquiries as inquiry}
            <tr>
                <td>{inquiry.inquiry_id}</td> 
                <td>{inquiry.first_name} {inquiry.last_name}</td>
                <td>{inquiry.phone}</td>
                <td>{inquiry.service}</td>
                <td>{inquiry.caliper_color}</td>
                <td>{inquiry.wheel_color}</td>
                <td>{inquiry.date}</td>
                <td>{inquiry.additional_details}</td>
                <td>
                    <button class="action-button">Handled</button>
                    <button class="action-button">Book</button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    h1 {
        color: #52c4f5;
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }

    /* Sorting buttons container */
    .sort-buttons-container {
        display: flex;
        flex-direction: column; /* Stack the buttons vertically */
        gap: 15px; /* Add space between buttons */
        align-items: flex-start;
        margin-bottom: 20px;
    }

    /* Sorting button styling */
    .sort-button {
        background-color: #52c4f5;
        color: rgb(0, 0, 0);
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
    }

    .sort-button:hover {
        background-color: #454a4b;
		color: #52c4f5;
		border: 1.5px solid #52c4f5;
        transform: scale(1.1); /* Enlarges the button slightly on hover */
    }

    /* Table styling */
    .inquiries-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background-color: #f5f5f5; /* Light grey background for the table */
    }

    .inquiries-table th, .inquiries-table td {
        padding: 10px;
        border: 1px solid #52c4f5;
        text-align: center;
    }

    .inquiries-table th {
        background-color: #333;
        color: hsl(198, 89%, 64%);
    }

    /* Action buttons styling */
    .action-button {
        padding: 5px 10px;
        background-color: #52c4f5;
        border: none;
        color: rgb(0, 0, 0);
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }

    .action-button:hover {
        background-color: #454a4b;
		color: #52c4f5;
		border: 1.5px solid #52c4f5;
        transform: scale(1.1); /* Enlarges the button slightly on hover */
    }

    /* Hover effect for table rows */
	.inquiries-table {
		background-color: rgba(12, 32, 57, 0.687);
		color: white
	}

    .inquiries-table tr:hover {
        background-color: #2c2929bc;
        color: #52c4f5;
    }
</style>
