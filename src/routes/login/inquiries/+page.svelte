<script>
  export let data; // Inquiries data received from the server
  let inquiries = [...data.inquiries]; // Initialize the inquiries with server data

  // Handle the inquiry (marks it as handled)
  function handleInquiry(inquiry_id) {
    inquiries = inquiries.map((inquiry) => {
      if (inquiry.inquiry_id === inquiry_id) {
        inquiry.handled = !inquiry.handled; // Toggle handled status
      }
      return inquiry;
    });
  }

  // Sort the inquiries by inquiry_id (or appointment date)
  function sortInquiries() {
    inquiries = [...inquiries].sort((a, b) => a.inquiry_id - b.inquiry_id); // Sorting by inquiry_id
  }
</script>

<h1>Fetched from Database</h1>

<div class="top-buttons">
  <button class="sort-button" on:click={sortInquiries}>Sort by Inquiry ID</button>
  <button class="handle-button" on:click={() => handleInquiry(inquiries[0]?.inquiry_id)}>
    Handle First Inquiry
  </button>
</div>

<div class="inquiries-container">
  <table class="inquiries-table">
    <thead>
      <tr>
        <th>Client ID #</th>
        <th>Customer Name</th>
        <th>Phone</th>
        <th>Service Type</th>
        <th>Caliper Color</th>
        <th>Wheel Color</th>
        <th>Appointment Date</th>
        <th>Additional Details</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each inquiries as inquiry}
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
            <button class="button" on:click={() => handleInquiry(inquiry.inquiry_id)}>
              {inquiry.handled ? 'Undo Handle' : 'Handle'}
            </button>
            <button class="button">Book</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .top-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 10px;
  }

  .sort-button,
  .handle-button {
    padding: 10px 20px;
    background-color: #52c4f5;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .sort-button:hover,
  .handle-button:hover {
    background-color: #454a4b;
  }

  .inquiries-container {
    padding: 20px;
    color: #fff;
    background-color: #1e1e1e;
    border-radius: 8px;
    margin-top: 20px;
    position: relative;
  }

  .inquiries-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .inquiries-table th, .inquiries-table td {
    padding: 10px;
    border: 1px solid #52c4f5;
    text-align: left;
  }

  .inquiries-table th {
    background-color: #333;
  }

  .button {
    padding: 5px 10px;
    background-color: #00bcd4;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .button:hover {
    background-color: #454a4b;
  }
</style>
