'use strict';

const options = [...document.querySelectorAll('li')];

for (const option of options) {
  if (option.children.length > 0) {
    const innerList = option.children[0];
    const spanText = option.innerText.slice(0, option.innerText.indexOf('\n'));
    const wrapper = document.createElement('span');

    innerList.insertAdjacentElement('beforebegin', wrapper);
    wrapper.textContent = spanText;

    wrapper.previousSibling.remove();
  }
}

const titles = [...document.querySelectorAll('span')];

for (const title of titles) {
  title.addEventListener('click', e => {
    if (title.nextSibling.style.display === 'none') {
      title.nextSibling.style.display = 'block';
    } else {
      title.nextSibling.style.display = 'none';
    }
  });
}
