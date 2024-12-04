<script>
    let email = '';
    let password = '';
  
    function handleLogin() {
      // Add logic to handle user authentication
      console.log('Logging in with', email, password);
    }
  </script>
  
  <style>
    .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #000000;
      color: #52c4f5;
    }
  
    .logo {
      width: 200px;
      margin-bottom: 20px;
    }
  
    .input-field {
      width: 80%;
      max-width: 400px;
      margin-bottom: 15px;
      padding: 10px;
      background-color: #2c2a2a;
      border: 1px solid #52c4f5;
      color: #fff;
      border-radius: 5px;
    }
  
    .input-field:focus {
      border-color: #e3c517;
      outline: none;
    }
  
    .button {
      width: 80%;
      max-width: 400px;
      padding: 10px;
      background-color: #52c4f5;
      border: none;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  
    .button:hover {
      background-color: #454a4b;
    }
  </style>
  
  <div class="login-container">
    <img src="/images/lb-caliper-logo-2.png" alt="LB Calipers Logo" class="logo" />
  
    <input
      type="email"
      placeholder="Email"
      bind:value={email}
      class="input-field"
      required
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      class="input-field"
      required
    />
  
    <button on:click={handleLogin} class="button">
      Sign In
    </button>
  </div>
  