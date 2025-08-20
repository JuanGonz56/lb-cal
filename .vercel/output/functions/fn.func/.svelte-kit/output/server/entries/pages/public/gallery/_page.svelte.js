import { c as create_ssr_component, d as add_attribute, e as escape, b as each } from "../../../../chunks/ssr.js";
const css = {
  code: ".gallery-container.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{display:flex;flex-direction:column;align-items:center;gap:4rem}.gallery-section.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{display:flex;flex-direction:column;align-items:center;text-align:center;color:white;margin-bottom:3rem}.carousel.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{position:relative;display:flex;align-items:center;justify-content:center;width:100%;max-width:600px\r\n	}.main-image.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{width:100%;max-width:450px;height:auto;border-radius:10px;border:3px solid #52c4f5;object-fit:cover}.arrow.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{position:absolute;top:50%;background:rgba(0, 0, 0, 0.6);color:#52c4f5;border:none;cursor:pointer;font-size:2rem;padding:0.5rem 1rem;transform:translateY(-50%);z-index:10}.arrow.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T:hover{background:rgba(11, 80, 108, 0.447)}.arrow.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T:first-of-type{left:0}.arrow.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T:last-of-type{right:0}.thumbnails.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{display:flex;justify-content:center;gap:0.5rem;overflow-x:auto;padding:1rem 0;max-width:100%}.thumbnails.s-uZ_8kiQ_gb8T button.s-uZ_8kiQ_gb8T{border:none;padding:0;background:none}.thumbnails.s-uZ_8kiQ_gb8T img.s-uZ_8kiQ_gb8T{width:80px;height:80px;cursor:pointer;border:3px solid transparent;border-radius:5px;object-fit:cover}.thumbnails.s-uZ_8kiQ_gb8T button.selected img.s-uZ_8kiQ_gb8T{border-color:#52c4f5}.book-now-container.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{display:flex;justify-content:center;margin-top:2rem}.btn.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T{padding:1rem 2rem;background-color:#52c4f5;color:black;text-decoration:none;border-radius:4px;font-weight:bold;transition:background-color 0.3s ease}.btn.s-uZ_8kiQ_gb8T.s-uZ_8kiQ_gb8T:hover{background-color:black;color:#52c4f5;border:1.5px solid #52c4f5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const calipersImages = [
    "/images/porsche-green.jpg",
    "/images/calipers2.jpg",
    "/images/calipers3.jpg",
    "/images/calipers4.jpg",
    "/images/calipers5.jpg",
    "/images/lambo-brakes-yellow.png",
    "/images/calipers7.jpg",
    "/images/calipers8.jpg",
    "/images/calipers9.jpg",
    "/images/calipers10.jpg",
    "/images/calipers11.jpg",
    "/images/calipers12.jpg",
    "/images/calipers13.jpg",
    "/images/calipers14.jpg",
    "/images/calipers15.jpg"
  ];
  const wheelsImages = [
    "/images/wheel1.jpg",
    "/images/porsche-gunmetal-wheels.png",
    "/images/wheel3.jpg",
    "/images/wheel4.jpg",
    "/images/bmw-glossblack-wheels.jpg",
    "/images/wheel6.jpg",
    "/images/wheel7.jpg",
    "/images/wheel8.jpg",
    "/images/wheel9.jpg",
    "/images/wheel10.jpg",
    "/images/wheel11.jpg",
    "/images/wheel12.jpg",
    "/images/wheel13.jpg"
  ];
  let activeCaliperIndex = 0;
  let activeWheelIndex = 0;
  $$result.css.add(css);
  return `<div class="gallery-container s-uZ_8kiQ_gb8T"> <section class="gallery-section s-uZ_8kiQ_gb8T"><h2 data-svelte-h="svelte-211fu9">Caliper Showcase</h2> <p data-svelte-h="svelte-13uur1c">Calipers will be sanded down, washed, scuffed and air-brushed using high-temp ceramic paint.</p> <div class="carousel s-uZ_8kiQ_gb8T"><button class="arrow s-uZ_8kiQ_gb8T" data-svelte-h="svelte-u84sgh">◀</button> <img${add_attribute("src", calipersImages[activeCaliperIndex], 0)} alt="${"Caliper Image " + escape(activeCaliperIndex + 1, true)}" class="main-image s-uZ_8kiQ_gb8T"> <button class="arrow s-uZ_8kiQ_gb8T" data-svelte-h="svelte-mcpu9w">▶</button></div> <div class="thumbnails s-uZ_8kiQ_gb8T">${each(calipersImages, (img, index) => {
    return `<button type="button" class="${["s-uZ_8kiQ_gb8T", index === activeCaliperIndex ? "selected" : ""].join(" ").trim()}"><img${add_attribute("src", img, 0)} alt="${"Caliper Thumbnail " + escape(index + 1, true)}" class="s-uZ_8kiQ_gb8T"> </button>`;
  })}</div></section>  <section class="gallery-section s-uZ_8kiQ_gb8T"><h2 data-svelte-h="svelte-13v2fhe">Wheel Showcase</h2> <p data-svelte-h="svelte-1w21t73">Powder coating is a high-end procedure we do on your wheels. Providing a durable,
			chip-resistant finish that protects against rust and corrosion.</p> <div class="carousel s-uZ_8kiQ_gb8T"><button class="arrow s-uZ_8kiQ_gb8T" data-svelte-h="svelte-1rc4nag">◀</button> <img${add_attribute("src", wheelsImages[activeWheelIndex], 0)} alt="${"Wheel Image " + escape(activeWheelIndex + 1, true)}" class="main-image s-uZ_8kiQ_gb8T"> <button class="arrow s-uZ_8kiQ_gb8T" data-svelte-h="svelte-trmd4h">▶</button></div> <div class="thumbnails s-uZ_8kiQ_gb8T">${each(wheelsImages, (img, index) => {
    return `<button type="button" class="${["s-uZ_8kiQ_gb8T", index === activeWheelIndex ? "selected" : ""].join(" ").trim()}"><img${add_attribute("src", img, 0)} alt="${"Wheel Thumbnail " + escape(index + 1, true)}" class="s-uZ_8kiQ_gb8T"> </button>`;
  })}</div></section>  <div class="book-now-container s-uZ_8kiQ_gb8T"><a href="/public/bookings" class="btn s-uZ_8kiQ_gb8T" data-svelte-h="svelte-xocvd5">Book Now</a></div> </div>`;
});
export {
  Page as default
};
