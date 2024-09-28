'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

[...list].filter(e => e.children.length > 0).forEach(element => {
  headerWrapper(element);
});

tree.addEventListener('click', (fact) => {
  const el = fact.target.nextElementSibling;

  if (el.tagName === 'UL') {
    el.hidden = !el.hidden;
  }
});

function headerWrapper(element) {
  const text = element.childNodes[0].data;
  const wrap = document.createElement('span');

  wrap.classList.add('wrap');
  wrap.innerText = text.trim();
  element.childNodes[0].replaceWith(wrap);
}
