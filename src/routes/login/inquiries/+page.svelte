<script>
	import { onMount } from 'svelte';
	import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
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

	let phoneNumber = '';
	let verificationCode = '';
	let confirmationResult = null;
	let recaptchaVerifier = null;
	let feedbackMessage = '';
	let signedInUser = null;
	let step = 1; // 1 = enter phone, 2 = enter code
	let isLoading = false;

	// Initialize RecaptchaVerifier
	const initializeRecaptcha = () => {
		if (browser && !recaptchaVerifier) {
			try {
				recaptchaVerifier = new RecaptchaVerifier(
					'recaptcha-container',
					{
						size: 'normal',
						callback: (response) => {
							console.log('reCAPTCHA solved');
							feedbackMessage = 'reCAPTCHA verified. Ready to send code.';
						},
						'expired-callback': () => {
							console.log('reCAPTCHA expired');
							feedbackMessage = 'reCAPTCHA expired. Please solve it again.';
							recaptchaVerifier = null;
							initializeRecaptcha();
						}
					},
					auth
				);
				recaptchaVerifier.render();
			} catch (error) {
				console.error('Error initializing reCAPTCHA:', error);
				feedbackMessage = 'Error loading reCAPTCHA. Please refresh the page.';
			}
		}
	};

	// Send verification code
	const sendVerificationCode = async () => {
		// Basic phone validation
		if (!phoneNumber || phoneNumber.length < 10) {
			feedbackMessage = 'Please enter a valid phone number with country code (e.g., +1 555-555-5555).';
			return;
		}

		// Format phone number to ensure it has +
		let formattedPhone = phoneNumber.trim();
		if (!formattedPhone.startsWith('+')) {
			formattedPhone = '+' + formattedPhone;
		}

		isLoading = true;
		feedbackMessage = 'Sending verification code...';

		try {
			confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier);
			feedbackMessage = 'Verification code sent! Please check your phone.';
			step = 2;
		} catch (error) {
			console.error('Error sending verification code:', error);
			
			// Handle specific error cases
			if (error.code === 'auth/invalid-phone-number') {
				feedbackMessage = 'Invalid phone number format. Use format: +1 555-555-5555';
			} else if (error.code === 'auth/too-many-requests') {
				feedbackMessage = 'Too many attempts. Please try again later.';
			} else {
				feedbackMessage = `Failed to send code: ${error.message}`;
			}
			
			// Reset reCAPTCHA on error
			if (recaptchaVerifier) {
				recaptchaVerifier.clear();
				recaptchaVerifier = null;
				setTimeout(() => initializeRecaptcha(), 100);
			}
		} finally {
			isLoading = false;
		}
	};

	// Verify the code
	const verifyCode = async () => {
		if (!verificationCode || verificationCode.length !== 6) {
			feedbackMessage = 'Please enter the 6-digit verification code.';
			return;
		}

		isLoading = true;
		feedbackMessage = 'Verifying code...';

		try {
			const result = await confirmationResult.confirm(verificationCode);
			signedInUser = result.user;
			
			// Optional: Check if user is authorized (only specific UIDs can access)
			const authorizedUIDs = [
				'Vh9DQKhZqYNJhpAGAA6W1AnymF82', // Replace with your actual UIDs
			];
			
			// Comment out these lines if you want to allow any phone number to log in:
			// if (!authorizedUIDs.includes(result.user.uid)) {
			// 	await auth.signOut();
			// 	feedbackMessage = 'Unauthorized access. This account is not authorized.';
			// 	isLoading = false;
			// 	return;
			// }
			
			feedbackMessage = 'Successfully logged in! Redirecting...';
			
			// Redirect to inquiries page after successful login
			setTimeout(() => {
				goto('/inquiries');
			}, 1000);
		} catch (error) {
			console.error('Error verifying code:', error);
			
			if (error.code === 'auth/invalid-verification-code') {
				feedbackMessage = 'Invalid verification code. Please try again.';
			} else if (error.code === 'auth/code-expired') {
				feedbackMessage = 'Verification code expired. Please request a new one.';
				step = 1;
				verificationCode = '';
			} else {
				feedbackMessage = `Verification failed: ${error.message}`;
			}
		} finally {
			isLoading = false;
		}
	};

	// Go back to phone entry
	const goBack = () => {
		step = 1;
		verificationCode = '';
		confirmationResult = null;
		feedbackMessage = '';
	};

	onMount(() => {
		initializeRecaptcha();
	});
</script>

