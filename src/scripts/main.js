'use strict';

const headers = [...document.querySelectorAll('li')]
  .filter(element => element.children.length > 0);

headers.forEach(header => {
  const wrapper = document.createElement('span');

  header.prepend(wrapper);
  wrapper.append(wrapper.nextSibling);

  wrapper.addEventListener('click', event => {
    event.stopPropagation();

    const child = header.querySelector('ul');

    if (child.style.display !== 'none') {
      child.style.display = 'none';
    } else {
      child.style.display = 'block';
    }
  });
});
