let endpoint = "fakestore.json";
//endpoint = "https://webacademy.se/fakestore/";

const outputEl = document.getElementById("output");

document.addEventListener("DOMContentLoaded", function () {
  load(endpoint, renderProducts);
});

/**
 * General Ajax Load Function
 * @param {*} endpoint resource in JSON format
 * @param {*} render callback when response is ready
 */
function load(resource, render) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", resource);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      render(data);
    }
  };
}

/**
 * Render all products in an HTML table
 * @param {*} products
 */
function renderProducts(products) {
  let output = `
  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Price</th>
    </tr>`;
  products.forEach((product) => {
    output += `
    <tr>
      <td>${product.id}</td>
      <td>${product.title}</td>
      <td style="text-align:right">$${product.price.toFixed(2)}</td>
    </tr>`;
  });
  output += `</table>`;
  outputEl.innerHTML = output;
}
