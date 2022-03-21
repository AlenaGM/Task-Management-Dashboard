"use strict"

const moment = require('moment');
require('moment/locale/ru.js');
let date = moment().locale('ru').format('LLLL');
console.log(date);
document.querySelector('#today').value = date;

let deadline = moment().endOf('week').fromNow();
console.log(deadline);
document.querySelector('#deadline').value = deadline;


const Chart = require('chart.js');
const ctx = document.getElementById('myChart');

let monWork = localStorage.getItem(`monWork`);
let tueWork = localStorage.getItem(`tueWork`);
let wedWork = localStorage.getItem(`wedWork`);
let thuWork = localStorage.getItem(`thuWork`);
let friWork = localStorage.getItem(`friWork`);
let satWork = localStorage.getItem(`satWork`);
let sunWork = localStorage.getItem(`sunWork`);

document.querySelector('#weekday__button').addEventListener('click', function(){
    attributeDayWork();
    saveDayWork();
    renewDayWork();
})

function attributeDayWork(){
    monWork = document.querySelector('#mon_work').value;
    tueWork = document.querySelector('#tue_work').value;
    wedWork = document.querySelector('#wed_work').value;
    thuWork = document.querySelector('#thu_work').value;
    friWork = document.querySelector('#fri_work').value;
    satWork = document.querySelector('#sat_work').value;
    sunWork = document.querySelector('#sun_work').value;
}

function saveDayWork() {
    localStorage.setItem(`monWork`, monWork);
    localStorage.setItem(`tueWork`, tueWork);
    localStorage.setItem(`wedWork`, wedWork);
    localStorage.setItem(`thuWork`, thuWork);
    localStorage.setItem(`friWork`, friWork);
    localStorage.setItem(`satWork`, satWork);
    localStorage.setItem(`sunWork`, sunWork);
}

function renewDayWork() {
    location.reload();
}

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
        datasets: [{
            label: 'кол-во часов',
            data: [`${localStorage.getItem(`monWork`)}`, `${localStorage.getItem(`tueWork`)}`, `${localStorage.getItem(`wedWork`)}`, `${localStorage.getItem(`thuWork`)}`, `${localStorage.getItem(`friWork`)}`, `${localStorage.getItem(`satWork`)}`, `${localStorage.getItem(`sunWork`)}`],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 214, 44, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(68, 214, 44, 1)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/*
myChart.data.datasets[0].data[0] = monWork;
myChart.data.datasets[0].data[1] = tueWork;
myChart.data.datasets[0].data[2] = wedWork;
myChart.data.datasets[0].data[3] = thuWork;
myChart.data.datasets[0].data[4] = friWork;
myChart.data.datasets[0].data[5] = satWork;
myChart.data.datasets[0].data[6] = sunWork;
*/


/*
const datepicker = require('js-datepicker');
const picker = datepicker('#datepicker', {
    onSelect: (instance, date) => {
        console.log('Ura! Pyatnitsa!')
    }
})*/


