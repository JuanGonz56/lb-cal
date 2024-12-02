
<script>
    export let data; // Data passed from the server
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
            <form method="POST" action="?/updatePrice">
              <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
              <input
                type="number"
                name="quoted_price"
                placeholder="Enter price"
                value={inquiry.quoted_price || ""}
                class="price-input"
              />
              <button type="submit" class="action-button finalize-button">Save</button>
            </form>
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
  
    .price-input {
      width: 100px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
  
    .action-button.finalize-button {
      padding: 5px 10px;
      background-color: #5cb85c;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .action-button.finalize-button:hover {
      background-color: #4cae4c;
    }

    .sort-buttons-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
      margin-bottom: 20px;
    }

    .finalize-button {
      align-self: flex-end;
      margin-top: -40px;
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
  