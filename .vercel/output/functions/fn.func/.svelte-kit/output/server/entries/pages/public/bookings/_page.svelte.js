import { c as create_ssr_component, e as escape, d as add_attribute, b as each } from "../../../../chunks/ssr.js";
const css = {
  code: ".contact-section.s-Vq__M0gN1SKm{max-width:500px;margin:0 auto;padding:2rem;background-color:#000;border-radius:8px;color:rgb(255, 255, 255);text-align:center}form.s-Vq__M0gN1SKm{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.form-group.s-Vq__M0gN1SKm{display:flex;flex-direction:column;width:100%}input.s-Vq__M0gN1SKm,select.s-Vq__M0gN1SKm,textarea.s-Vq__M0gN1SKm{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #52c4f5;border-radius:4px;background-color:#454a4b;color:#fff}input.s-Vq__M0gN1SKm:focus,select.s-Vq__M0gN1SKm:focus,textarea.s-Vq__M0gN1SKm:focus{border-color:#e3c517;outline:none}.btn.s-Vq__M0gN1SKm{padding:0.75rem;background-color:#52c4f5;color:black;border:2px solid #52c4f5;border-radius:4px;font-weight:bold;width:100%;cursor:pointer;transition:background-color 0.3s, color 0.3s}.btn.s-Vq__M0gN1SKm:hover{background-color:black;color:#52c4f5}.feedback.s-Vq__M0gN1SKm{color:#52c4f5;font-weight:bold;margin-top:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let first_name = "";
  let last_name = "";
  let phone = "";
  let date = "";
  let buttonText = "Submit";
  const services = ["Caliper Restoration", "Custom Powder Coating", "Both"];
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  $$result.css.add(css);
  return `<section class="contact-section s-Vq__M0gN1SKm"><div class="business-info"><h1 data-svelte-h="svelte-3s5qlx">Business Hours</h1> <p data-svelte-h="svelte-w9gpkn">Monday - Friday: 8:00AM - 5:00PM</p> <p data-svelte-h="svelte-1mkgo8r">Saturday - Sunday: Appointment Only</p> <p><strong data-svelte-h="svelte-1etavfx">Phone Number:</strong> (562) 350-7925</p> <p><strong data-svelte-h="svelte-a9u3pq">Email:</strong> lbcalipers2020@gmail.com</p></div>  ${form && form.message ? `<h1>${escape(form.message)}</h1>` : ``} <form action="?/submit" method="post" class="s-Vq__M0gN1SKm"><div class="form-group s-Vq__M0gN1SKm"><label for="first_name" data-svelte-h="svelte-1c0usq3">First Name</label> <input type="text" id="first_name" name="first_name" required class="s-Vq__M0gN1SKm"${add_attribute("value", first_name, 0)}></div> <div class="form-group s-Vq__M0gN1SKm"><label for="last_name" data-svelte-h="svelte-3gpuyb">Last Name</label> <input type="text" id="last_name" name="last_name" required class="s-Vq__M0gN1SKm"${add_attribute("value", last_name, 0)}></div> <div class="form-group s-Vq__M0gN1SKm"><label for="phone" data-svelte-h="svelte-1vkti8h">Phone Number</label> <input type="text" id="phone" name="phone" required class="s-Vq__M0gN1SKm"${add_attribute("value", phone, 0)}></div> <div class="form-group s-Vq__M0gN1SKm"><label for="date" data-svelte-h="svelte-1mv3p0t">Appointment Date</label> <input type="date" id="date" name="date" required class="s-Vq__M0gN1SKm"${add_attribute("value", date, 0)}></div> <div class="form-group s-Vq__M0gN1SKm"><label for="service" data-svelte-h="svelte-1yy2l2g">Service Type</label> <select id="service" name="service" required class="s-Vq__M0gN1SKm"><option value="" disabled selected data-svelte-h="svelte-13je9h3">Select a service</option>${each(services, (service) => {
    return `<option${add_attribute("value", service, 0)}>${escape(service)}</option>`;
  })}</select></div> ${``} ${``} <div class="form-group s-Vq__M0gN1SKm"><label for="additional_details" data-svelte-h="svelte-f7alz9">Additional Details</label> <textarea id="additional_details" name="additional_details" placeholder="Please provide the current condition of your wheels/calipers here in addition to the year, make, and model of your vehicle." class="s-Vq__M0gN1SKm">${escape("")}</textarea></div> <button type="submit" class="${["btn s-Vq__M0gN1SKm", ""].join(" ").trim()}">${escape(buttonText)}</button></form> ${``} </section>`;
});
export {
  Page as default
};
