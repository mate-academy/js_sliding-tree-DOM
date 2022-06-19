'use strict';

const listItems = document.querySelectorAll('li');

[...listItems].forEach(item => {
  if (item.children.length > 0) {
    const wrapper = document.createElement('span');

    wrapper.textContent = item.firstChild.textContent;
    wrapper.style.fontWeight = 'bold';

    item.firstChild.replaceWith(wrapper);

    wrapper.addEventListener('click', () => {
      item.children[1].style.display
        = item.children[1].style.display === 'none'
          ? 'block' : 'none';
    });
  }
});
