'use strict';

const wrapInnerTextWithTag = (element, tagName) => {
  const text = element.firstChild;
  const tag = document.createElement(tagName);

  tag.append(text);
  element.prepend(tag);
};

document.querySelectorAll('li').forEach((element) => {
  if (element.firstElementChild?.tagName === 'UL') {
    wrapInnerTextWithTag(element, 'span');
  }
});

const toggleDisplay = (element) => {
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
};

document.querySelector('.tree').addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (target) {
    toggleDisplay(target.nextElementSibling);
  }
});
