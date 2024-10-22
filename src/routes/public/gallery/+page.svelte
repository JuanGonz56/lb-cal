<script>
    // Services array with multiple images for each service
    const services = [
      {
        name: "Brake Caliper Restoration",
        description: "At LB Calipers, our brake caliper restoration service is focused on enhancing the appearance of your vehicle's calipers. Over time, calipers can become corroded or dull due to exposure to road elements. We disassemble, clean, and restore each caliper, applying high-temperature paint that resists fading, peeling, and cracking. With a wide range of colors available, you can customize your calipers to complement your vehicle’s style. Each restoration is finished with a durable clear coat for long-lasting protection, ensuring your calipers look fresh for years to come.",
        images: ["/images/lambo-brakes-yellow.png", "/images/cyber-red.jpg", "/images/porshe-green.jpg"]
      },
      {
        name: "Custom Powder Coating",
        description: "Our custom powder coating service offers a superior finish for wheels, calipers, and other metal cosmetic parts. Powder coating is more durable than traditional paint, providing a thick, chip-resistant layer that stands up to wear and tear. We offer a wide variety of colors and finishes, from glossy to matte, to give your vehicle a unique, custom look. The process includes cleaning and prepping the surface, applying the powder electrostatically, and curing it in a high-temperature oven for a smooth, long-lasting finish. Powder coating not only enhances aesthetics but also adds protection against rust and corrosion, keeping your vehicle looking its best.",
        images: ["/images/porsche-gunmetal-wheels.png", "/images/porsche-glossblack-wheels.jpg", "/images/bmw-glossblack-wheels.jpg"]
      },
      {
        name: "Window Tinting (Coming soon)",
        description: "We are excited to soon offer window tinting services at LB Calipers. While we are still completing training to ensure top-quality installations, this upcoming service will enhance the look of your vehicle while providing benefits like UV protection, heat reduction, and privacy. Our window tinting process will involve precise application using high-quality films and state-of-the-art tools to ensure a perfect finish. Various tint shades will be available to suit your style and meet legal requirements. Stay tuned for the official launch of this service, where we aim to deliver the same expertise and attention to detail that we bring to our existing offerings.",
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
  
  <div class="services-section">
    {#each services as service, index}
      <div class="service-card">
        <div class="image-container">
          <img src={service.images[service.activeIndex]} alt={service.name} class="service-image" />
        </div>
        <div class="text-container">
          <h2>{service.name}</h2>
          <p class="description-label"><strong>Description</strong></p> <!-- Bold label for description -->
          <p>{service.description}</p>
        </div>
      </div>
      <div class="divider"></div> <!-- Blue divider between services -->
    {/each}
  
    <!-- Book Now Button -->
    <div class="book-now-container">
      <a href="/public/bookings" class="btn">Book Now</a>
    </div>
  </div>
  
  <div class="divider"></div> <!-- Blue divider between services -->


  <style>

  .services-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem;
}

.service-card {
  display: flex;
  justify-content: center; /* Center both the image and text */
  align-items: center;
  border: 2px solid #52c4f5;
  padding: 2rem;
  border-radius: 8px;
  background-color: black;
  color: rgb(255, 255, 252);
  flex-wrap: wrap;
  gap: 1rem; /* Add gap between the image and text */
}

.service-image {
  width: 70%; /* Keep images smaller to make more room */
  max-width: 350px;
  height: auto;
  border-radius: 10px;
}

.text-container {
  width: 50%; /* Ensure text and image remain balanced */
  padding-left: .1rem; /* Reduced padding to minimize space */
}

h2 {
  font-size: 2.2rem;
  color: #52c4f5;
  margin-bottom: 0.5rem;
}

.description-label {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
}

.divider {
  width: 100%;
  border-bottom: 2px solid #66CCFF;
  margin-top: .45rem;
  align-items: center;
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