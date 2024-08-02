let arts = [
    {
        "id": 0,
        "nombre": "Manzana",
        "stock_inicial": 100,
        "stock_actual": 100,
        "stock_permanente": 100,
        "precio": 5,
        "imagen": "https://img.freepik.com/vector-gratis/ilustracion-uvas-aisladas-sobre-fondo-blanco_53876-17347.jpg"
    },
    {
        "id": 1,
        "nombre": "Leche",
        "stock_inicial": 50,
        "stock_actual": 50,
        "stock_permanente": 50,
        "precio": 12,
        "imagen": "https://static.vecteezy.com/system/resources/thumbnails/019/550/837/small/milk-bottle-mockup-on-transparent-background-file-png.png"
    },
    {
        "id": 2,
        "nombre": "Pan",
        "stock_inicial": 200,
        "stock_actual": 200,
        "stock_permanente": 200,
        "precio": 8,
        "imagen": "https://www.freepngimg.com/thumb/bread/3-bread-png-image.png"
    },
    {
        "id": 3,
        "nombre": "Huevos",
        "stock_inicial": 300,
        "stock_actual": 300,
        "stock_permanente": 300,
        "precio": 12,
        "imagen": "https://img.freepik.com/foto-gratis/huevos-marrones_2829-13455.jpg"
    },
    {
        "id": 4,
        "nombre": "Queso",
        "stock_inicial": 40,
        "stock_actual": 40,
        "stock_permanente": 40,
        "precio": 25,
        "imagen": "https://png.pngtree.com/png-clipart/20230928/original/pngtree-slice-of-cheese-png-image_13005463.png"
    },
    {
        "id": 5,
        "nombre": "Tomate",
        "stock_inicial": 120,
        "stock_actual": 120,
        "stock_permanente": 120,
        "precio": 6,
        "imagen": "https://static.vecteezy.com/system/resources/previews/028/882/795/non_2x/tomato-tomato-red-tomato-with-transparent-background-ai-generated-free-png.png"
    },
    {
        "id": 6,
        "nombre": "Pollo",
        "stock_inicial": 60,
        "stock_actual": 60,
        "stock_permanente": 60,
        "precio": 50,
        "imagen": "https://e7.pngegg.com/pngimages/917/686/png-clipart-chicken-as-food-buffalo-wing-poultry-chicken-breast-chicken-food-animals.png"
    },
    {
        "id": 7,
        "nombre": "Cereal",
        "stock_inicial": 80,
        "stock_actual": 80,
        "stock_permanente": 80,
        "precio": 30,
        "imagen": "https://atlas-content-cdn.pixelsquid.com/stock-images/cereal-box-crunch-Od6J4wD-600.jpg"
    },
    {
        "id": 8,
        "nombre": "Jugo de Naranja",
        "stock_inicial": 100,
        "stock_actual": 100,
        "stock_permanente": 100,
        "precio": 15,
        "imagen": "https://static.vecteezy.com/system/resources/previews/027/536/043/non_2x/orange-juice-orange-juice-orange-juice-transparent-background-ai-generative-free-png.png"
    },
    {
        "id": 9,
        "nombre": "Café",
        "stock_inicial": 30,
        "stock_actual": 30,
        "stock_permanente": 30,
        "precio": 4,
        "imagen": "https://pngimg.com/d/coffee_jar_PNG17056.png"
    }
]

let cart = [];




let svg = `
<svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#1d1a19">
    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
</svg>
<span class="tooltiptext">Buy</span>
`
let rows = document.getElementById('rows');
let stocks = document.getElementsByClassName('stocks');


function refreshCart(){
    if(cart.length > 0){
        cart.forEach(product => {
        let row = document.createElement('tr');
        // row.classList.add('');
        rows.innerHTML = `      
                
                <td>${product.nombre}</td>
                <td>${product.stock_actual}</td>
                <td>${product.precio_total}</td>
                <td>
                    <button class="btn_delete" data-id="${product.id}">
                        X
                    </button>
                </td>
        `;
        articles.appendChild(row);
    });
    }else{
        rows.innerHTML = ""
    }
    
    console.log("Hola");
    addBtnsactions();
}


