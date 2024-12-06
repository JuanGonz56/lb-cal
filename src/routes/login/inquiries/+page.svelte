<script>
	import { onMount } from 'svelte';
	import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
	import { browser } from '$app/environment';
	import { getAuth } from 'firebase/auth';
	import { initializeApp } from 'firebase/app';
	import {
		PUBLIC_FIREBASE_API_KEY,
		PUBLIC_FIREBASE_AUTH_DOMAIN,
		PUBLIC_FIREBASE_PROJECT_ID,
		PUBLIC_FIREBASE_STORAGE_BUCKET,
		PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		PUBLIC_FIREBASE_APP_ID
	} from '$env/static/public';

	// Firebase configuration
	const firebaseConfig = {
		apiKey: PUBLIC_FIREBASE_API_KEY,
		authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: PUBLIC_FIREBASE_PROJECT_ID,
		storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		appId: PUBLIC_FIREBASE_APP_ID
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	let phoneNumber = '+1 714-555-9898';
	let verificationCode = '';
	let confirmationResult = null;
	let recaptchaVerifier = null;
	let feedbackMessage = '';
	let signedInUser = null;

	// Initialize RecaptchaVerifier
	const initializeRecaptcha = () => {
		if (browser && !recaptchaVerifier) {
			recaptchaVerifier = new RecaptchaVerifier(
				'recaptcha-container',
				{
					size: 'normal',
					callback: (response) => {
						console.log('reCAPTCHA solved:', response);
						feedbackMessage = 'reCAPTCHA solved. You can now proceed.';
					},
					'expired-callback': () => {
						console.log('reCAPTCHA expired. Please solve it again.');
						feedbackMessage = 'reCAPTCHA expired. Please solve it again.';
					}
				},
				auth
			);
			recaptchaVerifier.render();
		}
	};

	// Send verification code
	const sendVerificationCode = async () => {
		if (!phoneNumber) {
			feedbackMessage = 'Please enter a valid phone number.';
			return;
		}

		try {
			confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
			feedbackMessage = 'Verification code sent! Please check your phone.';
		} catch (error) {
			console.error('Error sending verification code:', error);
			feedbackMessage = 'Failed to send verification code. Please try again.';
		}
	};

	// Verify the code
	const verifyCode = async () => {
		if (!verificationCode) {
			feedbackMessage = 'Please enter the verification code.';
			return;
		}

		try {
			const result = await confirmationResult.confirm(verificationCode);
			signedInUser = result.user;
			feedbackMessage = 'Phone number verified successfully! You are now logged in.';
		} catch (error) {
			console.error('Error verifying code:', error);
			feedbackMessage = 'Invalid verification code. Please try again.';
		}
	};

	onMount(() => {
		initializeRecaptcha();
	});
</script>

<section>
	<h1>Login with Phone Number</h1>
	<div>
		<label for="phone-number">Phone Number:</label>
		<input type="tel" id="phone-number" bind:value={phoneNumber} placeholder="+1 555-555-5555" />

		<div id="recaptcha-container"></div>

		<button on:click={sendVerificationCode}>Send Verification Code</button>
	</div>

	{#if confirmationResult}
		<div>
			<label for="verification-code">Verification Code:</label>
			<input type="text" id="verification-code" bind:value={verificationCode} placeholder="Enter code" />
			<button on:click={verifyCode}>Verify Code</button>
		</div>
	{/if}

	<p>{feedbackMessage}</p>
</section>

<style>
	section {
		max-width: 600px;
		margin: 0 auto;
		padding: 20px;
		background: #000;
		color: #fff;
		border-radius: 8px;
		text-align: center;
	}
	input {
		width: 100%;
		padding: 10px;
		margin: 10px 0;
		border: 1px solid #52c4f5;
		border-radius: 4px;
		background: #454a4b;
		color: #fff;
	}
	button {
		background-color: #52c4f5;
		color: #000;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-weight: bold;
	}
	button:hover {
		background-color: #454a4b;
		color: #52c4f5;
	}
</style>
