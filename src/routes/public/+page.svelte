
<script>
  // Backend or configuration-provided dimming value (0 = no dim, 1 = full dim)
  let dimmingValue = 0.6; // Set the desired default dimming value here (e.g., 0.6 = 60% dim)

  // Function to convert dimming value to box-shadow opacity
  function getDimmingShadow(value) {
    const dimOpacity = 1 - value; // Calculate dimming intensity
    return `0 0 30px rgba(10, 10, 10, ${dimOpacity})`; // Apply shadow with adjustable opacity
  }

  // Service data
  const services = [
    {
      name: "Caliper Restoration",
      description: "At LB Calipers, our brake restoration service is focused on enhancing the appearance of your vehicle's calipers. Over time, calipers can become corroded or dull due to exposure to road elements. We disassemble, clean, and restore each caliper, applying high-temperature paint that resists fading, peeling, and cracking. With a wide range of colors available, you can customize your calipers to complement your vehicle’s style. Each restoration is finished with a durable clear coat for long-lasting protection, ensuring your calipers look fresh for years to come.",
      images: ["/images/lambo-brakes-yellow.png", "/images/cyber-red.jpg", "/images/porshe-green.jpg"]
    },
    {
      name: "Custom Powder Coating",
      description: "Our custom powder coating service offers a superior finish for wheels. Powder coating is more durable than traditional paint, providing a thick, chip-resistant layer that stands up to wear and tear. We offer a wide variety of colors and finishes, from glossy to matte, to give your vehicle a unique, custom look. The process includes cleaning and prepping the surface, applying the powder electrostatically, and curing it in a high-temperature oven for a smooth, long-lasting finish. Powder coating not only enhances aesthetics but also adds protection against rust and corrosion.",
      images: ["/images/porsche-gunmetal-wheels.png", "/images/porsche-glossblack-wheels.jpg", "/images/bmw-glossblack-wheels.jpg"]
    },
    {
      name: "Window Tinting (Coming soon)",
      description: "We are excited to soon offer window tinting services at LB Calipers. This upcoming service will enhance the look of your vehicle while providing benefits like UV protection, heat reduction, and privacy. Stay tuned for the official launch of this service.",
      images: ["/images/tint-service.jpg"]
    }
  ];

  let activeIndex = 0;

  function cycleImages(serviceIndex) {
    setInterval(() => {
      services[serviceIndex].activeIndex =
        (services[serviceIndex].activeIndex + 1) % services[serviceIndex].images.length;
    }, 3000); // Adjust the delay here (e.g., 3000ms = 3 seconds)
  }

  services.forEach((service, index) => {
    service.activeIndex = 0;
    cycleImages(index);
  });
</script>

<section class="home">
  <!-- Welcome Section -->
  <h1>Welcome to LB Calipers</h1>

  <!-- Horizontal Blue Divider -->
  <div class="divider"></div>

  <!-- Video Section with three videos side-by-side -->
  <div class="video-container">
    <video class="video" autoplay muted loop>
      <source src="/videos/jailbreak-cinematic.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video class="video" autoplay muted loop>
      <source src="/videos/calipers-showcase-home.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video class="video" autoplay muted loop>
      <source src="/videos/yellow-lambo-home-mp.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- Horizontal Blue Divider -->
  <div class="divider"></div>

  <!-- Simple Message Section -->
  <div class="message-container">
    <p><strong>Premium caliper painting and powder coating services that are proven to last!</strong></p>
  </div>

  <!-- Horizontal Blue Divider -->
  <div class="divider"></div>

  <!-- Services Section -->
  <div class="services-section">
    {#each services as service, index}
      <div class="service-card">
        <div class="image-container">
          <img src={service.images[service.activeIndex]} alt={service.name} class="service-image" />
        </div>
        <div class="text-container">
          <h2>{service.name}</h2>
          <a href="/public/gallery" class="btn">View Gallery</a>
          <p>{service.description}</p>
        </div>
      </div>
    {/each}

  </div>

  <!-- Horizontal Blue Divider -->
  <div class="divider"></div>

  <!-- Simple Message Section -->
  <div class="message-container">
    <p><strong>SAME. DAY. SERVICE.</strong></p>
  </div>

   <!-- Horizontal Blue Divider -->
   <div class="divider"></div>

  <!-- Side-by-Side Containers for Images with Text Overlay -->
  <div class="image-container">
    <!-- Left Image (Services, inverted to face the right) -->
    <div class="image-box">
      <a href="/public/gallery">
        <div class="overlay-text">
          <img class="invert-image" src="/images/services-pic-home.jpg" alt="Services">
          <div class="overlay">
            <p>Gallery</p>
          </div>
        </div>
      </a>
    </div>

    <!-- Right Image (Booking) -->
    <div class="image-box">
      <a href="/public/bookings">
        <div class="overlay-text">
          <img src="/images/booking-pic-home.jpg" alt="Booking">
          <div class="overlay">
            <p>Booking</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Horizontal Blue Divider -->
<div class="divider"></div>

<!-- CSS Styles -->
<style>
  .home {
    padding: 2rem;
    text-align: center;
  }

  /* Divider Styling */
  .divider {
    margin: 2rem auto;
    width: 100%;
    border-bottom: 2.5px solid #66CCFF;
  }

  /* Video Container Styling */
  .video-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .video {
    width: 25%;
    height: auto;
    aspect-ratio: 9 / 16;
    border: 3px solid #66CCFF;
    border-radius: 8px;
    object-fit: cover;
  }

  /* Message Styling */
  .message-container {
    margin-top: 2rem;
    font-size: 1.2rem;
    text-align: center;
  }

  /* Services Section */
  .services-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 5rem;
  }

  .service-card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #52c4f5;
    padding: .25rem;
    border-radius: 8px;
    background-color: black;
    color: #fff;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .service-image {
    width: 70%;
    max-width: 350px;
    height: auto;
    border-radius: 0px;
  }

  .text-container {
    width: 50%;
    padding-left: 0.5rem;
  }

  h2 {
    font-size: 2.2rem;
    color: #52c4f5;
    margin-bottom: 0.5rem;
  }

  /* Button styling for View Gallery */
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #52c4f5;
    color: black;
    text-decoration: none;
    border-radius: 0px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: black;
    color: #52c4f5;
    border: 1.5px solid #52c4f5;
  }

  /* Side-by-Side Image Containers */
  .image-container {
     margin-top: 2rem;
     display: flex;
     justify-content: space-around;
     align-items: center;
  }

  .image-box {
     width: 45%;
     text-align: center;
     position: relative;
  }

  /* Image Styling */
  .image-box img {
     width: 50%;
     height: auto;
     border-radius: 10px;
     transition: transform 0.3s ease;
     border: 5px solid rgb(112, 33, 214); /* Purple border around images */
  }

  /* Invert the left image (Services) horizontally */
  .invert-image {
     transform: scaleX(-1);
  }

  /* Overlay and Text Styling */
  .overlay-text {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
    color: rgb(112, 33, 214);
    font-size: 2rem;
    font-weight: bold;
    opacity: 1; /* Always visible */
    transition: opacity 0.3s ease;
    border-radius: 10px;
  }

  /* Keep text visible but apply hover effect */
  .overlay-text:hover .overlay {
    background-color: rgba(0, 0, 0, 0.65); /* Darken the overlay on hover */
  }
</style>
