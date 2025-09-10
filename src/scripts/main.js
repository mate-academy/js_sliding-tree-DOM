'use strict';

const collectionLi = document.querySelectorAll('li');

for (const li of collectionLi) {
  const wrapper = document.createElement('span');
  const collectionUl = li.querySelector(':scope > ul');
  const arrNode = [];

  li.insertBefore(wrapper, li.firstChild);

  for (const child of li.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      arrNode.push(child);
    }
  }

  for (const el of arrNode) {
    wrapper.appendChild(el);
  }

  wrapper.addEventListener('click', (e) => {
    if (
      e.target !== wrapper &&
      !(e.target.nodeType === Node.TEXT_NODE && e.target.parentNode === wrapper)
    ) {
      return;
    }

    if (collectionUl) {
      collectionUl.classList.toggle('hidden');
    }
  });
}
