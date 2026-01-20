'use strict';

// Виконуємо одразу після завантаження DOM
document.addEventListener('DOMContentLoaded', function () {
  const tree = document.getElementById('tree');

  if (!tree) {
    return;
  }

  // Сховати всі ul на старті
  tree.querySelectorAll('ul').forEach((ul) => (ul.style.display = 'none'));

  // Делегування кліку на span
  tree.addEventListener('click', function (e) {
    // Реагуємо тільки на span
    if (!(e.target && e.target.nodeName === 'SPAN')) {
      return;
    }

    // Знайти безпосередній дочірній ul
    const ul = e.target.parentElement.querySelector('ul');

    if (!ul) {
      return;
    }

    // Перемикання видимості
    ul.style.display = getComputedStyle(ul).display === 'none' ? '' : 'none';
  });
});
