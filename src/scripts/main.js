'use strict';

const options = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

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

tree.addEventListener('click', e => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    if (target.nextSibling.style.display === 'none') {
      target.nextSibling.style.display = 'block';
    } else {
      target.nextSibling.style.display = 'none';
    }
  }
});
