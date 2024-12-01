<script>
    export let data; // Data from the server
  
    let message = ''; // Success message for booked inquiries
    let loadingButtonId = null; // Tracks which button is being clicked
  
    // Automatically hide the success message after 10 seconds
    $: if (message) {
      setTimeout(() => {
        message = '';
      }, 10000);
    }
  
    // Handle booking action
    async function handleBooking(inquiry_id) {
      loadingButtonId = inquiry_id; // Set the loading state for the button
      const formData = new FormData();
      formData.append("inquiry_id", inquiry_id);
  
      try {
        const response = await fetch("?/markBooked", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          const result = await response.json();
          message = "Inquiry booked! Proceed to finalize booking.";
          // Optionally, update the UI state for inquiries if data changes
          const updatedInquiry = data.inquiries.find(i => i.inquiry_id === inquiry_id);
          if (updatedInquiry) updatedInquiry.book_status = true;
        } else {
          message = "Failed to book inquiry. Please try again.";
        }
      } catch (error) {
        console.error("Error booking inquiry:", error);
        message = "An error occurred. Please try again.";
      } finally {
        loadingButtonId = null; // Reset the loading state
      }
    }
  </script>
  
  <h1>{data.showHandled ? "Handled Inquiries" : "Unhandled Inquiries"}</h1>
  
  <!-- Sorting and Toggle Buttons -->
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
    <form action="?/toggleHandled" method="post">
      <input type="hidden" name="showHandled" value={data.showHandled ? "false" : "true"} />
      <button class="sort-button">
        {data.showHandled ? "Show Unhandled" : "Show Handled"}
      </button>
    </form>
    <!-- Redirect Button -->
    <button
      class="sort-button finalize-button"
      on:click={() => (window.location.href = "/finalizeBook/")}
    >
      Finalize Book
    </button>
  </div>
  
  <!-- Success Message -->
  {#if message}
    <div class="success-message">
      {message}
    </div>
  {/if}
  
  <!-- Data Table -->
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
          <td>{inquiry.caliper_color || "N/A"}</td>
          <td>{inquiry.wheel_color || "N/A"}</td>
          <td>{new Date(inquiry.date).toLocaleDateString()}</td>
          <td>{inquiry.additional_details}</td>
          <td>
            {#if !data.showHandled}
              <form action="?/markHandled" method="post" style="display: inline;">
                <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                <button class="action-button">Mark Handled</button>
              </form>
              <button
                class="action-button book-button"
                style="background-color: {inquiry.book_status ? 'lightgray' : 'green'}; color: black;"
                on:click={() => handleBooking(inquiry.inquiry_id)}
                disabled={inquiry.book_status || loadingButtonId === inquiry.inquiry_id}
              >
                {loadingButtonId === inquiry.inquiry_id
                  ? "Booking..."
                  : inquiry.book_status
                  ? "Booked!"
                  : "Book"}
              </button>
            {:else}
              <form action="?/undoHandled" method="post" style="display: inline;">
                <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                <button class="action-button">Undo</button>
              </form>
              <form action="?/deleteInquiry" method="post" style="display: inline;">
                <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                <button class="action-button delete">Delete</button>
              </form>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    .success-message {
      text-align: center;
      font-size: 1.2rem;
      margin: 15px 0;
      color: green;
      font-weight: bold;
    }
  
    .sort-buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
      margin-bottom: 20px;
    }
  
    .sort-button {
      background-color: #52c4f5;
      color: black;
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
      transform: scale(1.1);
    }
  
    .finalize-button {
      align-self: flex-end;
      margin-top: -40px;
    }
  
    .inquiries-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
      background-color: rgba(12, 32, 57, 0.687);
      color: white;
    }
  
    .inquiries-table th,
    .inquiries-table td {
      padding: 10px;
      border: 1px solid #52c4f5;
      text-align: center;
    }
  
    .inquiries-table th {
      background-color: #333;
      color: hsl(198, 89%, 64%);
    }
  
    .action-button {
      padding: 5px 10px;
      background-color: #52c4f5;
      border: none;
      color: black;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
    }
  
    .action-button:hover {
      background-color: #454a4b;
      color: #52c4f5;
      border: 1.5px solid #52c4f5;
    }
  
    .action-button.book-button {
      background-color: green;
    }
  
    .action-button.book-button:disabled {
      background-color: lightgray;
      cursor: not-allowed;
    }
  
    .action-button.delete {
      background-color: #d9534f;
    }
  </style>
  