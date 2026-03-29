'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  // 1. Проходимо по всіх LI і обгортаємо текст у SPAN
  // Це виконає вимогу "обгорнути в span", не чіпаючи index.html вручну
  for (const li of tree.querySelectorAll('li')) {
    const span = document.createElement('span');

    // Вставляємо span перед першим нащадком li (перед текстом)
    li.prepend(span);

    // Переносимо текст (перший вузол) всередину span
    // span.nextSibling — це і є наш текстовий вузол "Fruit", "Red" тощо
    span.append(span.nextSibling);
  }

  // 2. Тепер додаємо логіку кліку (делегування)
  tree.onclick = function (e) {
    // Працюємо тільки якщо клікнули на щойно створений SPAN
    if (event.target.tagName !== 'SPAN') {
      return;
    }

    const parentLi = event.target.closest('li');
    const subList = parentLi.querySelector('ul');

    if (!subList) {
      return;
    }

    // Перемикаємо видимість
    subList.hidden = !subList.hidden;
  };
}
