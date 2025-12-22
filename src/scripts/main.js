'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((el) => {
  const childList = el.querySelector('ul');

  if (childList) {
    const text = Array.from(el.childNodes).find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
    );

    if (text) {
      const span = document.createElement('span');

      span.appendChild(text);
      el.prepend(span);

      span.addEventListener('click', () => {
        if (
          childList.style.display === '' ||
          childList.style.display === 'block'
        ) {
          childList.style.display = 'none';
        } else {
          childList.style.display = 'block';
        }
      });
    }
  }
});