<section>
	<div class="login-container">
		<h1>Admin Login</h1>
		<p class="subtitle">Sign in with your phone number</p>

		{#if step === 1}
			<!-- Phone Number Entry -->
			<div class="input-group">
				<label for="phone-number">Phone Number</label>
				<input
					type="tel"
					id="phone-number"
					bind:value={phoneNumber}
					placeholder="+1 555-555-5555"
					disabled={isLoading}
				/>
			</div>

			<div id="recaptcha-container"></div>

			<button 
				class="btn-primary" 
				on:click={sendVerificationCode}
				disabled={isLoading || !phoneNumber}
			>
				{isLoading ? 'Sending...' : 'Send Verification Code'}
			</button>
		{:else if step === 2}
			<!-- Verification Code Entry -->
			<div class="input-group">
				<label for="verification-code">Verification Code</label>
				<input
					type="text"
					id="verification-code"
					bind:value={verificationCode}
					placeholder="Enter 6-digit code"
					maxlength="6"
					disabled={isLoading}
				/>
			</div>

			<button 
				class="btn-primary" 
				on:click={verifyCode}
				disabled={isLoading || verificationCode.length !== 6}
			>
				{isLoading ? 'Verifying...' : 'Verify Code'}
			</button>

			<button class="btn-secondary" on:click={goBack} disabled={isLoading}>
				← Back to Phone Entry
			</button>
		{/if}

		{#if feedbackMessage}
			<p class="feedback" class:error={feedbackMessage.includes('Failed') || feedbackMessage.includes('Invalid') || feedbackMessage.includes('Error')} class:success={feedbackMessage.includes('Successfully') || feedbackMessage.includes('sent')}>
				{feedbackMessage}
			</p>
		{/if}
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000;
		padding: 2rem 1rem;
	}

	.login-container {
		max-width: 450px;
		width: 100%;
		padding: 2.5rem;
		background: #1a1a1a;
		border: 2px solid #52c4f5;
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(82, 196, 245, 0.2);
	}

	h1 {
		text-align: center;
		color: #52c4f5;
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}

	.subtitle {
		text-align: center;
		color: #999;
		margin-bottom: 2rem;
		font-size: 0.95rem;
	}

	.input-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		color: #52c4f5;
		margin-bottom: 0.5rem;
		font-weight: 600;
		font-size: 0.9rem;
	}

	input {
		width: 100%;
		padding: 12px 16px;
		border: 2px solid #454a4b;
		border-radius: 8px;
		background: #0a0a0a;
		color: #fff;
		font-size: 1rem;
		transition: all 0.3s ease;
		box-sizing: border-box;
	}

	input:focus {
		outline: none;
		border-color: #52c4f5;
		box-shadow: 0 0 0 3px rgba(82, 196, 245, 0.1);
	}

	input:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	#recaptcha-container {
		margin: 1.5rem 0;
		display: flex;
		justify-content: center;
	}

	.btn-primary,
	.btn-secondary {
		width: 100%;
		padding: 12px 24px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: bold;
		font-size: 1rem;
		transition: all 0.3s ease;
		margin-bottom: 0.75rem;
	}

	.btn-primary {
		background-color: #52c4f5;
		color: #000;
	}

	.btn-primary:hover:not(:disabled) {
		background-color: #3aa8d8;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(82, 196, 245, 0.3);
	}

	.btn-primary:disabled {
		background-color: #454a4b;
		color: #666;
		cursor: not-allowed;
	}

	.btn-secondary {
		background-color: transparent;
		color: #52c4f5;
		border: 2px solid #52c4f5;
	}

	.btn-secondary:hover:not(:disabled) {
		background-color: rgba(82, 196, 245, 0.1);
	}

	.feedback {
		margin-top: 1.5rem;
		padding: 12px 16px;
		border-radius: 8px;
		text-align: center;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.feedback.success {
		background-color: rgba(62, 225, 62, 0.15);
		color: #3ee13e;
		border: 1px solid rgba(62, 225, 62, 0.3);
	}

	.feedback.error {
		background-color: rgba(220, 43, 37, 0.15);
		color: #ff6b6b;
		border: 1px solid rgba(220, 43, 37, 0.3);
	}

	.feedback:not(.success):not(.error) {
		background-color: rgba(82, 196, 245, 0.15);
		color: #52c4f5;
		border: 1px solid rgba(82, 196, 245, 0.3);
	}

	@media (max-width: 480px) {
		.login-container {
			padding: 1.5rem;
		}

		h1 {
			font-size: 1.5rem;
		}

		input,
		.btn-primary,
		.btn-secondary {
			font-size: 0.95rem;
		}
	}
</style>