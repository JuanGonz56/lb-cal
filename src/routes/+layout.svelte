<script>
	import Forbidden from '$lib/Forbidden.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import PageFooter from '$lib/PageFooter.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { FirebaseApp } from "sveltefire";
	import { initializeApp } from "firebase/app";
	import { getFirestore } from "firebase/firestore";
	import { getAuth } from "firebase/auth";
	import { SignedIn, SignedOut } from "sveltefire";


	//export let data;



	import {
		PUBLIC_FIREBASE_API_KEY,
		PUBLIC_FIREBASE_AUTH_DOMAIN,
		PUBLIC_FIREBASE_PROJECT_ID,
		PUBLIC_FIREBASE_STORAGE_BUCKET,
		PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		PUBLIC_FIREBASE_APP_ID,
	} from "$env/static/public";

	// Firebase configuration
	const firebaseConfig = {
		apiKey: PUBLIC_FIREBASE_API_KEY,
		authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: PUBLIC_FIREBASE_PROJECT_ID,
		storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		appId: PUBLIC_FIREBASE_APP_ID,
	};
	
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const firestore = getFirestore(app);
	const auth = getAuth(app);

	// Logo source
	let logoSrc = '/images/lb-caliper-logo-2.png';

	// Using reactive store safely
	$: currentPath = $page?.url?.pathname ?? '';

	// Check if it's a public route
	$: isPublicRoute = currentPath.startsWith('/public');

	// Function to scroll to the top
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Function to handle scroll visibility of the button
	function handleScroll() {
		const scrollTopBtn = document.getElementById("scrollTopBtn");
		if (window.scrollY > 300) {
			scrollTopBtn.style.display = "block"; // Show button when scrolling down
		} else {
			scrollTopBtn.style.display = "none";  // Hide button if scrolled up
		}
	}

	// Add the scroll event listener when the page is mounted
	onMount(() => {
		window.addEventListener("scroll", handleScroll);
	});
</script>

<FirebaseApp {auth} {firestore}>
    <PageHeader {auth} />

    <!-- Public Route Logic -->
    {#if isPublicRoute}
        <!-- Clickable Logo to redirect to the /public page -->
        <div class="logo-container">
            <a href="/public">
                <img src={logoSrc} alt="LB Calipers Logo" />
            </a>
        </div>

        <!-- Button Section -->
        <div class="cta">
            <a href="/public" class="btn">Home</a>
            <a href="/public/gallery" class="btn">Gallery</a>
            <a href="/public/bookings" class="btn">Booking</a>
            <a href="/inquiries" class="btn">Inquiries</a>
        </div>

        <!-- Scroll to Top Button -->
        <button
            id="scrollTopBtn"
            class="scroll-top-btn"
            on:click={scrollToTop}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 19V7M5 12L12 5L19 12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    {/if}

    <!-- Private Route Logic -->
    {#if currentPath === "/inquirie" || currentPath === "/finalizeBoo"}
        <SignedIn let:user>
            <!-- Authorized Content -->
            <slot />
        </SignedIn>
        <SignedOut>
            <!-- Unauthorized Access Message -->
            <div class="forbidden-container">
                <!-- Clickable Logo -->
                <a href="/public">
                    <img src="/images/lb-caliper-logo-2.png" alt="LB Calipers Logo" class="logo-button" />
                </a>

                <!-- Unauthorized Access Messages -->
                <p class="forbidden-message">This page is for authorized users only!</p>
                <p class="redirect-message">Please Click the Logo to go back :)</p>
            </div>
        </SignedOut>
    {:else}
        <!-- Default Content Slot -->
        <slot />
    {/if}

    <!-- Footer Section with Social Media Buttons -->
    {#if isPublicRoute}
        <div class="footer">
            <p>Follow us on social media:</p>
            <div class="social-btns">
                <a href="https://www.instagram.com/lbcalipers/" target="_blank" class="social-btn">
                    <i class="fab fa-instagram"></i> <!-- Instagram Icon -->
                </a>
                <a href="https://www.google.com/maps" target="_blank" class="social-btn">
                    <i class="fas fa-map-marker-alt"></i> <!-- Google Maps Icon -->
                </a>
            </div>
        </div>
    {/if}

    <PageFooter {auth} />
</FirebaseApp>


<style>
	/* Style for centering logo on public routes */
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
		background-color: black; /* Adjust this if needed */
	}

	.logo-container img {
		max-width: 200px;
		height: auto;
		cursor: pointer;
		transition: transform 0.3s ease;
	}

	.logo-container img:hover {
		transform: scale(1.3);
	}

	.cta {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.cta a {
		padding: 1rem 2rem;
		background-color: #52c4f5;
		color: black;
		text-decoration: none;
		border-radius: 4px;
		font-weight: bold;
		transition: background-color 0.3s ease;
	}

	.cta a:hover {
		background-color: black;
		color: #66CCFF;
		border: 1.5px solid #52c4f5;
	}

	.footer {
		text-align: center;
		padding: 1rem 0;
		background-color: black;
		color: white;
	}

	.footer .social-btns {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.footer .social-btn {
		width: 60px;
		height: 60px;
		background-color: #52c4f5;
		color: black;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		transition: background-color 0.3s ease, transform 0.3s ease;
	}

	.footer .social-btn:hover {
		background-color: black;
		color: #52c4f5;
		transform: rotate(360deg);
		border: 1.5px solid #52c4f5;
	}

	.scroll-top-btn {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 50px;
		height: 50px;
		background-color: #52c4f5;
		color: black;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		display: none;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s ease, transform 0.3s ease;
	}

	.scroll-top-btn:hover {
		background-color: black;
		color: #52c4f5;
		transform: scale(1.2);
		border: 1.5px solid #52c4f5;
	}

	.scroll-top-btn svg {
		width: 24px;
		height: 24px;
		transform: translateX(-2.5px);
	}

	/* Center the content on the page */
	.forbidden-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100vh;
		background-color: #000000; /* Dark background for contrast */
		color: #f5f5f5; /* Light text for readability */
	}

	/* Style the logo */
	.forbidden-container img {
		max-width: 200px;
		height: auto;
		margin-bottom: 20px;
	}

	/* Style the message */
	.forbidden-message {
		font-size: 24px;
		font-weight: bold;
		color: #52c4f5; /* Match the branding color */
		margin: 0;
		padding: 0 20px;
	}

	/* Styling for the Logo Button */
.logo-button {
    max-width: 200px;
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease; /* Smooth hover effect */
    margin-bottom: 15px;
}

.logo-button:hover {
    transform: scale(1.3); /* Enlarge on hover */
}

/* Styling for the Messages */
.forbidden-message {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #52c4f5; /* LB Calipers Blue */
}

.redirect-message {
    font-size: 16px;
    color: #66ccff; /* Lighter shade of blue */
    margin-top: 5px;
}
</style>

