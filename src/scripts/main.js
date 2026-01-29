'use strict';

// ховаємо ТІЛЬКИ вкладені списки (2+ рівень)
document.querySelectorAll('.tree ul ul').forEach((ul) => {
  ul.hidden = true;
});

document.querySelectorAll('li').forEach((li) => {
  const ul = Array.from(li.children).find((el) => el.tagName === 'UL');

  if (!ul) {
    return;
  }

  const textNode = Array.from(li.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim(),
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();

  li.insertBefore(span, ul);
  li.removeChild(textNode);

  span.addEventListener('click', (e) => {
    e.stopPropagation();
    ul.hidden = !ul.hidden;
  });
});
