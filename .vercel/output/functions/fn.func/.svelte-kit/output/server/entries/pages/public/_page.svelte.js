import { c as create_ssr_component, b as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".home.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{padding:2rem;text-align:center}.divider.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{margin:2rem auto;width:100%;border-bottom:2.5px solid #66CCFF}.video-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-top:1rem}.video.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:25%;height:auto;aspect-ratio:9 / 16;border:3px solid #66CCFF;border-radius:8px;object-fit:cover}.message-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{margin-top:2rem;font-size:1.2rem;text-align:center}.services-section.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{display:flex;flex-direction:column;gap:2rem;padding:5rem}.service-card.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{display:flex;justify-content:center;align-items:center;border:2px solid #52c4f5;padding:.25rem;border-radius:8px;background-color:black;color:#fff;flex-wrap:wrap;gap:1rem}.service-image.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:70%;max-width:350px;height:auto;border-radius:0px}.text-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:50%;padding-left:0.5rem}h2.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{font-size:2.2rem;color:#52c4f5;margin-bottom:0.5rem}.btn.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{display:inline-block;padding:0.75rem 1.5rem;background-color:#52c4f5;color:black;text-decoration:none;border-radius:0px;font-weight:bold;transition:background-color 0.3s ease}.btn.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof:hover{background-color:black;color:#52c4f5;border:1.5px solid #52c4f5}.image-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{margin-top:2rem;display:flex;justify-content:space-around;align-items:center}.image-box.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:45%;text-align:center;position:relative}.image-box.s-Me8Ak8dzjbof img.s-Me8Ak8dzjbof{width:50%;height:auto;border-radius:10px;transition:transform 0.3s ease;border:5px solid rgb(112, 33, 214)}.invert-image.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{transform:scaleX(-1)}.overlay-text.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{position:relative}.overlay.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);color:rgb(112, 33, 214);font-size:2rem;font-weight:bold;opacity:1;transition:opacity 0.3s ease;border-radius:10px}.overlay-text.s-Me8Ak8dzjbof:hover .overlay.s-Me8Ak8dzjbof{background-color:rgba(0, 0, 0, 0.65)}@media(max-width: 768px){.video-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{flex-direction:column;gap:0.5rem}.video.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:100%;height:auto}.services-section.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{padding:1rem}.service-card.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{flex-direction:column}.service-image.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:100%}.text-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:100%;padding:0 1rem;text-align:center}.image-container.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{flex-direction:column;gap:2rem}.image-box.s-Me8Ak8dzjbof.s-Me8Ak8dzjbof{width:90%}.image-box.s-Me8Ak8dzjbof img.s-Me8Ak8dzjbof{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      name: "Caliper Restoration",
      description: "At LB Calipers, our brake restoration service is focused on enhancing the appearance of your vehicle's calipers. Over time, calipers can become corroded or dull due to exposure to road elements. We disassemble, clean, and restore each caliper, applying high-temperature paint that resists fading, peeling, and cracking. With a wide range of colors available, you can customize your calipers to complement your vehicle’s style. Each restoration is finished with a durable clear coat for long-lasting protection, ensuring your calipers look fresh for years to come.",
      images: [
        "/images/lambo-brakes-yellow.png",
        "/images/cyber-red.jpg",
        "/images/porsche-green.jpg"
      ]
    },
    {
      name: "Custom Powder Coating",
      description: "Our custom powder coating service offers a superior finish for wheels. Powder coating is more durable than traditional paint, providing a thick, chip-resistant layer that stands up to wear and tear. We offer a wide variety of colors and finishes, from glossy to matte, to give your vehicle a unique, custom look. The process includes cleaning and prepping the surface, applying the powder electrostatically, and curing it in a high-temperature oven for a smooth, long-lasting finish. Powder coating not only enhances aesthetics but also adds protection against rust and corrosion.",
      images: [
        "/images/porsche-gunmetal-wheels.png",
        "/images/porsche-glossblack-wheels.jpg",
        "/images/bmw-glossblack-wheels.jpg"
      ]
    },
    {
      name: "Window Tinting (Coming soon)",
      description: "We are excited to soon offer window tinting services at LB Calipers. This upcoming service will enhance the look of your vehicle while providing benefits like UV protection, heat reduction, and privacy. Stay tuned for the official launch of this service.",
      images: ["/images/tint-service.jpg"]
    }
  ];
  function cycleImages(serviceIndex) {
    setInterval(
      () => {
        services[serviceIndex].activeIndex = (services[serviceIndex].activeIndex + 1) % services[serviceIndex].images.length;
      },
      3e3
    );
  }
  services.forEach((service, index) => {
    service.activeIndex = 0;
    cycleImages(index);
  });
  $$result.css.add(css);
  return `<section class="home s-Me8Ak8dzjbof"> <h1 data-svelte-h="svelte-odfhpc">Welcome to LB Calipers</h1>  <div class="divider s-Me8Ak8dzjbof"></div>  <div class="video-container s-Me8Ak8dzjbof"><video class="video s-Me8Ak8dzjbof" autoplay muted loop><source src="/videos/jailbreak-cinematic.mp4" type="video/mp4">
      Your browser does not support the video tag.</video> <video class="video s-Me8Ak8dzjbof" autoplay muted loop><source src="/videos/calipers-showcase-home.mp4" type="video/mp4">
      Your browser does not support the video tag.</video> <video class="video s-Me8Ak8dzjbof" autoplay muted loop><source src="/videos/yellow-lambo-home-mp.mp4" type="video/mp4">
      Your browser does not support the video tag.</video></div>  <div class="divider s-Me8Ak8dzjbof"></div>  <div class="message-container s-Me8Ak8dzjbof"><p><strong data-svelte-h="svelte-12e5tkl">Premium caliper painting and powder coating services that are proven to last!</strong></p></div>  <div class="divider s-Me8Ak8dzjbof"></div>  <div class="services-section s-Me8Ak8dzjbof">${each(services, (service, index) => {
    return `<div class="service-card s-Me8Ak8dzjbof"><div class="image-container s-Me8Ak8dzjbof"><img${add_attribute("src", service.images[service.activeIndex], 0)}${add_attribute("alt", service.name, 0)} class="service-image s-Me8Ak8dzjbof"></div> <div class="text-container s-Me8Ak8dzjbof"><h2 class="s-Me8Ak8dzjbof">${escape(service.name)}</h2> <a href="/public/gallery" class="btn s-Me8Ak8dzjbof" data-svelte-h="svelte-clspuf">View Gallery</a> <p>${escape(service.description)}</p></div> </div>`;
  })}</div>  <div class="divider s-Me8Ak8dzjbof"></div>  <div class="message-container s-Me8Ak8dzjbof"><p><strong data-svelte-h="svelte-1rz2k9r">SAME. DAY. SERVICE.</strong></p></div>  <div class="divider s-Me8Ak8dzjbof"></div>  <div class="image-container s-Me8Ak8dzjbof"> <div class="image-box s-Me8Ak8dzjbof"><a href="/public/gallery"><div class="overlay-text s-Me8Ak8dzjbof"><img class="invert-image s-Me8Ak8dzjbof" src="/images/services-pic-home.jpg" alt="Services"> <div class="overlay s-Me8Ak8dzjbof"><p data-svelte-h="svelte-pzcmca">Gallery</p></div></div></a></div>  <div class="image-box s-Me8Ak8dzjbof"><a href="/public/bookings"><div class="overlay-text s-Me8Ak8dzjbof"><img src="/images/booking-pic-home.jpg" alt="Booking" class="s-Me8Ak8dzjbof"> <div class="overlay s-Me8Ak8dzjbof"><p data-svelte-h="svelte-1cgwna7">Booking</p></div></div></a></div></div></section>  <div class="divider s-Me8Ak8dzjbof"></div> `;
});
export {
  Page as default
};
