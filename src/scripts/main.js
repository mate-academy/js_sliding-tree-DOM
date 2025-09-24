'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }

    for (const node of Array.from(li.childNodes)) {
      if (node === childUl) {
        break;
      }

      let clickable;

      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();
        node.replaceWith(span);
        clickable = span;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const wrapper = document.createElement('span');

        node.replaceWith(wrapper);
        wrapper.appendChild(node);
        clickable = wrapper;
      }

      if (clickable) {
        clickable.setAttribute('tabindex', '0');
        clickable.setAttribute('role', 'button');
        clickable.setAttribute('aria-expanded', !childUl.hidden);

        const toggle = () => {
          childUl.hidden = !childUl.hidden;
          clickable.setAttribute('aria-expanded', !childUl.hidden);
        };

        clickable.addEventListener('click', toggle);

        clickable.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        });
      }
    }
  });
});
