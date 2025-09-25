'use strict';

const tree = document.querySelector('.tree');

if (!tree) {
  throw new Error('Tree root ".tree" not found');
}

tree.querySelectorAll('li').forEach((li) => {
  const nested = li.querySelector(':scope > ul');

  if (!nested) {
    return;
  }

  const titleTextNode = Array.from(li.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim(),
  );

  if (!titleTextNode) {
    return;
  }

  const title = document.createElement('span');

  title.textContent = titleTextNode.nodeValue.trim();
  titleTextNode.replaceWith(title);

  title.style.cursor = 'pointer';

  title.addEventListener('click', () => {
    nested.hidden = !nested.hidden;
  });
});
