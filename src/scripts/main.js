'use strict';

// write code here

const liList = document.querySelectorAll('li');

liList.forEach((li) => {
  // тут заголовок (вузол)
  const textNode = li.firstChild;

  // nodeType - повертає числовий код,
  // що вказує якого типу цей вузол
  if (textNode && textNode.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    li.replaceChild(span, textNode);

    span.addEventListener('click', (e) => {
      if (e.target.tagName !== 'SPAN') {
        return;
      }

      const ul = e.target.nextElementSibling;

      if (!ul) {
        return;
      }

      ul.style.display =
        ul.style.display === '' || ul.style.display === 'block'
          ? 'none'
          : 'block';
    });
  }
});
