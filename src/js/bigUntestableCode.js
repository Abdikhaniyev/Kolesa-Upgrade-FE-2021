import { getItemsRequest, toggleFavoriteRequest } from './requests';
import { showError, hideError } from './errorActions';
import { showLoader, hideLoader } from './loaderActions';
import { setContentText, addEventListenerToButtons } from './contentActions';
import { appSetContent, showApp } from './appActions';

export default () => {
    hideError();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError('Произошла ошибка, попробуйте ещё раз.');
            } else {
                const appElement = document.querySelector('#app');

                appSetContent(data.html);
                showApp();

                addEventListenerToButtons(appElement, (e) => {
                    e.preventDefault();

                    setContentText(e, 'Загрузка...');

                    toggleFavoriteRequest(e.currentTarget.dataset.id)
                        .then(({ data: buttonData }) => {
                            if (buttonData.result === 'set') {
                                setContentText(e, '🌝');
                            } else {
                                setContentText(e, '🌚');
                            }
                        });
                });
            }
        })
        .catch((e) => {
            showError(e.message);
        })
        .finally(() => {
            hideLoader();
        });
};
