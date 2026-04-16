<script>
  export let form;
  let first_name = '';
  let last_name = '';
  let phone = '';
  let service = '';
  let caliper_color = '';
  let wheel_color = '';
  let additional_details = '';
  let date = '';

  let feedbackMessage = '';
  let buttonText = "Submit Booking";
  let isValid = true;

  const services = ["Caliper Restoration", "Custom Powder Coating", "Both"];
  const caliper_colors = ["Race Red", "Blue", "Green", "Yellow", "Other"];
  const wheel_colors = ["Matte Black", "Gloss Black", "Satin Black", "Silver", "Chrome", "Other"];

  // Button shake animation for invalid input
  function buttonShake() {
    isValid = false;
    setTimeout(() => isValid = true, 600);
  }

  // Form validation
  function validateForm(event) {
    // Check required fields
    if (!first_name || !last_name || !phone || !service || !date) {
      event.preventDefault();
      feedbackMessage = '⚠️ Please fill out all required fields';
      buttonShake();
      return false;
    }

    // Check if caliper color is required
    if ((service === "Caliper Restoration" || service === "Both") && !caliper_color) {
      event.preventDefault();
      feedbackMessage = '⚠️ Please select a caliper color';
      buttonShake();
      return false;
    }

    // Check if wheel color is required
    if ((service === "Custom Powder Coating" || service === "Both") && !wheel_color) {
      event.preventDefault();
      feedbackMessage = '⚠️ Please select a wheel color';
      buttonShake();
      return false;
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      event.preventDefault();
      feedbackMessage = '⚠️ Please enter a valid phone number';
      buttonShake();
      return false;
    }

    feedbackMessage = '';
    return true;
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
  {#if form && form.message}
    <div class="success-banner">
      ✓ {form.message}
    </div>
  {/if}

  <form action="?/submit" method="post" on:submit={validateForm}>
    <div class="form-group">
      <label for="first_name">First Name *</label>
      <input type="text" id="first_name" name="first_name" bind:value={first_name} />
    </div>
    <div class="form-group">
      <label for="last_name">Last Name *</label>
      <input type="text" id="last_name" name="last_name" bind:value={last_name} />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number *</label>
      <input type="tel" id="phone" name="phone" bind:value={phone} placeholder="(555) 123-4567" />
    </div>
    <div class="form-group">
      <label for="date">Appointment Date *</label>
      <input type="date" id="date" name="date" bind:value={date} />
    </div>
    <div class="form-group">
      <label for="service">Service Type *</label>
      <select id="service" name="service" bind:value={service}>
        <option value="" disabled selected>Select a service</option>
        {#each services as serviceOption}
          <option value={serviceOption}>{serviceOption}</option>
        {/each}
      </select>
    </div>

    {#if service === "Caliper Restoration" || service === "Both"}
      <div class="form-group slide-in">
        <label for="caliper_color">Caliper Color *</label>
        <select id="caliper_color" name="caliper_color" bind:value={caliper_color}>
          <option value="" disabled selected>Select a caliper color</option>
          {#each caliper_colors as color}
            <option value={color}>{color}</option>
          {/each}
        </select>
      </div>
    {/if}

    {#if service === "Custom Powder Coating" || service === "Both"}
      <div class="form-group slide-in">
        <label for="wheel_color">Wheel Color *</label>
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
      <textarea 
        id="additional_details" 
        name="additional_details" 
        bind:value={additional_details} 
        placeholder="Please provide the current condition of your wheels/calipers here in addition to the year, make, and model of your vehicle."
        rows="4"
      ></textarea>
    </div>

    <button type="submit" class="btn" class:shake={!isValid}>
      {buttonText}
    </button>
  </form>

  {#if feedbackMessage}
    <p class="feedback">{feedbackMessage}</p>
  {/if}
</section>

<style>
  .contact-section {
    max-width: 550px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #000;
    border-radius: 12px;
    color: #fff;
    text-align: center;
  }

  .business-info {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(82, 196, 245, 0.1);
    border: 1px solid rgba(82, 196, 245, 0.2);
    border-radius: 8px;
  }

  .business-info h1 {
    color: #52c4f5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .business-info p {
    margin: 0.5rem 0;
    color: #e0e0e0;
  }

  .success-banner {
    background: rgba(62, 225, 62, 0.15);
    color: #3ee13e;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #3ee13e;
    margin-bottom: 1.5rem;
    font-weight: 600;
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .slide-in {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  label {
    margin-bottom: 0.5rem;
    color: #52c4f5;
    font-weight: 600;
    font-size: 0.9rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 2px solid rgba(82, 196, 245, 0.3);
    border-radius: 6px;
    background-color: #1a1a1a;
    color: #fff;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  input:focus, select:focus, textarea:focus {
    border-color: #52c4f5;
    outline: none;
    box-shadow: 0 0 0 3px rgba(82, 196, 245, 0.1);
  }

  textarea {
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
  }

  .btn {
    padding: 1rem;
    background: #52c4f5;
    color: #000;
    border: 2px solid #52c4f5;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.05rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .btn:hover {
    background: #000;
    color: #52c4f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(82, 196, 245, 0.3);
  }

  .btn:active {
    transform: translateY(0);
  }

  /* Modern shake animation */
  .btn.shake {
    animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both;
    background: rgba(220, 38, 38, 0.2);
    border-color: #ef4444;
    color: #ef4444;
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-8px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(8px);
    }
  }

  .feedback {
    color: #ef4444;
    font-weight: 600;
    margin-top: 1rem;
    padding: 0.75rem;
    background: rgba(220, 38, 38, 0.15);
    border: 1px solid rgba(220, 38, 38, 0.3);
    border-radius: 6px;
    animation: slideDown 0.3s ease-out;
  }

  /* Mobile responsive */
  @media (max-width: 600px) {
    .contact-section {
      padding: 1.5rem;
    }

    .business-info h1 {
      font-size: 1.25rem;
    }

    input, select, textarea {
      font-size: 0.95rem;
    }

    .btn {
      font-size: 1rem;
    }
  }
</style>