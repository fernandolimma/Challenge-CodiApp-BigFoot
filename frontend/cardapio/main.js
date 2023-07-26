const buttonOpenHour = document.querySelector(".button-hour")
const buttonRemoveHour = document.querySelector(".close-hour")
const body = document.querySelector("body")
const boxCardapio = document.querySelector(".caixas")

const data = [
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão, Carne, queijo , molho especial.",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão, Carne, queijo , molho especial.",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão, Carne, queijo",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão, Carne, queijo , molho especial.",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão, Carne, queijo , molho especial.",
    price: 19.99,
  },
]

buttonOpenHour.addEventListener("click", () => {
  body.classList.add("show")
})

buttonRemoveHour.addEventListener("click", () => {
  body.classList.remove("show")
})

const element = data.map((info) => {
  return `
    <div class="box-cardapio">
      <div class="imagem">
        <img
          src="${info.image}"
          alt="Descrição da Imagem"
        />
      </div>

      <div class="texto">
        <h2>${info.title}</h2>
        <p>${info.description}</p>
        <strong>${info.price}</strong>
        <button>Adicionar</button>
      </div>
    </div>
  `
})

boxCardapio.innerHTML = element.join("")
