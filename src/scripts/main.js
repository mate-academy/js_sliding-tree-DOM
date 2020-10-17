'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const item of list) {
  if (item.children.length > 0 && item.firstElementChild.tagName === 'UL') {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(item.childNodes[1]);
  }
}

tree.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    const styles = event.target.parentElement.lastElementChild.style;

    if (styles.display === 'none') {
      styles.display = 'block';
    } else {
      styles.display = 'none';
    }
  }
});
