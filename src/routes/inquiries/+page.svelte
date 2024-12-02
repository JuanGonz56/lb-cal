<script>
    export let data; // Data from the server
  
    let messages = []; // Array to track multiple success messages
    let loadingButtonId = null; // Tracks which button is being clicked
  
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
          // Add a new success message to the messages array
          const newMessage = {
            text: `Inquiry ${inquiry_id} booked! Proceed to finalize booking.`,
            id: Date.now(),
          };
          messages = [...messages, newMessage];
  
          // Automatically remove the message after 10 seconds
          setTimeout(() => {
            messages = messages.filter((message) => message.id !== newMessage.id);
          }, 10000);
  
          // Update the inquiry state in the UI
          const updatedInquiry = data.inquiries.find((i) => i.inquiry_id === inquiry_id);
          if (updatedInquiry) updatedInquiry.book_status = true;
        } else {
          console.error("Failed to book inquiry");
        }
      } catch (error) {
        console.error("Error booking inquiry:", error);
      } finally {
        loadingButtonId = null; // Reset the loading state
      }
    }
  </script>
  
  <h1 class="centered-title">{data.showHandled ? "Handled Inquiries" : "Unhandled Inquiries"}</h1>
  
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
      Finalize Booking
    </button>
  </div>
  
  <!-- Success Messages -->
  {#if messages.length > 0}
    <div class="messages-container">
      {#each messages as message}
        <div class="success-message">
          {message.text}
        </div>
      {/each}
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
              <!-- Mark Handled Button -->
              <form action="?/markHandled" method="post" style="display: inline;">
                <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                <button class="action-button">Mark Handled</button>
              </form>
              <!-- Book Button -->
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
              <!-- Undo Handled Button -->
              <form action="?/undoHandled" method="post" style="display: inline;">
                <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                <button class="action-button">Undo</button>
              </form>
              <!-- Delete Button -->
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
    .centered-title {
      text-align: center;
      color: #52c4f5;
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .messages-container {
      margin: 20px auto;
      width: fit-content;
    }
  
    /*message for successful booking*/
    .success-message {
      text-align: center;
      font-size: 1.2rem;
      margin: 10px 0;
      padding: 10px 15px;
      background-color: rgba(0, 128, 0, 0.8); /* Green background */
      color: rgb(0, 0, 0);
      border-radius: 8px;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
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
  