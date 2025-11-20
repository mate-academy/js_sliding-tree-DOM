/* eslint-disable */
'use strict';

const tree = document.querySelector('.tree');

const li = document.querySelectorAll('li');
li.forEach((li) => {
  const firstChild = li.firstChild; // Берём первый дочерний узел внутри li (это текст заголовка).
  const createSpan = document.createElement('span'); // создаем span.
  createSpan.innerText = firstChild.textContent; // Переносим текст заголовка из li в span.
  li.replaceChild(createSpan, firstChild); // внутри li заменяем текстовый узел на span.

  createSpan.addEventListener('click', (event) => {
    event.target; // кликаем по span
    const searchLi = event.target.closest('li'); // Поиск родители li c помощью closest.
    // Проверили или существует ul
    if (searchLi.querySelector('ul')) {
      const ul = searchLi.querySelector('ul'); // если существует сохранем его в переменную.
      ul.hidden = ul.hidden ? false : true; // false - открыть, true - cкрыть.
    }
  });
});

// console.log(firstChild);

// Задание: Sliding tree

// Создайте дерево, элементы которого можно разворачивать.

// Требования:

// При клике на заголовок вложенные элементы должны скрываться или показываться.

// Клик «мимо текста» заголовка (в пустое место) не должен ничего делать.

// Подсказка: вам нужно обернуть текст каждого заголовка в тег <span>.

// Не изменяйте HTML или CSS в этом задании.
