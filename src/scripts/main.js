'use strict';

const tree = document.querySelector('.tree');
const uls = tree.querySelectorAll('ul');

const headers = [];

for (const elem of uls) {
  const liElem = elem.parentNode;
  const liTextElem = liElem.firstChild;
  const wrap = document.createElement('span');

  wrap.textContent = liTextElem.textContent;

  liElem.replaceChild(wrap, liTextElem);
  headers.push(liElem.firstChild);
}

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    content.style.display = content.style.display === 'none' ? '' : 'none';
  });
});
