<script>
  export let data; // Inquiries and showHandled status from server
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
  <button class="sort-button finalize-button" on:click={() => window.location.href = '/finalizeBook/'}>Finalize Book</button>
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
        <td>{inquiry.date}</td> <!-- Date formatted -->
        <td>{inquiry.additional_details}</td>
        <td>
          {#if !data.showHandled}
            <form action="?/markHandled" method="post" style="display: inline;">
              <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
              <button class="action-button">Mark Handled</button>
            </form>
            <form action="?/markBooked" method="post" style="display: inline;">
              <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
              <button class="action-button book-button">Book</button>
            </form>
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
  h1 {
    color: #52c4f5;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
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

  .inquiries-table th, .inquiries-table td {
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
    background-color: #5cb85c;
  }

  .action-button.delete {
    background-color: #d9534f;
  }
</style>
