'use strict';

const container = document.querySelector('.tree');

container.addEventListener('click', (e) => {
  const list = e.target.nextSibling;

  if (list) {
    list.hidden = !list.hidden;
  }
});

function wrapWithSpan() {
  const listItems = container.querySelectorAll('li');

  listItems.forEach((item) => {
    const wrapper = document.createElement('span');

    item.prepend(wrapper);
    wrapper.append(wrapper.nextSibling);
  });
}

wrapWithSpan();
