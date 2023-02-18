'use strict';

const tree = document.querySelector('.tree');

tree.innerHTML = `
<li><span>Fruit</span>
<ul>
  <li><span>Red</span>
    <ul>
      <li>Cherry</li>
      <li>Strawberry</li>
      <li>Watermelon</li>
      <li>Pomegranate</li>
    </ul>
  </li>
  <li><span>Yellow</span>
    <ul>
      <li>Banana</li>
      <li>Pineapple</li>
      <li>Mango</li>
    </ul>
  </li>
</ul>
</li>
<li><span>Fish</span>
<ul>
  <li><span>Ocean fishes</span>
    <ul>
      <li>Blue Marlin</li>
      <li>Sailfish</li>
      <li>Dorado</li>
    </ul>
  </li>
  <li><span>Freshwater fish</span>
    <ul>
      <li>Oscar</li>
      <li>Mollies</li>
      <li>Goldfish</li>
    </ul>
  </li>
</ul>
</li>
`;

const spans = document.querySelectorAll('span');

for (const span of spans) {
  span.addEventListener('click', () => {
    const parentElem = span.parentElement;
    const children = parentElem.querySelector('ul');

    children.hidden = !children.hidden;
  });
}
