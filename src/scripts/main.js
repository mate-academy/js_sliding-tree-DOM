'use strict';

const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  const text = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (text !== undefined) {
    span.textContent = text.textContent.trim();
    li.insertBefore(span, text);
    li.removeChild(text);
  }
}

const spanItems = document.querySelectorAll('span');

spanItems.forEach((span) => {
  span.addEventListener('click', () => {
    const li = span.parentNode;
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      nestedUl.hidden = !nestedUl.hidden;
    }
  });
});
