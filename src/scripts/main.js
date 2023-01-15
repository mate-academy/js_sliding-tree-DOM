'use strict';

const itemList = document.querySelectorAll('li');

function wrap(toWrap) {
  const wrapper = document.createElement('span');

  toWrap.parentNode.prepend(wrapper);
  wrapper.prepend(toWrap);
}

itemList.forEach((item) => {
  wrap(item.firstChild);
});

const span = document.querySelectorAll('span');

span.forEach(item => {
  if (item.nextElementSibling) {
    item.addEventListener('click', () => {
      if (item.nextElementSibling.style.display !== 'none') {
        item.nextElementSibling.style.display = 'none';
      } else {
        item.nextElementSibling.style.display = '';
      }
    });
  };
});
