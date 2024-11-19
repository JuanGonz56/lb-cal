<script>
  import { onMount } from 'svelte';
  
  // Define the form data
  let first_name = '';
  let last_name = '';
  let phone = '';
  let service = '';
  let caliper_color = '';
  let wheel_color = '';
  let additional_details = '';
  let date = '';

  let feedbackadditional_details = '';
  let buttonText = "Submit";
  let isValid = true;
  
  // Dropdown options
  const services = ["Caliper Restoration", "Custom Powder Coating", "Both"];
  const caliper_colors = ["Race Red", "Blue", "Green", "Yellow", "Other"];
  const wheel_colors = ["Matte Black", "Gloss Black", "Satin Black", "Silver", "Chrome", "Other"];
  
  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate the form
    if (!first_name || !phone || !service || !date) {
      feedbackadditional_details = "Please input all the fields";
      buttonShake();
      return;
    }

    if ((service === "Caliper Restoration" || service === "Both") && !caliper_color) {
      feedbackadditional_details = "Please select a caliper color";
      buttonShake();
      return;
    }

    if ((service === "Custom Powder Coating" || service === "Both") && !wheel_color) {
      feedbackadditional_details = "Please select a wheel color";
      buttonShake();
      return;
    }

    // Prepare form data
    const formData = {
      first_name,
      last_name,
      phone,
      service,
      caliper_color,
      wheel_color,
      additional_details,
      date
    };

    try {
      // Send POST request to server-side handler
      const res = await fetch('/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        feedbackadditional_details = "Thanks for booking! We will contact you as soon as possible.";
        buttonText = "👍";
        setTimeout(() => {
          resetForm();
          buttonText = "Submit";
        }, 2000);
      } else {
        feedbackadditional_details = "An error occurred. Please try again.";
        buttonText = "Try Again";
      }
    } catch (err) {
      console.error(err);
      feedbackadditional_details = "Error connecting to the server. Please try again later.";
    }
  }

  // Reset form after submission
  function resetForm() {
    first_name = '';
    last_name = '';
    phone = '';
    service = '';
    caliper_color = '';
    wheel_color = '';
    additional_details = '';
    date = '';
  }

  // Shake button animation for invalid input
  function buttonShake() {
    isValid = false;
    setTimeout(() => isValid = true, 500);
  }
</script>

<section class="contact-section">
  <div class="business-info">
    <h1>Business Hours</h1>
    <p>Monday - Friday: 8:00AM - 5:00PM</p>
    <p>Saturday - Sunday: Appointment Only</p>
    <p><strong>Phone Number:</strong> (562) 350-7925</p>
    <p><strong>Email:</strong> lbcalipers2020@gmail.com</p>
  </div>

  <!-- Booking Form -->
    <form action="?/submit" method="post">

    <div class="form-group">
      <label for="first_name">First Name</label>
      <input type="text" id="first_name" bind:value={first_name} />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" bind:value={last_name} />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="text" id="phone" bind:value={phone} />
    </div>
    <div class="form-group">
      <label for="date">Appointment Date</label>
      <input type="date" id="date" bind:value={date} />
    </div>
    <div class="form-group">
      <label for="service">Service Type</label>
      <select id="service" bind:value={service}>
        <option value="" disabled selected>Select a service</option>
        {#each services as service}
          <option value={service}>{service}</option>
        {/each}
      </select>
    </div>

    {#if service === "Caliper Restoration" || service === "Both"}
      <div class="form-group">
        <label for="caliper_color">Caliper Color</label>
        <select id="caliper_color" bind:value={caliper_color}>
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
        <select id="wheel_color" bind:value={wheel_color}>
          <option value="" disabled selected>Select a wheel color</option>
          {#each wheel_colors as color}
            <option value={color}>{color}</option>
          {/each}
        </select>
      </div>
    {/if}

    <div class="form-group">
      <label for="additional_details">Additional Details</label>
      <textarea id="additional_details" bind:value={additional_details} placeholder="Please provide the current condition of your wheels/calipers here in addition to the year, make, and model of your vehicle."></textarea>
    </div>

    <button type="submit" class="btn" class:is-invalid={!isValid}>{buttonText}</button>
  </form>

  {#if feedbackadditional_details}
    <p class="feedback">{feedbackadditional_details}</p>
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

  .business-info h1 {
    font-size: 2rem;
    color: #52c4f5;
    margin-bottom: 1rem;
  }

  .business-info p {
    margin: 0.5rem 0;
    font-size: 1rem;
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

  label {
    font-weight: bold;
    color: #52c4f5;
    margin-bottom: 0.5rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #52c4f5;
    border-radius: 4px;
    background-color: #454a4b;
    color: #fff;
    transition: border-color 0.3s ease;
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

  .is-invalid {
    animation: shake 0.4s ease-in-out;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-15px); }
    50% { transform: translateX(15px); }
    75% { transform: translateX(-15px); }
  }

  .feedback {
    color: #52c4f5;
    font-weight: bold;
    margin-top: 1rem;
  }
</style>
