'use strict';

const list = document.querySelector('.tree');
const fruit = document.querySelector('.tree').firstElementChild;
const fruitWrap = document.createElement('span');
const fruitRed = fruit.firstElementChild.children[0];
const fruitYellow = fruit.firstElementChild.children[1];
const fruitRedWrap = document.createElement('span');
const fruitYellowWrap = document.createElement('span');
const fish = document.querySelector('.tree').lastElementChild;
const fishWrap = document.createElement('span');
const fishOceanFishes = fish.firstElementChild.children[0];
const fishOceanFishesWrap = document.createElement('span');
const fishFreshWaterFish = fish.firstElementChild.children[1];
const fishFreshWaterFishWrap = document.createElement('span');

fruitWrap.append(fruit.firstChild);
list.firstElementChild.prepend(fruitWrap);

fruitRedWrap.append(fruitRed.firstChild);
fruitRed.prepend(fruitRedWrap);

fruitYellowWrap.append(fruitYellow.firstChild);
fruitYellow.prepend(fruitYellowWrap);

fishWrap.append(fish.firstChild);
list.lastElementChild.prepend(fishWrap);

fishOceanFishesWrap.append(fishOceanFishes.firstChild);
fishOceanFishes.prepend(fishOceanFishesWrap);

fishFreshWaterFishWrap.append(fishFreshWaterFish.firstChild);
fishFreshWaterFish.prepend(fishFreshWaterFishWrap);

list.addEventListener('click', (occurrent) => {
  const item = occurrent.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  if (item.parentElement.querySelector('ul').style.display === 'none') {
    item.parentElement.querySelector('ul').style.display = 'block';
  } else {
    item.parentElement.querySelector('ul').style.display = 'none';
  }
});
