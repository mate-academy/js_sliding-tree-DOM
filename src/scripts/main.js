'use strict';

// 1. Шукаємо всі li, які мають всередині список ul
const liWithChildren = document.querySelectorAll('li:has(ul)');

liWithChildren.forEach((element) => {
  // 2. Створюємо span для обгортки тексту
  const span = document.createElement('span');
  const textNode = element.firstChild; // Беремо вузол з текстом

  // 3. Переміщуємо текст у span і ставимо span на початок li
  span.append(textNode);
  element.prepend(span);

  // 4. Робимо span візуально клікабельним
  span.style.cursor = 'pointer';

  // 5. Додаємо обробник події кліку
  span.addEventListener('click', () => {
    const childUl = element.querySelector('ul');

    if (childUl) {
      // Перемикаємо видимість списку
      childUl.hidden = !childUl.hidden;
    }
  });
});
