<script>
    export let data; // Data passed from the server
  
    let messages = []; // Array to store success messages
    let loadingButtonId = null; // Tracks which button is being clicked
  
    // Handle save action
    async function handleSave(inquiry_id, quoted_price) {
      loadingButtonId = inquiry_id; // Set the loading state for the button
  
      const formData = new FormData();
      formData.append("inquiry_id", inquiry_id);
      formData.append("quoted_price", quoted_price);
  
      try {
        const response = await fetch("?/updatePrice", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          // Add a new success message to the messages array
          const newMessage = {
            text: `Inquiry ${inquiry_id} saved successfully!`,
            id: Date.now(),
          };
          messages = [...messages, newMessage];
  
          // Automatically remove the message after 10 seconds
          setTimeout(() => {
            messages = messages.filter((message) => message.id !== newMessage.id);
          }, 10000);
  
          // Update the inquiry in the UI
          const updatedInquiry = data.inquiries.find((i) => i.inquiry_id === inquiry_id);
          if (updatedInquiry) updatedInquiry.quoted_price = quoted_price;
  
          // Keep the button as "Saved!"
          updatedInquiry.isSaved = true;
        } else {
          console.error("Failed to save inquiry");
        }
      } catch (error) {
        console.error("Error saving inquiry:", error);
      } finally {
        loadingButtonId = null; // Reset the loading state
      }
    }
  </script>
  
  <h1 class="centered-title">Finalize Bookings</h1>
  
  <!-- Redirect Button -->
  <div class="sort-buttons-container">
    <button
      class="sort-button finalize-button"
      on:click={() => (window.location.href = "/inquiries/")}
    >
      Inquiries Page
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
        <th>Quoted Price</th>
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
          <td>{inquiry.additional_details || "N/A"}</td>
          <td>
            <input
              type="number"
              placeholder="Enter price"
              value={inquiry.quoted_price || ""}
              class="price-input"
              on:change={(e) => (inquiry.quoted_price = e.target.value)}
            />
            <button
              class="action-button finalize-button"
              on:click={() => handleSave(inquiry.inquiry_id, inquiry.quoted_price)}
              disabled={loadingButtonId === inquiry.inquiry_id}
            >
              {inquiry.isSaved ? "Saved!" : loadingButtonId === inquiry.inquiry_id ? "Saving..." : "Save"}
            </button>
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
      margin-top: 20px;
      text-align: center;
      display: flex;
      flex-direction: column; /* Stack messages vertically */
      align-items: center;
      justify-content: center;
    }
  
    .success-message {
      display: inline-block;
      background-color: #3ee13eed; /* Green background with 50% transparency */
      color: #000;
      padding: 10px 15px;
      margin: 10px 0; /* Vertical spacing between messages */
      border-radius: 8px;
      font-size: 1.2rem;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      width: fit-content;
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
      background-color: #454a4b;
      color: hsl(198, 89%, 64%);
    }
  
    .price-input {
      width: 100px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
  
    .action-button.finalize-button {
      padding: 5px 10px;
      background-color: #52c4f5;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .action-button.finalize-button:hover {
      background-color: #3ee13eed;
    }
  
    .sort-buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center; /* Center align the button */
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
  </style>
  