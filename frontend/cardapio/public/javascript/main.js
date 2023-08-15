const buttonOpenHour = document.querySelector(".button-hour");
const buttonRemoveHour = document.querySelector(".close-hour");
const body = document.querySelector("body");
const buttonOpenMobile = document.querySelector('.open-mobile')
const buttonCloseMobile = document.querySelector('.close-mobile')
const buttonCloseCart = document.querySelector('.close-cart')
const hamburguer = document.querySelector('.category-hamburgers')
const drinks = document.querySelector('.category-drink')
const acai = document.querySelector('.category-acai')
const buttonOpenCart = document.querySelector('.header .navigation .button-open-cart')
const quantity = document.querySelector('.header .navigation .button-open-cart i span')
const totalItems = document.querySelector('.value-total-items')
const totalPrice = document.querySelector('.value-total-price')
const road = document.querySelector('.road')
const city = document.querySelector('.city')
const state = document.querySelector('.state')
const bairro = document.querySelector('.bairro')
const number = document.querySelector('.number')
const complement = document.querySelector('.complement')
const searchAddress = document.querySelector('.search-address')
const searchAddressInput = document.querySelector('.cep')
const form = document.querySelector('form')
const confirmedOrder = document.querySelector('.confirmed-order')
const paymentDebito = document.querySelector('.debito')
const paymentCredito = document.querySelector('.credito')
const paymentMoney = document.querySelector('.money')
let textArea = document.querySelector('textarea')
let chosenPaymentMethod = ''
let products = []


