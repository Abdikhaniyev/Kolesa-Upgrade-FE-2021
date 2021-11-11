export const createApp = () => {
    const appElement = document.createElement('div');

    appElement.setAttribute('id', 'app');
    document.querySelector('body').append(appElement);
};

export const appSetContent = (content) => {
    const appElement = document.querySelector('#app');

    appElement.innerHTML = content;
};

export const showApp = () => {
    const appElement = document.querySelector('#app');

    appElement.style.display = 'block';
};
