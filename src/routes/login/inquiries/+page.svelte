
<script>
  export let data;  // This will hold the data fetched from the server
</script>

<style>
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

  .hidden {
    display: none;
  }

  .undo-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background-color: #52c4f5;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .undo-button:hover {
    background-color: #454a4b;
  }
</style>

<div class="inquiries-container">
  <h2>Inquiries</h2>
  <button class="undo-button">Undo Handled</button>
  <table class="inquiries-table">
    <thead>
      <tr>
        <th>Client ID #</th>
        <th>Customer Name</th>
        <th>Phone Number</th>
        <th>Service Type</th>
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

            <form action=“?/handle”> <input type=hidden name=id value = "{inquiry.inquiry_id}"/>
            
              
              

            <button class="button">Handled</button> </form>
            <button class="button">Book</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
