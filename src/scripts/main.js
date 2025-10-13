'use strict';

// write code here
const treeItems = document.querySelectorAll('.tree li');

// Проходимо по кожному <li>
treeItems.forEach((li) => {
  // Перевіряємо, чи має цей <li> вкладений список
  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  } // Якщо немає вкладеного списку — пропускаємо

  // Беремо текстовий вузол і обгортаємо його у <span>
  const text = li.firstChild.textContent.trim();

  if (!text) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = text;
  li.firstChild.textContent = ''; // очищаємо текст у <li>
  li.insertBefore(span, childUl); // вставляємо span перед вкладеним ul

  // Початково приховуємо вкладений список
  childUl.style.display = 'none';

  // Додаємо обробник кліку тільки на span
  span.addEventListener('click', () => {
    if (childUl.style.display === 'none') {
      childUl.style.display = 'block';
    } else {
      childUl.style.display = 'none';
    }
  });
});
