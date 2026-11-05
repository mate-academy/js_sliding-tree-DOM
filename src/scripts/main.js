'use strict';

// write code here

const ul = document.querySelector('ul');

// console.log(lists[2].textContent.trim().split('\n'));
// console.log(ul.innerHTML.replaceAll(' ', '').split('\n').slice(1, -1));

const elements = ul.innerHTML
  .replaceAll('  ', '')
  .split('\n')
  .slice(1, -1)
  .map((item) => {
    if (item.includes('<li>') && item.includes('</li>')) {
      const text = item.slice(4, -5);

      return `<li><span>${text}</span></li>`;
    }

    if (!(item.includes('ul>') || item.includes('li>'))) {
      return `<span>${item}</span>`;
    }

    return item;
  });

ul.innerHTML = elements.join('');

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const nextElement = span.nextElementSibling;

    if (nextElement) {
      if (nextElement.style.display) {
        span.nextElementSibling.style.display = '';

        return;
      }
      span.nextElementSibling.style.display = 'none';
    }
  });
});
