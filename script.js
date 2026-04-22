const products = [
  {
    name: "Laptop",
    price: "₹50,000",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Mobile",
    price: "₹15,000",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Headphones",
    price: "₹2,000",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Shoes",
    price: "₹3,000",
    image: "https://via.placeholder.com/200"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <img src="${product.image}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;

  productList.appendChild(div);
});
