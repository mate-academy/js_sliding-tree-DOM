'use strict';

const list = document.querySelector(`.tree`);
const li = document.querySelectorAll(`li`);

for (const el of li) {
  const span = document.createElement(`span`);

  if (el.children.length > 0) {
    el.prepend(span);
    span.prepend(span.nextSibling);
  }
}

list.addEventListener(`click`, (event1) => {
  if (event1.target.tagName !== `SPAN`) {
    return;
  }
  event1.target.nextSibling.hidden = !event1.target.nextSibling.hidden;
});
