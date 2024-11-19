<script>
    import { onMount } from 'svelte';

    // Form data variables
    let firstName = '';
    let lastName = '';
    let phoneNumber = '';
    let serviceType = '';
    let caliperColor = '';
    let wheelColor = '';
    let message = '';
    let appointmentDate = ''; // Date field

    // Feedback message
    let feedbackMessage = '';
    let buttonText = "Submit";
    let isValid = true;

    // Available service options
    const services = ["Caliper Restoration", "Custom Powder Coating", "Both",];

    // Available caliper color options
    const caliperColors = ["Race Red", "Blue", "Green", "Yellow", "Other"];

    // Available wheel color options
    const wheelColors = ["Matte Black", "Gloss Black", "Satin Black", "Silver", "Chrome", "Other"];

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Check for required fields, taking into account the serviceType
        if (!firstName || !phoneNumber || !serviceType || !appointmentDate) {
            feedbackMessage = "Please input all the fields";
            buttonShake();
            return;
        }

        // If the service type is related to calipers or wheels, ensure the colors are selected
        if ((serviceType === "Caliper Restoration" || serviceType === "Both") && !caliperColor) {
            feedbackMessage = "Please select a caliper color";
            buttonShake();
            return;
        }

        if ((serviceType === "Custom Powder Coating" || serviceType === "Both") && !wheelColor) {
            feedbackMessage = "Please select a wheel color";
            buttonShake();
            return;
        }

        // If all required fields are filled, display success message and reset form
        feedbackMessage = "Thanks for booking! We will contact you as soon as possible and confirm your appointment.";
        buttonText = "👍"; // Thumbs-up icon for success
        setTimeout(() => {
            resetForm();
            buttonText = "Submit";
        }, 2000);
    }

    // Function to reset form fields
    function resetForm() {
        firstName = '';
        lastName = '';
        phoneNumber = '';
        serviceType = '';
        caliperColor = '';
        wheelColor = '';
        message = '';
        appointmentDate = '';
    }

    // Shake button animation on error
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

    <form on:submit={handleSubmit}>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" bind:value={firstName} />
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" bind:value={lastName} />
        </div>

        <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" bind:value={phoneNumber} />
        </div>

        <div class="form-group">
            <label for="appointmentDate">Appointment Date</label>
            <input type="date" id="appointmentDate" bind:value={appointmentDate} />
        </div>

        <div class="form-group">
            <label for="serviceType">Service Type</label>
            <select id="serviceType" bind:value={serviceType}>
                <option value="" disabled selected>Select a service</option>
                {#each services as service}
                    <option value={service}>{service}</option>
                {/each}
            </select>
        </div>

        {#if serviceType === "Caliper Restoration" || serviceType === "Both"}
            <div class="form-group">
                <label for="caliperColor">Caliper Color</label>
                <select id="caliperColor" bind:value={caliperColor}>
                    <option value="" disabled selected>Select a caliper color</option>
                    {#each caliperColors as color}
                        <option value={color}>{color}</option>
                    {/each}
                </select>
                {#if caliperColor === 'Other'}
                    <input type="text" placeholder="Enter custom caliper color" />
                {/if}
            </div>
        {/if}

        {#if serviceType === "Custom Powder Coating" || serviceType === "Both"}
            <div class="form-group">
                <label for="wheelColor">Wheel Color</label>
                <select id="wheelColor" bind:value={wheelColor}>
                    <option value="" disabled selected>Select a wheel color</option>
                    {#each wheelColors as color}
                        <option value={color}>{color}</option>
                    {/each}
                </select>
                {#if wheelColor === 'Other'}
                    <input type="text" placeholder="Enter custom wheel color" />
                {/if}
            </div>
        {/if}

        <div class="form-group">
            <label for="message">Additional Details</label>
            <textarea id="message" bind:value={message} placeholder="Please provide the current condition of your wheels/calipers here in addition to the year, make, and model of your vehicle."></textarea>
        </div>

        <button type="submit" class="btn" class:is-invalid={!isValid}>{buttonText}</button>
    </form>

    <!-- Feedback Message -->
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
        background-color: #4f4d4d;
        color: #fff;
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

    /* Shake animation for error */
    .is-invalid {
        animation: shake 0.4s ease-in-out;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
    }

    .feedback {
        color: #52c4f5;
        font-weight: bold;
        margin-top: 1rem;
    }
</style>
