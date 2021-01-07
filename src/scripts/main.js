'use strict';

const list = document.querySelector('.tree');

[...list.children].forEach(element => {
  headerWrapper(element);

  [...element.children[1].children].forEach(item => {
    headerWrapper(item);
  });
});

list.addEventListener('click', (fact) => {
  if (fact.target.classList.contains('open')) {
    fact.target.classList.toggle('open');
    fact.target.nextSibling.style.display = 'block';
  } else if (fact.target.classList.contains('wrap')) {
    fact.target.classList.add('open');
    fact.target.nextSibling.style.display = 'none';
  }
});

function headerWrapper(element) {
  const text = element.childNodes[0].data;
  const wrap = document.createElement('span');

  wrap.classList.add('wrap');
  wrap.innerText = text.trim();
  element.childNodes[0].replaceWith(wrap);
}
