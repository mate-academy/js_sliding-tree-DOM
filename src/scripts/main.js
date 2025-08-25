'use strict';

// Знаходимо всі <li>, у яких є вкладений <ul>
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  // Отримуємо текст вузла (без дочірніх <ul>)
  const firstNode = li.firstChild;

  if (
    firstNode &&
    firstNode.nodeType === Node.TEXT_NODE &&
    firstNode.textContent.trim()
  ) {
    const span = document.createElement('span');

    span.textContent = firstNode.textContent.trim();
    firstNode.replaceWith(span);
  }
});

// Делегування кліку
document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  } // ігноруємо кліки не по тексту

  const parentLi = e.target.parentElement;
  const nestedUl = parentLi.querySelector('ul');

  if (!nestedUl) {
    return;
  } // якщо дочірніх немає — нічого не робимо

  nestedUl.hidden = !nestedUl.hidden; // ховаємо / показуємо
});
