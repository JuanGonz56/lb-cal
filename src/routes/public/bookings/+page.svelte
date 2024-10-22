<script>
    // Form data variables
    let firstName = '';
    let lastName = '';
    let phoneNumber = '';
    let serviceType = '';
    let caliperColor = '';
    let wheelColor = '';
    let message = '';
    let appointmentDate = ''; // Date field

    // Available service options
    const services = ["Caliper Restoration", "Custom Powder Coating", "Both"];

    // Available caliper color options
    const caliperColors = ["Red", "Blue", "Green", "Yellow", "Other"];

    // Available wheel color options
    const wheelColors = ["Matte Black", "Gloss Black", "Satin Black", "Silver", "Chrome", "Other"];
</script>

<section class="contact-section">
    <div class="business-info">
        <h1>Business Hours</h1>
        <p>Monday - Friday: 8:00AM - 5:00PM</p>
        <p>Saturday - Sunday: Appointment Only</p>
        <p><strong>Phone Number:</strong> (562) 350-7925</p>
        <p><strong>Email:</strong> lbcalipers2020@gmail.com</p>
    </div>

    <form action="/api/bookings" method="POST">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" bind:value={firstName} required />
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" bind:value={lastName} required />
        </div>

        <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" bind:value={phoneNumber} required />
        </div>

        <div class="form-group">
            <label for="appointmentDate">Appointment Date</label>
            <input type="date" id="appointmentDate" bind:value={appointmentDate} required />
        </div>

        <div class="form-group">
            <label for="serviceType">Service Type</label>
            <select id="serviceType" bind:value={serviceType} required>
                <option value="" disabled selected>Select a service</option>
                {#each services as service}
                    <option value={service}>{service}</option>
                {/each}
            </select>
        </div>

        <div class="form-group">
            <label for="caliperColor">Caliper Color</label>
            <select id="caliperColor" bind:value={caliperColor} required>
                <option value="" disabled selected>Select a caliper color</option>
                {#each caliperColors as color}
                    <option value={color}>{color}</option>
                {/each}
            </select>
            {#if caliperColor === 'Other'}
                <input type="text" placeholder="Enter custom caliper color" />
            {/if}
        </div>

        <div class="form-group">
            <label for="wheelColor">Wheel Color</label>
            <select id="wheelColor" bind:value={wheelColor} required>
                <option value="" disabled selected>Select a wheel color</option>
                {#each wheelColors as color}
                    <option value={color}>{color}</option>
                {/each}
            </select>
            {#if wheelColor === 'Other'}
                <input type="text" placeholder="Enter custom wheel color" />
            {/if}
        </div>

        <div class="form-group">
            <label for="message">Additional Details</label>
            <textarea id="message" bind:value={message} required placeholder="Please provide the current condition of your wheels/calipers here in addition to the year, make, and model of your vehicle."></textarea>
        </div>

        <button type="submit" class="btn">Submit</button>
    </form>
</section>

<style>
    .contact-section {
        max-width: 600px;
        margin: 0 auto;
        padding: .1rem;
        background-color: #000000;
        border-radius: 8px;
        color: rgb(255, 255, 255);
    }

    .business-info {
        text-align: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        color: #52c4f5;
        margin-bottom: 0.5rem;
    }

    .business-info p {
        margin: 0.5rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-align: left;
        width: 100%;
    }

    input, select, textarea {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #52c4f5;
        border-radius: 4px;
        background-color: #333;
        color: white;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        background-color: #52c4f5;
        color: black;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: black;
        color: #52c4f5;
        border: 1.5px solid #52c4f5;
    }
</style>
