'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Додаємо тег `span` для кожного заголовка
  document.querySelectorAll('.tree li').forEach((li) => {
    // Якщо в li є вкладений ul, то обгортаємо текст у span
    if (li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.childNodes[0].textContent.trim();
      li.childNodes[0].replaceWith(span);
    }
  });

  // Додаємо обробник подій на кожен span
  document.querySelectorAll('.tree span').forEach((span) => {
    span.addEventListener('click', function () {
      const childUl = this.nextElementSibling;

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