function addBtnsactions(){
     // Se ejecuta ésta parte cuando termine de cargar todo el DOM para prevenir coliciones

        document.querySelectorAll('.btn_delete').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const id = button.getAttribute('data-id');
                console.log("HOLAAA");
                let art = arts[id];//Obtengo el objeto del arreglo en la posicion de donde surge algun cambio en el input
                let stock = stocks[id];//El stock capturado, es el que cambia en el HTML y no posee control del Objeto
                let artCart = cart[id];
                art.stock_actual = art.stock_actual + artCart.stock_actual;
                art.stock_inicial = art.stock_actual
                stock.innerHTML = art.stock_actual;
    
                cart = cart.filter(e=>e.id !== art.id);
                console.log(cart);
                refreshCart()
            });
          });
    
        
        





       




        

        document.querySelectorAll('.inputs_count').forEach(input => {
            input.addEventListener('change', (e)=> {
                e.preventDefault()
                const id = input.getAttribute('data-id')
                let stock = stocks[id];//El stock capturado, es el que cambia en el HTML y no posee control del Objeto
                let art = arts[id];//Obtengo el objeto del arreglo en la posicion de donde surge algun cambio en el input
                if(e.target.value > art.stock_actual){
                    alert("No se puede asigar ese valor!!!");
                }else{
                    art.stock_actual = art.stock_inicial - e.target.value; // Seteo el valor del objeto
                    stock.innerHTML = art.stock_actual; // Seteo el HTML
                }
            });
        });

        // Añadir eventos a los botones de decremento
        document.querySelectorAll('.card__btn-minus').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const input = document.querySelector(`input[data-id="${id}"]`);
                if (input) {
                input.value = Math.max(0, Number(input.value) - 1);
                input.dispatchEvent(new Event('change'));
                }
            });
        });
      
        // Añadir eventos a los botones de incremento
        document.querySelectorAll('.card__btn-plus').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const input = document.querySelector(`input[data-id="${id}"]`);
            if (input) {
              input.value = Number(input.value) + 1;
              input.dispatchEvent(new Event('change'));
            }
          });
        });

        // Boton de agregar al carrito de compra
        document.querySelectorAll(".addToCartBtn").forEach(button=>{
        button.addEventListener('click',()=>{
            const id = button.getAttribute('data-id')
            const input = document.querySelector(`input[data-id="${id}"]`);
            if (input.value !== 0) {
                let art = arts[id]; //Obtengo el objeto del arreglo en la posicion de donde se preciona el boton "addToCart"
                let valorInput = input.value;
                art.stock_inicial = art.stock_actual;
                let exist = cart.some((article)=>
                    article.id === art.id
                );
                if(!exist){
                    let artCart = 
                    {
                        id: art.id,
                        nombre: art.nombre,
                        stock_actual: Number(valorInput),
                        precio_total: Number(input.value) * Number(art.precio)
                    };
                    cart.push(artCart);
                    input.value = 0;
                    console.log(cart);
                    refreshCart();
                }else{
                    
                    let artCart = cart.find((article)=>
                            article.id === art.id 
                        );
                    artCart.stock_actual = Number(artCart.stock_actual) + Number(valorInput);
                    artCart.precio_total = artCart.stock_actual * art.precio;
                    cart = cart.filter(elemento => elemento.id !== artCart.id);
                    cart.push(artCart);
                    input.value = 0;
                    console.log(cart);
                    refreshCart();
                }

                
            }
        })
        });
    
}



document.addEventListener('DOMContentLoaded', () => {
    let cart_table = document.getElementById('cart_table');
    document.getElementById('toggle_cart').addEventListener('click',()=>{
        cart_table.classList.toggle('hidden_cart');
    });

    
    






    let articles = document.getElementById('articles');

    arts.forEach(product => {
        let row = document.createElement('div');
        row.classList.add('card');
        row.innerHTML = `      
                <div class="card__img">
                    <img src="${product.imagen}" alt="${product.nombre}" width="160" class="imgs">
                    
                </div>
                <div class="card__title">${product.nombre}</div>
                <div class="card__subtitle">
                    <div class="card__price">$${product.precio}</div>
                    <div class="card__counter">
                        <button class="card__btn card__btn-minus" data-id="${product.id}">-</button>
                        <input type="number" class="card__counter-score inputs_count" data-id="${product.id}" max="999">
                        <button class="card__btn card__btn-plus" data-id="${product.id}">+</button>
                    </div>
                </div>
                <div class="card__wrapper">
                    <p> Stock: <span class="stocks">${product.stock_actual}</span> </p>
                    <button class="tooltip addToCartBtn" data-id="${product.id}">
                        ${svg}
                    </button>
                </div>
        `;
        articles.appendChild(row);
    });
    addBtnsactions();
});




{/* <td><img src="${product.imagen}" alt="${product.nombre}" width="50"></td> */}






addBtnsactions();