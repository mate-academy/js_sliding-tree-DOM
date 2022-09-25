'use strict';

const sections
    = [...document.querySelectorAll('li')]
    .filter(el => el.innerHTML.includes('ul'));

for (const section of sections) {
  const headline = document.createElement('span');

  headline.innerText = section.firstChild.textContent;

  section.firstChild.remove();

  section.prepend(headline);

  section.querySelector('ul').style.display = 'none';
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', () => {
  const list = event.target.parentElement.querySelector('ul');

  if (!event.target.matches('span')) {
    return;
  }

  list.style.display === 'none'
    ? list.style.display = '' : list.style.display = 'none';
});
