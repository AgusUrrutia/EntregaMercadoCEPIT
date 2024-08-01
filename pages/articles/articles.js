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
                    <linearGradient y2="14.26279" y1="7.881249" x2="18.333574" x1="4.648317" gradientUnits="userSpaceOnUse" id="a"><stop stop-opacity=".2" stop-color="#fff" offset="0"></stop><stop stop-opacity="0" stop-color="#fff" offset="1"></stop></linearGradient><path fill="#303c42" d="m23.8535156 1.6464844-1.5-1.5c-.1953125-.1953125-.5117188-.1953125-.7070312 0l-1.9173584 1.9173584c-.1885986-.098999-.4240723-.0759277-.5826416.0826416l-3.7880859 3.7880859c-1.9462891-.5317383-4.0078125.0078125-5.4482422 1.4477539l-9.0566406 9.0571289c-.5507813.5498047-.8535157 1.2817383-.8535157 2.0605469s.3027344 1.5107422.8535156 2.0605469l2.5859375 2.5859375c.5507813.5502929 1.2832031.8535156 2.0605469.8535156s1.5097656-.3032227 2.0605469-.8535156l9.0566406-9.0571289c1.4404297-1.4394531 1.9814453-3.5014648 1.4482422-5.4477539l3.7880859-3.7880859c.1585693-.1585693.1816406-.394043.0826416-.5826416l1.9173584-1.9173584c.1953125-.1953126.1953125-.5117188 0-.7070313z"></path><path transform="matrix(.7071068 -.7071068 .7071068 .7071068 -8.470512 10.550131)" fill="#9f614b" d="m4.757184 11.757184h7.485388v7.485388h-7.485388z"></path><path fill="#676f4b" d="m6.8535156 22.4394531c-.7246094.7226562-1.9824219.7226562-2.7070312 0l-2.5859375-2.5859375c-.3613281-.3613281-.5605469-.8417968-.5605469-1.3535156s.1992188-.9921875.5605469-1.3535156l.9394531-.9394532 5.2929688 5.2929688z"></path><path fill="#676f4b" d="m17.1464844 8.1464844c-.1337891.1337891-.1806641.3320312-.1210938.5117188.5576172 1.6699219.1298828 3.4799805-1.1152344 4.7241211l-1.4103394 1.4104614-5.2929687-5.2929688 1.4103394-1.4104614c.8837891-.8833008 2.0527344-1.3549805 3.2548828-1.3549805.4902344 0 .9863281.0786133 1.4697266.2397461.1806641.0615234.3779297.0131836.5117188-.1206055l3.6464843-3.6464844 1.2929688 1.2929688z"></path><path opacity=".1" d="m8.4998169 10.2068481-5.2928467 5.2930909.5092774.5092773 5.2767658-5.3091717z"></path><path opacity=".1" d="m2.0605469 17.6650391.9394531-.9580079-.5-.5-.9394531.9394531c-.3613281.3613282-.5605469.8417969-.5605469 1.3535157s.1992188.9921875.5605469 1.3535156l.4143677.4143677c-.3024903-.3477783-.4749146-.7832642-.4749146-1.2493286 0-.5117188.1992188-.9921875.5605469-1.3535156z"></path><path opacity=".1" d="m14.3720703 7.2529297c.4902344 0 .9863281.0786133 1.4697266.2397461.1806641.0615234.3779297.0131836.5117188-.1206055l3.6578121-3.6537108-.5113278-.5113283-3.6464844 3.6464844c-.1337891.1337891-.3310547.1821289-.5117188.1206055-.4833984-.1611328-.9794922-.2397461-1.4697266-.2397461-1.2021484 0-2.3710938.4716797-3.2548828 1.3549805l-1.4103393 1.4104614.5092773.5092773 1.401062-1.4011841c.8837892-.8833007 2.0527345-1.3549804 3.2548829-1.3549804z"></path><g fill="#fff"><path transform="matrix(.7025585 -.711626 .711626 .7025585 -9.489386 13.071864)" opacity=".2" d="m7.148615 17.527449h7.487697v.720234h-7.487697z"></path><path opacity=".2" d="m6.3550715 21.9159241c-.7246094.7226562-1.9824219.7226562-2.7070312 0l.5.5185547c.7246094.7226562 1.9824219.7226562 2.7070312 0l.9378973-.9344788-.5113282-.5113277z"></path><path opacity=".2" d="m17.1480408 8.14151 3.6464844-3.6464849-.5125713-.5060406-3.633913 3.6339703c-.1337891.1337891-.1806641.3320312-.1210938.5117192.5576172 1.6699219.1298828 3.4799805-1.1152344 4.7241211l-1.4258442 1.420042.5155048.5089741 1.4103394-1.4104614c1.2451172-1.2441406 1.6728516-3.0541992 1.1152344-4.7241211-.0595704-.1796874-.0126954-.3779296.1210937-.5117187z"></path></g><path transform="matrix(.7071068 -.7071068 .7071068 .7071068 4.654437 15.986806)" fill="#fed4a3" d="m20.533957 1.814287h2.182087v1.121427h-2.182087z"></path><path fill="url(#a)" d="m23.8535156 1.6464844-1.5-1.5c-.1953125-.1953125-.5117188-.1953125-.7070312 0l-1.9173584 1.9173584c-.1885986-.098999-.4240723-.0759277-.5826416.0826416l-3.7880859 3.7880859c-1.9462891-.5317383-4.0078125.0078125-5.4482422 1.4477539l-9.0566406 9.0571289c-.5507813.5498047-.8535157 1.2817383-.8535157 2.0605469s.3027344 1.5107422.8535156 2.0605469l2.5859375 2.5859375c.5507813.5502929 1.2832031.8535156 2.0605469.8535156s1.5097656-.3032227 2.0605469-.8535156l9.0566406-9.0571289c1.4404297-1.4394531 1.9814453-3.5014648 1.4482422-5.4477539l3.7880859-3.7880859c.1585693-.1585693.1816406-.394043.0826416-.5826416l1.9173584-1.9173584c.1953125-.1953126.1953125-.5117188 0-.7070313z"></path></svg>
                </div>
                <div class="card__title">${product.nombre}</div>
                <div class="card__subtitle">
                    Stock: <span class="stocks">${product.stock_actual}</span>
                    <div class="card__counter">
                        <button class="card__btn card__btn-minus" data-id="${product.id}">-</button>
                        <input type="number" class="card__counter-score inputs_count" data-id="${product.id}">
                        <button class="card__btn card__btn-plus" data-id="${product.id}">+</button>
                    </div>
                </div>
                <div class="card__wrapper">
                    <div class="card__price">$${product.precio}</div>
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