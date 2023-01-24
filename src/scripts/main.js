'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const children = li.children;

  if (children.length > 0 && children[0].tagName === 'UL') {
    const wrap = document.createElement('span');

    li.insertBefore(wrap, li.firstChild);
    wrap.appendChild(li.childNodes[1]);
  }
});

list.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  toggleBlockElementVisibility(item.nextElementSibling);
});

const toggleBlockElementVisibility = (el) => {
  const isHidden = el.style.display === 'none';

  if (isHidden) {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
};
