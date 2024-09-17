'use strict';

const mainList = document.querySelector('.tree');

const items = [ ...document.querySelectorAll('li') ];

items.forEach((item) => {
  const wrap = document.createElement('span');

  item.prepend(wrap);
  wrap.append(wrap.nextSibling);
});

mainList.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;

});
