const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const duration = document.querySelector('#duration');
const status = document.querySelector('#status');
const finishMusic = document.querySelector('#finish');

const timer = new Timer(status,duration,startButton,stopButton,finishMusic);