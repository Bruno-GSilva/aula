const categoria = document.getElementById('categorias')
const imageProduto = document.getElementById('imageProduto')

function buscarCategoria() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, index) => {
        categoria.innerHTML += `
        <li><input type="search" name="" id="">${element}</li>
        `;
      });
    });
}
buscarCategoria();

function buscarImage() {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, index) => {
        categoria.innerHTML += `
        <li><input type="checkbox" name="" id="">${element}</li>
        `;
      });
    });
}
