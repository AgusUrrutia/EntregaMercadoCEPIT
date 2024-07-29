let arts = [
    {
        "id": 1,
        "nombre": "Manzana",
        "stock_inicial": 100,
        "stock_actual": 100,
        "precio": 0.5,
        "imagen": "https://img.freepik.com/vector-gratis/ilustracion-uvas-aisladas-sobre-fondo-blanco_53876-17347.jpg"
    },
    {
        "id": 2,
        "nombre": "Leche",
        "stock_inicial": 50,
        "stock_actual": 50,
        "precio": 1.2,
        "imagen": "https://static.vecteezy.com/system/resources/thumbnails/019/550/837/small/milk-bottle-mockup-on-transparent-background-file-png.png"
    },
    {
        "id": 3,
        "nombre": "Pan",
        "stock_inicial": 200,
        "stock_actual": 200,
        "precio": 0.8,
        "imagen": "https://www.freepngimg.com/thumb/bread/3-bread-png-image.png"
    },
    {
        "id": 4,
        "nombre": "Huevos",
        "stock_inicial": 300,
        "stock_actual": 300,
        "precio": 0.1,
        "imagen": "https://img.freepik.com/foto-gratis/huevos-marrones_2829-13455.jpg"
    },
    {
        "id": 5,
        "nombre": "Queso",
        "stock_inicial": 40,
        "stock_actual": 40,
        "precio": 2.5,
        "imagen": "https://png.pngtree.com/png-clipart/20230928/original/pngtree-slice-of-cheese-png-image_13005463.png"
    },
    {
        "id": 6,
        "nombre": "Tomate",
        "stock_inicial": 120,
        "stock_actual": 120,
        "precio": 0.6,
        "imagen": "https://static.vecteezy.com/system/resources/previews/028/882/795/non_2x/tomato-tomato-red-tomato-with-transparent-background-ai-generated-free-png.png"
    },
    {
        "id": 7,
        "nombre": "Pollo",
        "stock_inicial": 60,
        "stock_actual": 60,
        "precio": 5.0,
        "imagen": "https://e7.pngegg.com/pngimages/917/686/png-clipart-chicken-as-food-buffalo-wing-poultry-chicken-breast-chicken-food-animals.png"
    },
    {
        "id": 8,
        "nombre": "Cereal",
        "stock_inicial": 80,
        "stock_actual": 80,
        "precio": 3.0,
        "imagen": "https://atlas-content-cdn.pixelsquid.com/stock-images/cereal-box-crunch-Od6J4wD-600.jpg"
    },
    {
        "id": 9,
        "nombre": "Jugo de Naranja",
        "stock_inicial": 100,
        "stock_actual": 100,
        "precio": 1.5,
        "imagen": "https://static.vecteezy.com/system/resources/previews/027/536/043/non_2x/orange-juice-orange-juice-orange-juice-transparent-background-ai-generative-free-png.png"
    },
    {
        "id": 10,
        "nombre": "Café",
        "stock_inicial": 30,
        "stock_actual": 30,
        "precio": 4.0,
        "imagen": "https://pngimg.com/d/coffee_jar_PNG17056.png"
    }
]

























let svg = `
<svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#1d1a19">
    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
</svg>
<span class="tooltiptext">Buy</span>
`

function addBtnsactions(){
    document.addEventListener('DOMContentLoaded', () => {
        // Añadir eventos a los botones de decremento
        document.querySelectorAll('.card__btn-minus').forEach(button => {
          button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const input = document.querySelector(`input[data-id="${id}"]`);
            if (input) {
              input.value = Math.max(0, Number(input.value) - 1);
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
            }
          });
        });
      });
}



document.addEventListener('DOMContentLoaded', () => {
    let articles = document.getElementById('articles');

    arts.forEach(product => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.imagen}" alt="${product.nombre}" width="50"></td>
            <td>${product.nombre}</td>
            <td>${product.stock_inicial}</td>
            <td>${product.precio}</td>
            <td>
                <div class="card__counter">
                    <button class="card__btn card__btn-minus" data-id="${product.id}">-</button>
                    <input type="number" class="card__counter-score" data-id="${product.id}">
                    <button class="card__btn card__btn-plus" data-id="${product.id}">+</button>
                </div>
            </td>
            <td>
                <button class="tooltip" data-id="${product.id}">
                   ${svg}
                </button>
            </td>
        `;
        articles.appendChild(row);
    });


    addBtnsactions();
});








addBtnsactions();