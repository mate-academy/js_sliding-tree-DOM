'use strict';

const tree = document.querySelector('.tree');
const listTitles = [...document.querySelectorAll('li')]
  .filter(title => title.children.length);

listTitles.forEach(li => {
  const wrapper = document.createElement('span');

  li.prepend(wrapper);
  wrapper.append(wrapper.nextSibling);
});

tree.addEventListener('click', event => {
  const listTarget = event.target;

  if (!listTarget.tagName === 'SPAN') {
    return;
  }

  if (listTarget.nextElementSibling.tagName === 'UL') {
    listTarget.nextElementSibling.hidden
      = !listTarget.nextElementSibling.hidden;
  }
});
