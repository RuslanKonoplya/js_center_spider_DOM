'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const heigth1 = wall.getBoundingClientRect().height / 2 - 50;
const weigth1 = wall.getBoundingClientRect().width / 2 - 50;

spider.style.top = `${heigth1}px`;
spider.style.left = `${weigth1}px`;
