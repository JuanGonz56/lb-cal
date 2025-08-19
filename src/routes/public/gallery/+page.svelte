<script>
	// Sample data for images in each category
	const calipersImages = [
		'/images/porsche-green.jpg',
		'/images/calipers2.jpg',
		'/images/calipers3.jpg',
		'/images/calipers4.jpg',
		'/images/calipers5.jpg',
		'/images/lambo-brakes-yellow.png',
		'/images/calipers7.jpg',
		'/images/calipers8.jpg',
		'/images/calipers9.jpg',
		'/images/calipers10.jpg',
		'/images/calipers11.jpg',
		'/images/calipers12.jpg',
		'/images/calipers13.jpg',
		'/images/calipers14.jpg',
		'/images/calipers15.jpg'
	];

	const wheelsImages = [
		'/images/wheel1.jpg',
		'/images/porsche-gunmetal-wheels.png',
		'/images/wheel3.jpg',
		'/images/wheel4.jpg',
		'/images/bmw-glossblack-wheels.jpg',
		'/images/wheel6.jpg',
		'/images/wheel7.jpg',
		'/images/wheel8.jpg',
		'/images/wheel9.jpg',
		'/images/wheel10.jpg',
		'/images/wheel11.jpg',
		'/images/wheel12.jpg',
		'/images/wheel13.jpg'
	];

	let activeCaliperIndex = 0;
	let activeWheelIndex = 0;

	function nextImage(category) {
		if (category === 'calipers') {
			activeCaliperIndex = (activeCaliperIndex + 1) % calipersImages.length;
		} else if (category === 'wheels') {
			activeWheelIndex = (activeWheelIndex + 1) % wheelsImages.length;
		}
	}

	function prevImage(category) {
		if (category === 'calipers') {
			activeCaliperIndex = (activeCaliperIndex - 1 + calipersImages.length) % calipersImages.length;
		} else if (category === 'wheels') {
			activeWheelIndex = (activeWheelIndex - 1 + wheelsImages.length) % wheelsImages.length;
		}
	}

	function setMainImage(index, category) {
		if (category === 'calipers') {
			activeCaliperIndex = index;
		} else if (category === 'wheels') {
			activeWheelIndex = index;
		}
	}
</script>

<div class="gallery-container">
	<!-- Calipers Section -->
	<section class="gallery-section">
		<h2>Caliper Showcase</h2>
		<p>
			Calipers will be sanded down, washed, scuffed and air-brushed using high-temp ceramic paint.
		</p>

		<div class="carousel">
			<button class="arrow" on:click={() => prevImage('calipers')}>&#9664;</button>
			<img src={calipersImages[activeCaliperIndex]} alt="Caliper Image {activeCaliperIndex + 1}" class="main-image" />
			<button class="arrow" on:click={() => nextImage('calipers')}>&#9654;</button>
		</div>

		<div class="thumbnails">
			{#each calipersImages as img, index}
				<button
					type="button"
					class:selected={index === activeCaliperIndex}
					on:click={() => setMainImage(index, 'calipers')}
				>
					<img src={img} alt="Caliper Thumbnail {index + 1}" />
				</button>
			{/each}
		</div>
	</section>

	<!-- Wheels Section -->
	<section class="gallery-section">
		<h2>Wheel Showcase</h2>
		<p>
			Powder coating is a high-end procedure we do on your wheels. Providing a durable,
			chip-resistant finish that protects against rust and corrosion.
		</p>

		<div class="carousel">
			<button class="arrow" on:click={() => prevImage('wheels')}>&#9664;</button>
			<img src={wheelsImages[activeWheelIndex]} alt="Wheel Image {activeWheelIndex + 1}" class="main-image" />
			<button class="arrow" on:click={() => nextImage('wheels')}>&#9654;</button>
		</div>

		<div class="thumbnails">
			{#each wheelsImages as img, index}
				<button
					type="button"
					class:selected={index === activeWheelIndex}
					on:click={() => setMainImage(index, 'wheels')}
				>
					<img src={img} alt="Wheel Thumbnail {index + 1}" />
				</button>
			{/each}
		</div>
	</section>

	<!-- Book Now Button -->
	<div class="book-now-container">
		<a href="/public/bookings" class="btn">Book Now</a>
	</div>
</div>

<style>
	.gallery-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
	}

	.gallery-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    margin-bottom: 3rem;
	}

	.carousel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 600px
	}

	.main-image {
		width: 100%;
		max-width: 450px;
		height: auto;
		border-radius: 10px;
		border: 3px solid #52c4f5;
		object-fit: cover;
	}

	.arrow {
		position: absolute;
		top: 50%;
		background: rgba(0, 0, 0, 0.6);
		color: #52c4f5;
		border: none;
		cursor: pointer;
		font-size: 2rem;
		padding: 0.5rem 1rem;
		transform: translateY(-50%);
		z-index: 10;
	}

	.arrow:hover {
		background: rgba(11, 80, 108, 0.447);
	}

	.arrow:first-of-type {
		left: 0;
	}

	.arrow:last-of-type {
		right: 0;
	}

	.thumbnails {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		overflow-x: auto;
		padding: 1rem 0;
		max-width: 100%;
	}

	.thumbnails button {
		border: none;
		padding: 0;
		background: none;
	}

	.thumbnails img {
		width: 80px;
		height: 80px;
		cursor: pointer;
		border: 3px solid transparent;
		border-radius: 5px;
		object-fit: cover;
	}

	.thumbnails button.selected img {
		border-color: #52c4f5;
	}

	.book-now-container {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}

	.btn {
		padding: 1rem 2rem;
		background-color: #52c4f5;
		color: black;
		text-decoration: none;
		border-radius: 4px;
		font-weight: bold;
		transition: background-color 0.3s ease;
	}

	.btn:hover {
		background-color: black;
		color: #52c4f5;
		border: 1.5px solid #52c4f5;
	}
</style>
