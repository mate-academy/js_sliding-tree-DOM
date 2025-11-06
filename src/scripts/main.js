'use strict';

const tree = document.querySelectorAll('.tree li');

tree.forEach((li) => {
  // Беремо текст із першого текстового вузла
  const text = li.firstChild.textContent.trim();

  // Створюємо <span> і вставляємо текст
  const span = document.createElement('span');

  span.textContent = text;

  // Замінюємо текстовий вузол на <span>
  li.firstChild.replaceWith(span);

  // Обробник кліку по <span>
  span.addEventListener('click', function () {
    const list = li.querySelector('ul');

    if (list) {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
    }
  });
});
