'use strict';

const tree = document.querySelector('.tree');

// 1. Динамічно готуємо структуру: огортаємо текст у <span>
// Використовуємо querySelectorAll для пошуку всіх елементів списку
tree.querySelectorAll('li').forEach((li) => {
  const span = document.createElement('span');

  // Додаємо span на початок елемента li
  li.prepend(span);

  // Переміщуємо текстовий вузол (назву) всередину span
  // span.nextSibling — це текстовий вузол, що йде відразу після створеного span
  if (span.nextSibling && span.nextSibling.nodeType === Node.TEXT_NODE) {
    span.append(span.nextSibling);
  }
});

// 2. Додаємо обробник подій через addEventListener
tree.addEventListener('click', (evt) => {
  // Перевіряємо, чи клік був саме по тексту (тегу SPAN)
  if (evt.target.tagName !== 'SPAN') {
    return;
  }

  // Знаходимо сусідній список <ul> відносно нашого <span>
  const childrenContainer = evt.target.parentNode.querySelector('ul');

  // Якщо вкладеного списку немає — це кінцевий елемент, нічого не робимо
  if (!childrenContainer) {
    return;
  }

  // Перемикаємо видимість (властивість hidden)
  childrenContainer.hidden = !childrenContainer.hidden;
});
