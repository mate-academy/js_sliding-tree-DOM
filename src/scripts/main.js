"use strict";

document.querySelectorAll(".tree li").forEach((li) => {
  const span = document.createElement("span");

  li.prepend(span);
  span.appendChild(span.nextSibling);
});

document.querySelector(".tree").addEventListener("click", function (e) {
  if (e.target.tagName !== "SPAN") {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector("ul");

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
});