const database = {
  'burgers': [
    {
      id: 0,
      image:
        "https://assets.unileversolutions.com/recipes-v2/230446.jpg",
      title: "Hambúrguer Duplo",
      description: "Saboroso hambúrguer duplo com vinagrete e nossa deliciosa maionese Hellmann's.",
      price: 29.90,
      quantity: 0,
    },
    {
      id: 1,
      image:
        "https://assets.unileversolutions.com/recipes-v2/230447.jpg?imwidth=1600",
      title: "Hambúrguer Estilo Americano",
      description: "Aquele tradicional hambúrguer americano, com carne, tomate, alface, cebola e picles!",
      price: 23.55,
      quantity: 0,
    },
    {
      id: 2,
      image:
        "https://assets.unileversolutions.com/recipes-v2/211794.jpg?imwidth=1600",
      title: "Hambúrguer Parmegiana",
      description: "Hambúrguer e Parmegiana! Com o queijo derretido e o sabor do molho de tomate",
      price: 27.50,
      quantity: 0,
    },
  ],

  'drinks': [
    {
      id: 3,
      image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/james-yarema-wQFmDhrvVSs-unsplash.jpg?w=1200&h=900&crop=1',
      title: 'Coca Cola Lata',
      description: 'Pega esse sabor',
      price: 9.90,
      quantity: 0,
    },
    {
      id: 4,
      image: 'https://cdn11.bigcommerce.com/s-axqppvczl4/images/stencil/1280x1280/products/830/14941/e15211e1-3d04-4ffc-a940-456c96973c7e__48699.1650619047.jpg?c=2',
      title: 'Fanta Laranja Lata',
      description: 'Aquele sabor original',
      price: 8.95,
      quantity: 0,
    },
    {
      id: 5,
      image: 'https://supsaojoao.com.br/4464-large_default/agua-mineral-lind-agua-500ml-cgas.jpg',
      title: 'Água sem gás',
      description: 'Tá com sede, beba água',
      price: 6.90,
      quantity: 0,
    },
  ],
  'acai': [
    {
      id: 6,
      image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-acai-na-tigela-2.jpg.webp',
      title: 'Açaí banana e morango',
      description: 'Decore com três morangos cortados ao meio e a outra metade da banana',
      price: 14.70,
      quantity: 0,
    },
    {
      id: 7,
      image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-acai-na-tigela-5.jpg.webp',
      title: 'Açaí na tigela fit',
      description: '2 polpas de açaí, 1 banana média, 50 ml de água, adoçante a gosto',
      price: 19.90,
      quantity: 0,
    },
    {
      id: 8,
      image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-acai-na-tigela-4.jpg.webp',
      title: 'Açaí na tigela proteico com manga',
      description: '1 polpa de açai, manga protein a gosto, granola a gosto',
      price: 13.60,
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
  body.classList.add("show-cart");
});

buttonCloseCart.addEventListener('click', () => {
  body.classList.remove('show-cart')
})



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

  database.acai.map(acais => {
    acai.innerHTML += `
    <div class='card-drinks'>
      <img src="${acais.image}" alt="${acais.title}"/>
      <div class="info">
        <p class="title-card">${acais.title}</p>
        <p class="description-card">${acais.description}</p>
        <p class="price-card">R$ ${acais.price.toFixed(2)}</p>
        <button key="${acais.id}" class="button-add">Adicionar</button>
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

  database.acai.map(acai => {
    if (acai.quantity > 0) {
      cart.innerHTML += `
      <div class='box-cart'>
        <img src="${acai.image}" alt="${acai.title}"/>
        <div class="info-product">
          <p class="title-card">${acai.title}</p>
          <p class="qtd-card">Qtd: ${acai.quantity}</p>
          <p class="price-card">R$ ${acai.price.toFixed(2)}</p>
        </div>
      </div>
      `
    }
  })
  quantity.innerHTML = document.querySelectorAll('.box-cart').length
  console.log(products)
}

function sumItemsCart() {
  let total = 0
  let entrega = 3.00
  database.burgers.map(burger => {
    total += burger.price * burger.quantity
  })
  database.drinks.map(drink => {
    total += drink.price * drink.quantity
  })
  database.acai.map(acai => {
    total += acai.price * acai.quantity
  })

  totalItems.innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`

  total = Number(total.toFixed(2)) + Number(entrega.toFixed(2))

  totalPrice.innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`

  return total
}

for (let i = 0; i < buttonsAdd.length; i++) {
  buttonsAdd[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    database.burgers.map(burger => {
      if (burger.id == key) {
        burger.quantity++
        
          products.push({
            title: burger.title,
            price: burger.price,
            quantity: burger.quantity
          })
      
      }
    })
    database.drinks.map(drink => {
      if (drink.id == key) {
        drink.quantity++
        if(drink.quantity > 0) {
          products.push({
            title: drink.title,
            price: drink.price,
            quantity: drink.quantity
          })
        }
      }
    })
    database.acai.map(acai => {
      if (acai.id == key) {
        acai.quantity++
        if(acai.quantity > 0) {
          products.push({
            title: acai.title,
            price: acai.price,
            quantity: acai.quantity
          })
        }
      }
    })
    updateCart()
    sumItemsCart()
  })
}

searchAddress.addEventListener('click', async (e) => {
  e.preventDefault()
  const cep = searchAddressInput.value

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await response.json()

  const dataAddress = {
    road: data.logradouro,
    city: data.localidade,
    state: data.uf,
    bairro: data.bairro
  }

  road.innerHTML = dataAddress.road
  city.innerHTML = dataAddress.city
  state.innerHTML = dataAddress.state
  bairro.innerHTML = dataAddress.bairro

  number.focus()

  const buttons = document.querySelectorAll('.form-payment button')

  buttons.forEach(button => {

    button.addEventListener('click', () => {
      chosenPaymentMethod = button.textContent
    })
  })

})



confirmedOrder.addEventListener('click', () => {
  let total = 0
  let entrega = 3.00

  database.burgers.map(burger => {
    total += burger.price * burger.quantity
  })
  database.drinks.map(drink => {
    total += drink.price * drink.quantity
  })
  database.acai.map(acai => {
    total += acai.price * acai.quantity
  })
  total = Number(total.toFixed(2)) + Number(entrega.toFixed(2))

  const messege = {
    cep: searchAddressInput.value,
    city: city.textContent,
    state: state.textContent,
    bairro: bairro.textContent,
    road: road.textContent,
    number: number.value,
    complement: complement.value,
    paymentMethod: chosenPaymentMethod,
    observed: textArea.value,
    totalPriceItems: total.toFixed(2).replace('.', ','),
  }

  if (products.length > 0 && messege != null) {

        var text = 'Olá, gostaria de fazer um pedido:\n';
        text += `\n*Itens do pedido:*\n\n\${items}`
        text += `\n\n*Endereço de entrega:*`;
        text += `\n${messege.road}, ${messege.complement}, ${messege.number}, ${messege.bairro}`;
        text += `\n${messege.city}, ${messege.state}`;
        text += `\n\n*Observações:*`;
        text += `\n${messege.observed}`;
        text += `\n\n*Total (com entrega): R$ ${messege.totalPriceItems}*`;
    
        var items = '';

    products.forEach((item, index) => {
      items += `*${item.quantity}x* --- ${item.title} ..... R$ ${item.price.toFixed(2).replace('.', ',')} \n`;
  
      if ((index + 1) === products.length) {
        text = text.replace(/\${items}/g, items);
  
        let encode = encodeURI(text);
        let URL = `https://wa.me/5532998139420?text=${encode}`;
  
        // Certifique-se de que confirmedOrder esteja definido corretamente
        confirmedOrder.href = URL;
  
        console.log(text);
      }
    });
  }
  })

