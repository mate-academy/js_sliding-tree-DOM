'use strict';

// write code here
const liNodeList = document.querySelectorAll('ul li');

for (const li of liNodeList) {
  if (li.querySelector('ul')) {
    const goodsName = document.createElement('span');

    for (const part of li.childNodes) {
      if (part.nodeType === 3 && part.textContent.trim().length !== 0) {
        goodsName.textContent = part.textContent.trim();
        // console.log(part.textContent);
        part.textContent = '';
      }
    }

    li.prepend(goodsName);
  }
}

const goodsNames = document.querySelectorAll('span');

for (const good of goodsNames) {
  good.addEventListener('click', () => {
    const parentLi = good.parentNode;

    const ul = parentLi.querySelector('ul');

    if (ul.style.display !== 'none') {
      ul.style.display = 'none';
    } else {
      ul.style.display = '';
    }
  });
}
