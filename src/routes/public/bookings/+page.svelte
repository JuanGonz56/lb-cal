<script>
  let first_name = '';
  let last_name = '';
  let phone = '';
  let service = '';
  let caliper_color = '';
  let wheel_color = '';
  let additional_details = '';
  let date = '';

  let feedbackMessage = '';
  let buttonText = "Submit";
  let isValid = true;

  // Dropdown options
  const services = ["Caliper Restoration", "Custom Powder Coating", "Both"];
  const caliper_colors = ["Race Red", "Blue", "Green", "Yellow", "Other"];
  const wheel_colors = ["Matte Black", "Gloss Black", "Satin Black", "Silver", "Chrome", "Other"];
</script>

<section class="contact-section">
  <div class="business-info">
    <h1>Business Hours</h1>
    <p>Monday - Friday: 8:00AM - 5:00PM</p>
    <p>Saturday - Sunday: Appointment Only</p>
    <p><strong>Phone Number:</strong> (562) 350-7925</p>
    <p><strong>Email:</strong> lbcalipers2020@gmail.com</p>
  </div>

  <form action="?/submit" method="post" on:submit={handleSubmit}>
    <div class="form-group">
      <label for="first_name">First Name</label>
      <input type="text" id="first_name" name="first_name" bind:value={first_name} />
    </div>
    <div class="form-group">
      <label for="last_name">Last Name</label>
      <input type="text" id="last_name" name="last_name" bind:value={last_name} />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="text" id="phone" name="phone" bind:value={phone} />
    </div>
    <div class="form-group">
      <label for="date">Appointment Date</label>
      <input type="date" id="date" name="date" bind:value={date} required />
    </div>
    <div class="form-group">
      <label for="service">Service Type</label>
      <select id="service" name="service" bind:value={service}>
        <option value="" disabled selected>Select a service</option>
        {#each services as service}
          <option value={service}>{service}</option>
        {/each}
      </select>
    </div>

    {#if service === "Caliper Restoration" || service === "Both"}
      <div class="form-group">
        <label for="caliper_color">Caliper Color</label>
        <select id="caliper_color" name="caliper_color" bind:value={caliper_color}>
          <option value="" disabled selected>Select a caliper color</option>
          {#each caliper_colors as color}
            <option value={color}>{color}</option>
          {/each}
        </select>
      </div>
    {/if}

    {#if service === "Custom Powder Coating" || service === "Both"}
      <div class="form-group">
        <label for="wheel_color">Wheel Color</label>
        <select id="wheel_color" name="wheel_color" bind:value={wheel_color}>
          <option value="" disabled selected>Select a wheel color</option>
          {#each wheel_colors as color}
            <option value={color}>{color}</option>
          {/each}
        </select>
      </div>
    {/if}

    <div class="form-group">
      <label for="additional_details">Additional Details</label>
      <textarea id="additional_details" name="additional_details" bind:value={additional_details} placeholder="Please provide the current condition of your wheels/calipers here in addition to the year, make, and model of your vehicle."></textarea>
    </div>

    <button type="submit" class="btn">{buttonText}</button>
  </form>

  {#if feedbackMessage}
    <p class="feedback">{feedbackMessage}</p>
  {/if}
</section>

<style>
  .contact-section {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #000;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #52c4f5;
    border-radius: 4px;
    background-color: #454a4b;
    color: #fff;
  }

  input:focus, select:focus, textarea:focus {
    border-color: #e3c517;
    outline: none;
  }

  .btn {
    padding: 0.75rem;
    background-color: #52c4f5;
    color: black;
    border: 2px solid #52c4f5;
    border-radius: 4px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn:hover {
    background-color: black;
    color: #52c4f5;
  }

  .feedback {
    color: #52c4f5;
    font-weight: bold;
    margin-top: 1rem;
  }
</style>
