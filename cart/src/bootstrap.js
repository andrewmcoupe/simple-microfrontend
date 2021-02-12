import faker from "faker";

const cartText = `You have ${faker.random.number()} in your cart`;

const mount = (el) => {
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  // Assuming container doesn't have an element with this id
  if (el) {
    // we are running in isolation
    mount(el);
  }
}

export { mount };
