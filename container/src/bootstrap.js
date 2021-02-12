import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/Cart";

console.log("Container App");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
