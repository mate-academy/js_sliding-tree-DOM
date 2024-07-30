'use strict';

// write code here
// const li = document.querySelectorAll('li');

// Array.from(li).forEach((item) => {
//   const span = document.createElement('span');

//   item.parentNode.insertBefore(span, item);

//   span.append(item);
// });

const li = Array.from(document.querySelectorAll('li'));

li.forEach((item) => {
  if (item.querySelector('ul') !== null) {
    const span = document.createElement('span');
    const text = document.createTextNode(item.firstChild.textContent);

    span.appendChild(text);
    item.firstChild.textContent = '';
    item.insertAdjacentElement('afterbegin', span);
  }
});

function checkCssProperty(element) {
  if (element) {
    const style = window.getComputedStyle(element);

    if (style) {
      return style.getPropertyValue('display') === 'none';
    }
  }
}

document.querySelector('.tree').addEventListener('click', (e) => {
  const element = e.target.parentElement.querySelector('ul');

  if (checkCssProperty(element)) {
    element.style.cssText = `display: block`;
  } else {
    element.style.cssText = `display: none`;
  }
});
