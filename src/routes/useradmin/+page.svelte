<script>
  import { auth } from '$lib/auth'; // Import Firebase or your authentication setup
  import { onMount } from 'svelte';

  let email = '';
  let password = '';

  async function login() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect to admin dashboard or inquiries page after successful login
      window.location.href = '/admin/inquiries';
    } catch (error) {
      console.error("Login failed", error.message);
    }
  }
</script>

<main>
  <h1>Admin Login</h1>
  <form on:submit|preventDefault={login}>
    <label>Email</label>
    <input type="email" bind:value={email} required />
    
    <label>Password</label>
    <input type="password" bind:value={password} required />
    
    <button type="submit">Login</button>
  </form>
</main>

<style>
  /* Add some basic styling here */
</style>
