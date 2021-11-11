/**
 * @jest-environment jsdom
 */

import { createApp, showApp, appSetContent } from '../appActions';
import { addEventListenerToButtons } from '../contentActions';
import { createLoader, hideLoader, showLoader } from '../loaderActions';

const body = document.querySelector('body');

describe('Группа тестов для DOM.', () => {
    beforeAll(() => {
        createApp();
        showApp();
    });

    afterAll(() => {
        appSetContent('');
    });

    test('Тест на добавление контента', () => {
        appSetContent('Kolesa Group');

        expect(body).toMatchSnapshot();
    });

    test('Тест на отображение и скрытие лоадера', () => {
        const loader = createLoader();

        showLoader();
        expect(loader).toBeDefined();
        expect(loader.style.display).toBe('block');

        hideLoader();
        expect(loader.style.display).toBe('none');
    });

    test('Тест на добавление событий', () => {
        const clickMock = jest.fn();
        const container = document.createElement('div');

        for (let i = 0; i < 3; i += 1) {
            const button = document.createElement('button');

            container.append(button);
        }

        body.append(container);

        const buttons = body.querySelectorAll('button');

        addEventListenerToButtons(body, clickMock);
        buttons.forEach((button) => {
            button.click();
            expect(clickMock).toHaveBeenCalled();
        });

        expect(clickMock).toHaveBeenCalledTimes(3);
    });
});
