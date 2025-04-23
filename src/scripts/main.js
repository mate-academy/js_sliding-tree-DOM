'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree > li, .tree > li ul > li');

  items.forEach((item) => {
    // Якщо <li> має вкладений <ul>, значить це категорія
    const nestedList = item.querySelector('ul');

    if (nestedList) {
      // Витягаємо тільки текстовий вузол перед <ul>
      const firstChild = item.firstChild;

      if (firstChild.nodeType === Node.TEXT_NODE) {
        const text = firstChild.textContent.trim();

        if (text) {
          const span = document.createElement('span');

          span.textContent = text;
          item.insertBefore(span, firstChild);
          item.removeChild(firstChild);
        }
      }
    }
  });

  // ===== 2. Встановлюємо обробник кліку
  const tree = document.querySelector('.tree');

  tree.addEventListener('click', (eventt) => {
    if (eventt.target.tagName !== 'SPAN') {
      return;
    }

    const li = eventt.target.closest('li');
    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
