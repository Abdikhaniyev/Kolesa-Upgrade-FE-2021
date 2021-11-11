export const showLoader = () => {
    document.querySelector('#loader').style.display = 'block';
};

export const hideLoader = () => {
    document.querySelector('#loader').style.display = 'none';
};

export const createLoader = () => {
    const loader = document.createElement('div');

    loader.setAttribute('id', 'loader');
    document.querySelector('body').append(loader);

    return loader;
};
