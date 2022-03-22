"use strict"

const moment = require('moment');
require('moment/locale/ru.js');
let date = moment().locale('ru').format('LLLL');
console.log(date);
document.querySelector('#today').value = date;

let deadline = moment().endOf('week').fromNow();
console.log(deadline);
document.querySelector('#deadline').value = deadline;

//4-й блок: время работы по дням недели
const Chart = require('chart.js');
const ctx = document.getElementById('myChart');

const dayWorks = document.querySelectorAll('.weekday__input');
const dayWorkButtons = document.querySelectorAll('.daywork__button');

if (dayWorks.length > 0) {
    initDayWorks();
}

function initDayWorks(){
    for (let index = 0; index < dayWorks.length; index++) {
        const dayWork = dayWorks[index];
        const dayWorkButton = dayWorkButtons[index];

        function setDayWorkToLocalStorage(){
        localStorage.setItem(dayWork.id, +`${localStorage.getItem(dayWork.id)}` + +dayWork.value);
        }

        dayWorkButton.addEventListener('click', function(){
            setDayWorkToLocalStorage();
            renewDayWork();
            dayWork.value = '';
        })
    }
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
            data: [`${localStorage.getItem(`mon_work`)}`, `${localStorage.getItem(`tue_work`)}`, `${localStorage.getItem(`wed_work`)}`, `${localStorage.getItem(`thu_work`)}`, `${localStorage.getItem(`fri_work`)}`, `${localStorage.getItem(`sat_work`)}`, `${localStorage.getItem(`sun_work`)}`],
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


