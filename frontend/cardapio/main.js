const buttonOpenHour = document.querySelector(".button-hour");
const buttonRemoveHour = document.querySelector(".close-hour");
const body = document.querySelector("body");
const boxCardapio = document.querySelector(".caixas");

const data = [
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 23.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-premium/burger-costeleta-dupla-queijo-cheddar-duplo-bacon-cebola-frita-picles-molho-e-pao-artesanal_524291-99.jpg?size=626&ext=jpg&ga=GA1.1.462900268.1690408347&semt=sph",
    title: "Duplo Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 26.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?size=626&ext=jpg&ga=GA1.2.462900268.1690408347&semt=sph",
    title: "X-Burguer",
    description: " Pão brioche ,Carne, cheddar , farofa de bacon , salada ",
    price: 39.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-premium/hamburguer-com-queijo-cheddar-em-prato-de-madeira_74692-589.jpg?size=626&ext=jpg&ga=GA1.1.462900268.1690408347&semt=sph",
    title: "X-Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-premium/hamburguer-com-carne-bacon-queijo-picles-tomate-e-molho-em-um-fundo-preto-de-madeira_524291-655.jpg?size=626&ext=jpg",
    title: "X-Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburger-gourmet-grelhado-com-legumes-frescos-e-batatas-fritas-geradas-por-ia_188544-38732.jpg?size=626&ext=jpg&ga=GA1.1.462900268.1690408347&semt=ais",
    title: "X-Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 19.99,
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
    title: "X-Burguer",
    description: "Pão brioche ,Carne, cheddar , farofa de bacon , salada",
    price: 19.99,
  },
];

buttonOpenHour.addEventListener("click", () => {
  body.classList.add("show");
});

buttonRemoveHour.addEventListener("click", () => {
  body.classList.remove("show");
});

const element = data.map((info) => {
  return `
  <div class="box-model">
    <div class="box-cardapio">
        <img
          src="${info.image}"
          alt="Descrição da Imagem"
        />
      <div class="texto">
        <h2>${info.title}</h2>
        <p>${info.description}</p>
        <strong>R$${info.price}</strong>
        <button>Adicionar</button>
      </div>

    </div>
  </div>
  `;
});

boxCardapio.innerHTML = element.join("");
