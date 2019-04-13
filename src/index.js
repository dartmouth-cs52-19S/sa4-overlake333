import $ from 'jquery';
import './style.scss';

const startTime = new Date();

const time = (initTime) => {
  const currTime = new Date();
  return Math.floor((currTime - initTime) / 1000);
};

setInterval(() => { $('#main').html(`You've been on this page for ${time(startTime)} seconds.`); }, 1000);
