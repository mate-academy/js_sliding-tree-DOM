'use strict';

function wrapTextNodesInSpan() {
  const listItems = document.querySelectorAll('ul.tree li');

  listItems.forEach((item) => {
    // Перевіряємо, чи є підсписки (ul) в елементі
    if (item.querySelector('ul')) {
      // Проходимо по всіх текстових вузлах в елементі
      Array.from(item.childNodes).forEach((child) => {
        // Перевіряємо, чи це текстовий вузол і він не останній рівень
        if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
          const span = document.createElement('span');

          span.textContent = child.nodeValue;
          item.replaceChild(span, child);
        }
      });
    }
  });
}

wrapTextNodesInSpan();

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', function hide() {
    if (
      span.nextElementSibling &&
      span.nextElementSibling.tagName.toLowerCase() === 'ul'
    ) {
      span.nextElementSibling.style = 'display: none';

      span.addEventListener('click', function show() {
        span.nextElementSibling.style = 'display: initial';
        span.removeEventListener('click', show);
      });

      span.removeEventListener('click', hide);
    }
  });
});
