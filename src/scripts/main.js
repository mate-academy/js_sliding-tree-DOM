'use strict';

const tableHeader = document.querySelectorAll('li:has(ul)');

for (const hdr of tableHeader) {
  const span = document.createElement('span');

  span.textContent = hdr.firstChild.textContent.trim();
  hdr.replaceChild(span, hdr.firstChild);

  span.addEventListener('click', () => {
    const ul = hdr.querySelector('ul');

    ul.toggleAttribute('hidden');
  });
}
