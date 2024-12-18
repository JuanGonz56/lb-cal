<script>
  import { goto } from '$app/navigation';
</script>

<style>
  /* Center the content on the page */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #000000; /* Optional: dark background */
    color: #ffffff; /* Optional: light text */
  }

  /* Style for the welcome message */
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  /* Style for the button containing the logo */
  .logo-button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    transition: transform 0.3s ease-in-out;
  }

  .logo-button:hover {
    transform: scale(1.2);
  }

  /* Style for the logo */
  .logo {
    width: 200px; /* Default size */
    display: block; /* Ensure proper spacing */
  }
</style>

<div class="container">
  <!-- Welcome Message -->
  <h1>Welcome to LB Calipers!</h1>

  <!-- Logo as a button that redirects to the home page -->
  <button class="logo-button" on:click={() => goto('/public')} aria-label="Go to Home Page">
    <img 
      src="/images/lb-caliper-logo-2.png" 
      alt="LB Calipers Logo" 
      class="logo"
    />
  </button>
  
  <h1>Please click the logo to proceed.</h1>
</div>
