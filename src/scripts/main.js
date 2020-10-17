'use strict';

document.addEventListener('click', event => {
  const listTarget = event.target.closest('li');
  let display = listTarget.firstElementChild.style.display;

  if (!listTarget || !listTarget.firstElementChild.tagName === 'UL') {
    return;
  }

  if (listTarget.firstElementChild.tagName === 'UL') {
    display = display === 'none' ? 'block' : 'none';
    listTarget.firstElementChild.style.display = display;
  }
});
