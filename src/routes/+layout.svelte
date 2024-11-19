<script>
	import Forbidden from '$lib/Forbidden.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import PageFooter from '$lib/PageFooter.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

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

<style>
	/* Style for centering logo on public routes */
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
		background-color: black; /* Adjust this if needed */
	}

	/* Logo styling */
	.logo-container img {
		max-width: 200px; /* Adjust size as needed */
		height: auto;
		cursor: pointer; /* Makes the logo look clickable */
		transition: transform 0.3s ease; /* Smooth transition for hover */
	}

	/* LB Logo enlargement on hover */
	.logo-container img:hover {
		transform: scale(1.3); /* Enlarge the logo on hover */
	}

	/* Button Section Styling */
	.cta {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.cta a {
		padding: 1rem 2rem;
		background-color: #52c4f5; /* Lighter blue */
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

	/* Footer Social Media Icons */
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
		transform: rotate(360deg); /* Rotate 360 degrees on hover */
		border: 1.5px solid #52c4f5;
	}

	/* Scroll to Top Button */
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
		display: none; /* Initially hidden */
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s ease, transform 0.3s ease;
	}

	.scroll-top-btn:hover {
		background-color: black;
		color: #52c4f5;
		transform: scale(1.2); /* Slightly enlarge on hover */
		border: 1.5px solid #52c4f5;
	}

	.scroll-top-btn svg {
		width: 24px;
		height: 24px;
		transform: translateX(-2.5px);

	}
</style>

<PageHeader />

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

{#if data.grant_access}
	<slot />
{:else}
	<Forbidden />
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

<PageFooter />

<pre> {JSON.stringify(data, null, 2)} </pre>
