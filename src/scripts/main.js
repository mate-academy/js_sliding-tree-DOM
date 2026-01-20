'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Вибираємо дерево за класом
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  // 1️⃣ Обгорнути текст кожного li, що містить ul, у span
  tree.querySelectorAll('li').forEach((li) => {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      // Беремо текстовий вузол li
      const textNode = Array.from(li.childNodes).find(
        (n) => n.nodeType === Node.TEXT_NODE,
      );

      if (textNode) {
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        li.insertBefore(span, nestedUl); // вставляємо перед ul
        li.removeChild(textNode); // видаляємо старий текст
      }
    }
  });

  // 2️⃣ Сховати всі ul на старті
  tree.querySelectorAll('ul').forEach((ul) => (ul.style.display = 'none'));

  // 3️⃣ Делегування кліку на span
  tree.addEventListener('click', function (e) {
    if (!(e.target && e.target.nodeName === 'SPAN')) {
      return;
    }

    const ul = e.target.parentElement.querySelector('ul');

    if (!ul) {
      return;
    }

    // Toggle видимості
    ul.style.display = getComputedStyle(ul).display === 'none' ? '' : 'none';
  });
});
