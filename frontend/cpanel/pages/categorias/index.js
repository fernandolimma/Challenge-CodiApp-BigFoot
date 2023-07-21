const categories = {
    bebidas: [],
    combos: [],
};

document.addEventListener('DOMContentLoaded', addClassActive);

const modal = document.getElementById('modal')
const modalNewCategoty = document.getElementById('modal-new-category')

const openModalBnt = document.getElementById('open-modal-btn')
openModalBnt.onclick = () => modal.showModal()
const closeModalBtn = document.getElementById('close-modal')
closeModalBtn.onclick = () => modal.close()

const openModalNewCategoryBtn = document.getElementById('open-modal-new-category')
openModalNewCategoryBtn.onclick = () => modalNewCategoty.showModal()
const closeModalNewCategoryBtn = document.getElementById('close-modal-new-category')
closeModalNewCategoryBtn.onclick = () => modalNewCategoty.close()

const createNewItemBnt = document.getElementById('btnNewItem')
createNewItemBnt.addEventListener('click', createNewItem)

const saveNewCategoryBtn = document.getElementById('saveNewCategoryBtn');
saveNewCategoryBtn.addEventListener('click', saveNewCategory);

function createNewItem() {
    const newItemsList = document.getElementById('itens-list')
    const newItemContainer = document.createElement('div')

    const labelName = createLabel('Nome', 'itemName')
    const Inputname = createInput('text', 'name')

    const labelDescription = createLabel('Descrição', 'itemDescription')
    const inputDescription = createInput('text', 'description')

    const labelPhoto = createLabel('Foto do produto', 'photo')
    const inputPhoto = createInput('image', 'image')

    const labelPrice = createLabel('Preço', 'itemDescription')
    const inputPrice = createInput('number', 'price')

    newItemContainer.id = 'itemContainer'

    const btnRemoveItem = document.createElement('button')
    btnRemoveItem.type = 'button'
    btnRemoveItem.innerText = 'Remover'
    btnRemoveItem.id = 'btnRemove'
    btnRemoveItem.addEventListener('click', function () {
        newItemsList.removeChild(newItemContainer)
    })

    newItemContainer.append(labelName, Inputname, labelDescription, inputDescription, labelPhoto, inputPhoto, labelPrice, inputPrice, btnRemoveItem)
    newItemsList.append(newItemContainer)
}

function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor

    return label
}

function createInput(type, id) {
    const input = document.createElement('input')
    input.type = type
    input.id = id

    return input
}

function addClassActive() {
    const categoryButtons = document.querySelectorAll('.category');

    categoryButtons.forEach((button) => {
        button.addEventListener('click', () => {
            categoryButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            // showItems(bebidas)
            showItems(button.innerText.toLowerCase());
        });
    });
}

function saveNewCategory() {
    const categoriesElement = document.querySelector('.categories')
    const name = document.getElementById('categoryName').value

    const div = document.createElement('div')
    categories[name] = []
    div.innerText = name
    div.classList = 'category'
    div.onclick = () => showItems(name)

    categoriesElement.append(div)
    modalNewCategoty.close()

    addClassActive()
}

function showItems(category) {
    const itemsList = document.getElementById('items');
    itemsList.innerHTML = '';

    const categoryItems = categories[category];
    for (const item of categoryItems) {
        const itemContainer = document.createElement('div')
        const listItem = document.createElement('li');
        const btnExcluir = document.createElement('span')

        btnExcluir.innerHTML = '&times;'
        btnExcluir.addEventListener('click', function () {
            itemsList.removeChild(itemContainer)
        })
        listItem.textContent = item.name
        listItem.onclick = () => showItemDetails(item);

        itemContainer.append(listItem, btnExcluir)
        itemsList.appendChild(itemContainer);
    }
}

function showItemDetails(item) {
    const itemModalDetails = document.getElementById('item-modal-details');
    const titleElement = document.getElementById('item-modal-title');
    const descriptionElement = document.getElementById('item-modal-description');
    const imageElement = document.getElementById('item-modal-image');
    const priceElement = document.getElementById('item-modal-price');

    titleElement.textContent = item.name;
    descriptionElement.textContent = item.description;
    imageElement.src = item.image;
    priceElement.textContent = `Preço: R$ ${item.price.toFixed(2)}`;

    itemModalDetails.showModal();
}

function closeItemModalDetails() {
    const itemModalDetails = document.getElementById('item-modal-details');
    itemModalDetails.close()
}

function saveItem() {
    const categoryName = document.querySelector('.category.active').innerText;

    const itemsInsideList = document.querySelector('#modal #itens-list')
    const items = document.querySelectorAll('#itemContainer')

    const newItems = []; // Array temporário para armazenar os novos itens

    let isInputsFill = true; // Variável para verificar se todos os campos estão preenchidos corretamente

    items.forEach((item) => {
        const name = item.querySelector(`input[type="text"][id="name"]`).value;
        const description = item.querySelector(`input[type="text"][id="description"]`).value;
        const image = item.querySelector(`input[type="image"][id="image"]`).value;
        const price = parseFloat(item.querySelector(`input[type="number"][id="price"]`).value);

        if (!name || !description || isNaN(price)) {
            alert('Por favor, preencha todos os campos corretamente.');
            isInputsFill = false
            return;
        }

        const newItem = {
            name,
            description,
            image,
            price
        };
        newItems.push(newItem)
    })

    if (isInputsFill) {
        categories[categoryName.toLowerCase()].push(...newItems);
        modal.close();
        showItems(categoryName.toLowerCase());
        itemsInsideList.innerHTML = ''
    }
}