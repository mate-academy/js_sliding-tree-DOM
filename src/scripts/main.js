'use strict';

const listTitle = [...document.querySelectorAll('li')]
  .filter(title => title.children.length);

listTitle.forEach(li => {
  const wrapper = document.createElement('span');

  li.prepend(wrapper);
  wrapper.append(wrapper.nextSibling);
});

document.addEventListener('click', event => {
  const listTarget = event.target.closest('li');
  let display = listTarget.firstElementChild.nextSibling.style.display;

  if (!listTarget || !listTarget.firstElementChild.tagName === 'SPAN') {
    return;
  }

  if (listTarget.firstElementChild.tagName === 'SPAN') {
    display = display === 'none' ? 'block' : 'none';
    listTarget.firstElementChild.nextSibling.style.display = display;
  }
});
