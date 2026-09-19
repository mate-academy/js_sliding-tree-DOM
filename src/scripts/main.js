'use strict';

const headersList = document.querySelectorAll('li:has(ul)');

for (const headerElement of headersList) {
  const textNode = headerElement.firstChild;
  const text = textNode.textContent;
  const title = text.trim();
  const titleStart = text.indexOf(title);
  const header = document.createElement('span');

  header.className = 'list__header';
  header.textContent = title;

  textNode.replaceWith(
    document.createTextNode(text.slice(0, titleStart)),
    header,
    document.createTextNode(text.slice(titleStart + title.length)),
  );

  header.addEventListener('click', () => {
    const list = headerElement.querySelector('ul');

    list.style.display = list.style.display === 'none' ? '' : 'none';
  });
}
