const buttonOpenHour = document.querySelector(".button-hour");
const buttonRemoveHour = document.querySelector(".close-hour");
const body = document.querySelector("body");
const buttonOpenMobile = document.querySelector('.open-mobile')
const buttonCloseMobile = document.querySelector('.close-mobile')
const hamburguer = document.querySelector('.category-hamburgers')
const drinks = document.querySelector('.category-drink')
let quantity = document.querySelector ('.header .navigation .button-open-cart i span')
const buttonOpenCart = document.querySelector ('.header .navigation .button-open-cart')


const database = {
  'burgers': [
    {
      id: 0,
      image:
        "https://img.freepik.com/fotos-premium/hamburguer-com-queijo-cheddar-em-prato-de-madeira_74692-589.jpg?size=626&ext=jpg&ga=GA1.1.462900268.1690408347&semt=sph",
      title: "X-Burguer",
      description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
      price: 19.9,
      quantity: 0,
    },
    {
      id: 1,
      image:
        "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=1200&h=900&crop=1",
      title: "X-Burguer",
      description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
      price: 19.9,
      quantity: 0,
    },
    {
      id: 2,
      image:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0001_Hamburger_Alt_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
      title: "X-Burguer",
      description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
      price: 19.9,
      quantity: 0,
    },
  ],

  'drinks': [
    {
      id: 3,
      image: 'https://ribeirao.emporiotartufo.com.br/image/cache/catalog/produtos/Coca-Cola/116333-coca-cola-lata-350ml-1-1000x667.png',
      title: 'Coca Cola',
      description: 'Bebida Coca Cola',
      price: 9.90,
      quantity: 0,
    },
    {
      id: 4,
      image: 'https://supsaojoao.com.br/4464-large_default/agua-mineral-lind-agua-500ml-cgas.jpg',
      title: 'Água sem gás',
      description: 'Água mineral',
      price: 6.90,
      quantity: 0,
    },
  ]

}

buttonOpenMobile.addEventListener('click', () => {
  body.classList.add('mobile')
})

buttonCloseMobile.addEventListener('click', () => {
  body.classList.remove('mobile')
})

buttonOpenHour.addEventListener("click", () => {
  body.classList.add("show");
});

buttonRemoveHour.addEventListener("click", () => {
  body.classList.remove("show");
});

buttonOpenCart.addEventListener("click", () => {
  body.classList.toggle("show-cart");
});



function startProducts() {
  database.burgers.map(burger => {
    hamburguer.innerHTML += `
    <div class='card-hamburgers'>
      <img src="${burger.image}" alt="${burger.title}"/>
      <div class="info">
        <p class="title-card">${burger.title}</p>
        <p class="description-card">${burger.description}</p>
        <p class="price-card">R$ ${burger.price.toFixed(2)}</p>
        <button key="${burger.id}" class="button-add">Adicionar</button>
      </div>
    </div>
    `
  })

  database.drinks.map(drink => {
    drinks.innerHTML += `
    <div class='card-drinks'>
      <img src="${drink.image}" alt="${drink.title}"/>
      <div class="info">
        <p class="title-card">${drink.title}</p>
        <p class="description-card">${drink.description}</p>
        <p class="price-card">R$ ${drink.price.toFixed(2)}</p>
        <button key="${drink.id}" class="button-add">Adicionar</button>
      </div>
    </div>
    `
  })
}  
startProducts()

let buttonsAdd = document.querySelectorAll('.button-add')
let cart = document.querySelector('.cart')

function updateCart() {
  cart.innerHTML = ''

  database.burgers.map(burger => {
    if (burger.quantity > 0) {
      cart.innerHTML += `
      <div class='box-cart'>
        <img src="${burger.image}" alt="${burger.title}"/>
        <div class="info-product">
          <p class="title-card">${burger.title}</p>
          <p class="qtd-card">Qtd: ${burger.quantity}</p>
          <p class="price-card">R$ ${burger.price.toFixed(2)}</p>
        </div>
      </div>
      `
    }
  })

  database.drinks.map(drink => {
    if (drink.quantity > 0) {
      cart.innerHTML += `
      <div class='box-cart'>
        <img src="${drink.image}" alt="${drink.title}"/>
        <div class="info-product">
          <p class="title-card">${drink.title}</p>
          <p class="qtd-card">Qtd: ${drink.quantity}</p>
          <p class="price-card">R$ ${drink.price.toFixed(2)}</p>
        </div>
      </div>
      `
    }
  })
  quantity.innerHTML = document.querySelectorAll('.box-cart').length
}

for (let i = 0; i < buttonsAdd.length; i++) {
  buttonsAdd[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    database.burgers.map(burger => {
      if (burger.id == key) {
        burger.quantity++
      }
    })
    database.drinks.map(drink => {
      if (drink.id == key) {
        drink.quantity++
      }
    })
    updateCart()
  })
}
