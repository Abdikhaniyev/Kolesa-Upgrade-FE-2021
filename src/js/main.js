import '../css/style.scss';

const clothes = [
    {
        id:          0,
        title:       'Футболка "Эволюционируй или сдохни"',
        price:       '220',
        sizes:       'S/M/L',
        image:       '/src/assets/product.png',
        isNew:       true,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          1,
        title:       'Футболка "Не ссать"',
        price:       '220',
        sizes:       'S/M/L',
        image:       '/src/assets/image_7.png',
        isNew:       true,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          2,
        title:       'Футболка "Люди наше все"',
        price:       '200',
        sizes:       'S/M/L',
        image:       '/src/assets/image_8.png',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          3,
        title:       'Футболка "Kolesa Group"',
        price:       '210',
        sizes:       'S/M/L',
        image:       '/src/assets/image_1.png',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          4,
        title:       'Футболка "Пацан сказал, пацан сделал"',
        price:       '215',
        sizes:       'S/M/L',
        image:       '/src/assets/product.png',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          5,
        title:       'Футболка "Успеем или нам п#здец"',
        price:       '250',
        sizes:       'S/M/L',
        image:       '/src/assets/product.png',
        isNew:       false,
        description: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
];

const accessories = [
    {
        id:          6,
        title:       'Носочки "Kolesa Group"',
        price:       '110',
        sizes:       'S/M/L',
        image:       '/src/assets/image_5.png',
        isNew:       false,
        description: 'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          7,
        title:       'Бутылка "Kolesa Group"',
        price:       '60',
        sizes:       'S/M/L',
        image:       '/src/assets/image_6.png',
        isNew:       true,
        description: 'Очень крутая бутылка от Kolesa Group',
    },
    {
        id:          8,
        title:       'Сумка "Kolesa Group"',
        price:       '260',
        sizes:       'S/M/L',
        image:       '/src/assets/image_9.png',
        isNew:       false,
        description: 'Очень крутая сумка от Kolesa Group',
    },
    {
        id:          9,
        title:       'Носочки "Kolesa Group"',
        price:       '50',
        sizes:       'S/M/L',
        image:       '/src/assets/image_5.png',
        isNew:       false,
        description: 'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          10,
        title:       'Носочки "Kolesa Group"',
        price:       '55',
        sizes:       'S/M/L',
        image:       '/src/assets/image_5.png',
        isNew:       false,
        description: 'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:          11,
        title:       'Носочки "Kolesa Group"',
        price:       '90',
        sizes:       'S/M/L',
        image:       '/src/assets/image_5.png',
        isNew:       false,
        description: 'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
];

const container = document.querySelector('.js__products__container');
const allProducts = [...clothes, ...accessories];

// sort all arrays
const sortProducts = (array) => {
    array.sort((a, b) => {
        if (a.isNew > b.isNew) {
            return -1;
        }

        return 1;
    });
};

sortProducts(allProducts);
sortProducts(clothes);
sortProducts(accessories);

const makeProductCard = (id, title, price, sizes, image, isNew) => {
    // Create element
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBadge = document.createElement('span');
    const cardImage = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardPrice = document.createElement('div');
    const cardName = document.createElement('div');
    const cardSize = document.createElement('div');
    const cardButton = document.createElement('button');

    // Add classes, text, attrs ...
    card.classList.add('js__products__card', 'products__card', 'card');
    cardHeader.classList.add('card__header');
    cardBadge.classList.add('card__badge');
    cardImage.classList.add('card__img');
    cardBody.classList.add('card__body');
    cardPrice.classList.add('card__price');
    cardName.classList.add('card__name');
    cardSize.classList.add('card__size');
    cardButton.classList.add('card__action', 'btn');

    card.id = id;
    cardBadge.innerHTML = 'New';
    cardImage.src = image;
    cardImage.alt = 'product';
    cardPrice.innerHTML = `${price} баллов`;
    cardName.innerHTML = title;
    cardSize.innerHTML = sizes;
    cardButton.innerHTML = 'Заказать';

    // Appent elements
    card.append(cardHeader);
    card.append(cardBody);

    if (isNew) cardHeader.append(cardBadge);

    cardHeader.append(cardImage);

    cardBody.append(cardPrice);
    cardBody.append(cardName);
    cardBody.append(cardSize);
    cardBody.append(cardButton);

    return card;
};

const modal = document.querySelector('.js__modal');
const overlay = document.querySelector('.js__overlay');
const modalCloseBtn = document.querySelector('.js__modal__close-btn');
const modalActionBtn = document.querySelector('.js__modal__action');

const makeModalWindow = (product) => {
    const {
        title, price, image, description,
    } = product;
    const modalTitle = document.querySelector('.js__modal__title');
    const modalScores = document.querySelector('.js__modal__scores');
    const modalActiveImage = document.querySelector('.js__modal__active-image');
    const modalAllImages = document.querySelector('.js__modal__all-images');
    const modalDescription = document.querySelector('.js__modal_description');

    const ActiveImage = document.createElement('img');
    const Image = document.createElement('img');

    ActiveImage.width = '330';
    ActiveImage.height = '330';
    ActiveImage.src = image;

    Image.width = '50';
    Image.height = '50';
    Image.src = image;
    Image.classList.add('modal__image', 'active');

    modalTitle.innerHTML = title;
    modalScores.innerHTML = `${price} баллов`;

    modalActiveImage.innerHTML = '';
    modalActiveImage.append(ActiveImage);
    modalAllImages.innerHTML = '';
    modalAllImages.append(Image);

    modalDescription.innerHTML = description;
};

const addEventListenerToModal = () => {
    const allCards = document.querySelectorAll('.js__products__card');

    allCards.forEach((card) => {
        card.addEventListener('click', () => {
            modal.classList.add('active');
            overlay.classList.add('active');

            const product = allProducts.find(
                item => parseInt(item.id, 10) === parseInt(card.id, 10),
            );

            console.log(product);
            makeModalWindow(product);
        });
    });
};

[modalActionBtn, modalCloseBtn, overlay].forEach((element) => {
    element.addEventListener('click', () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
});

const renderProducts = (products) => {
    products.forEach((product) => {
        const {
            id, title, price, sizes, image, isNew,
        } = product;

        const card = makeProductCard(id, title, price, sizes, image, isNew);

        container.append(card);
    });

    addEventListenerToModal();
};

const filterBtns = document.querySelectorAll('.js__products__filter-btn');

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document
            .querySelector('.js__products__filter-btn.active')
            .classList.remove('active');
        btn.classList.add('active');

        if (btn.dataset.key === 'all') {
            // remove all elements
            container.innerHTML = '';
            // render new elements
            renderProducts(allProducts);
        } else if (btn.dataset.key === 'clothes') {
            // remove all elements
            container.innerHTML = '';
            // render new elements
            renderProducts(clothes);
        } else if (btn.dataset.key === 'accessories') {
            // remove all elements
            container.innerHTML = '';
            // render new elements
            renderProducts(accessories);
        }
    });
});

renderProducts(allProducts);
