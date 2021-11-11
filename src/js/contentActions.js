export const setContentText = (e, text) => {
    e.currentTarget.textContent = text;
};

export const addEventListenerToButtons = (parent, listener) => {
    Array.from(parent.querySelectorAll('button')).forEach((button) => {
        button.addEventListener('click', listener);
    });
};
