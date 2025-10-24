'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  if (!tree) return;

  // Funkcja rekurencyjna, która opakowuje tekst li w span i dodaje toggle
  function wrapTextAndAddToggle(li) {
    const childUl = li.querySelector(':scope > ul');
    if (!childUl) return;

    // Znajdź tylko tekst nagłówka (tekst bez ul)
    const textNodes = Array.from(li.childNodes).filter(
      node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );

    textNodes.forEach(node => {
      const span = document.createElement('span');
      span.textContent = node.textContent.trim();
      node.textContent = '';
      li.insertBefore(span, node);

      // Dodaj kliknięcie do span
      span.style.cursor = 'pointer';
      span.addEventListener('click', e => {
        e.stopPropagation(); // kliknięcie nie propaguje się do rodziców
        childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
      });
    });

    // Rekurencyjnie dla wszystkich podlist li
    childUl.querySelectorAll(':scope > li').forEach(wrapTextAndAddToggle);
  }

  // Start od pierwszego poziomu drzewa
  tree.querySelectorAll(':scope > li').forEach(wrapTextAndAddToggle);
});
