

'use strict';

const liList = document.querySelectorAll('li');

liList.forEach((li) => {
  const textNode = li.firstChild;

  if (textNode && textNode.nodeType === 3) {
    const text = textNode.textContent.trim();

    // створюємо span тільки якщо текст не порожній
    if (text.length > 0) {
      const span = document.createElement('span');
      span.textContent = text;
      li.replaceChild(span, textNode);

      span.addEventListener('click', (e) => {
        const ul = e.currentTarget.nextElementSibling; // завжди правильний ul
        if (!ul) return;

        ul.style.display =
          ul.style.display === '' || ul.style.display === 'block'
            ? 'none'
            : 'block';
      });
    }
  }
});
