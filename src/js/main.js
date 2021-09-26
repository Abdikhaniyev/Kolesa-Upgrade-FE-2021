import '../css/style.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="overlay"></div>

    <div class="modal">
    <div class="modal__images">
        <div class="active-image">
            <img alt="active image" src="/src/assets/image_1.png" width="330" height="330">
        </div>

        <div class="all-images">
            <img alt="image" src="/src/assets/image_2.png" width="50" height="50">
            <img class="active" alt="image" src="/src/assets/image_3.png" width="50" height="50">
            <img alt="image" src="/src/assets/image_4.png" width="50" height="50">
        </div>
    </div>

    <div class="modal__content">
        <div class="modal__content-top">
        <h2 class="title">
            Футболка "Эволюционируй или сдохни"
        </h2>

        <span class="scores">100 баллов</span>

        <button type="button" class="action">Заказать</button>

        <div class="balance__container">
            <span class="balance__container-title">
                Твой баланс:
            </span>
            <span class="balance__container-value">
                3 945 баллов
            </span>
        </div>
        </div>

        <div class="modal__content-bottom">
            <h3 class="colors-title">Цвета:</h3>

            <div class="form-group">
                <div class="form-check">
                    <input class="color-input" type="radio" name="color" id="blue-color" checked>
                    <label class="color-label" for="blue-color">Синий</label>
                </div>

                <div class="form-check">
                    <input class="color-input" type="radio" name="color" id="beige-color">
                    <label class="color-label" for="beige-color">Бежевый</label>
                </div>

                <div class="form-check">
                    <input class="color-input" type="radio" name="color" id="gray-color">
                    <label class="color-label" for="gray-color">Серый</label>
                </div>
            </div>

            <h3 class="sizes-title">Размер:</h3>

            <div class="form-group">
                <div class="form-check">
                    <input class="size-input" type="radio" name="size" id="s-size" checked>
                    <label class="size-label" for="s-size">S</label>
                </div>

                <div class="form-check">
                    <input class="size-input" type="radio" name="size" id="m-size">
                    <label class="size-label" for="m-size">M</label>
                </div>

                <div class="form-check">
                    <input class="size-input" type="radio" name="size" id="l-size">
                    <label class="size-label" for="l-size">L</label>
                </div>
            </div>

            <h3 class="detail-title">Детали:</h3>
            <p>Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%</p>

            <h3 class="help-title">Как выбрать размер:</h3>
            <p>Написать дяде Рику для уточнения.</p>
        </div>
    </div>

    <button class="modal__close-btn" type="button"></button>
    </div>
  </div>
`;
