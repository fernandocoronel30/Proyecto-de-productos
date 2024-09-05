let divData = document.getElementById("divData");

function getData(){
  const promesa = fetch("https://freetestapi.com/api/v1/products?limit=48",{method:"GET"});
    promesa.then((response) => {
      response.json().then(
        (data) => {
          // console.log(data);
          createCards(data);
        }).catch((error => console.log("Problema con el JSON", error)));
    }).catch((error) => console.log("Existió un problema con la solicitud", error));
}//getData

function createCards(products){
  console.log(products.length);
  console.log(products[1].id);
  console.log(products[1].name);
  console.log(products[1].description);
  console.log(products[1].price);
  console.log(products[1].image);
  //Crear una card por cada producto
  products.forEach(product => {
    let card = `
      <div class="col my-3">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="pixels">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><b>${product.brand}</b></p>
            <p class="card-text"><b><i class="bi bi-tags-fill"></i>$${product.price}</b></p>
          </div>
        </div>
      </div>
  `
  
  divData.insertAdjacentHTML("beforeend", card);
});
}//createCards

getData();




































