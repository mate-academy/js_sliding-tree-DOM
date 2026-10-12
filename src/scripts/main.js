'use strict';

const header = document.querySelectorAll('li');

header.forEach((item) => {
  const target = item.firstChild;
  const wrapper = document.createElement('span');

  wrapper.textContent = target.textContent;
  item.replaceChild(wrapper, target);

  wrapper.addEventListener('click', () => {
    const content = item.querySelector('ul');

    content.style.display = content.style.display === '' ? 'none' : '';
  });
});
