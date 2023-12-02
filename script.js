let productGrid = document.getElementById('products-grid')
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = "https://my-json-server.typicode.com/tocanpolina/SB_shop"

xhr.open('GET',url +'/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	productGrid.innerHTML = null;
	products.forEach(p=>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product');
		pElem.innerHTML = `
			<h2 class='product-name'>${p.name}</h2>
			<img class='product-photo' src='${p.photo_url}''>
			<p class='product-description'><b>Description</b>${p.description}</p>
			<button>Buy</button>`;
			productGrid.append(pElem);
	});
}

xhr.send();