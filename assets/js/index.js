"use strict"

const moment = require('moment');
require('moment/locale/ru.js');
let date = moment().locale('ru').format('LLLL');
console.log(date);
document.querySelector('#today').value = date;

let deadline = moment().endOf('week').fromNow();
console.log(deadline);
document.querySelector('#deadline').value = deadline;

//3-й блок: время работы по типу задач
const Chart = require('chart.js');

const cty = document.getElementById('pieChart');

const dayTasks = document.querySelectorAll('.task__input');
const dayTaskButtons = document.querySelectorAll('.task__button');

if (dayTasks.length > 0) {
    initDayTasks();
}

function initDayTasks(){
    for (let index = 0; index < dayTasks.length; index++) {

        const dayTask = dayTasks[index];
        const dayTaskButton = dayTaskButtons[index];

        function setDayTaskToLocalStorage(){

            if(localStorage.getItem(dayTask.id) !=0){
                localStorage.setItem(dayTask.id, (parseInt(localStorage.getItem(dayTask.id))) + +dayTask.value);
                //localStorage.setItem(dayTask.id, +dayTask.value);
            } else {
            localStorage.setItem(dayTask.id, +0);
            localStorage.setItem(dayTask.id, (parseInt(localStorage.getItem(dayTask.id))) + +dayTask.value);
            //localStorage.setItem(dayTask.id, +dayTask.value);
            }
        }

        dayTaskButton.addEventListener('click', function(){
            setDayTaskToLocalStorage();
            renewDayTask();
            dayTask.value = '';
        })
    }
}

function renewDayTask() {
    location.reload();
}

document.querySelector('#weektask__button').addEventListener('click', function clearDayTask() {

    localStorage.setItem(`theory`, +`${localStorage.getItem(`theory`)}` * 0);
    localStorage.setItem(`questions`, +`${localStorage.getItem(`questions`)}` * 0);
    localStorage.setItem(`practice`, +`${localStorage.getItem(`practice`)}` * 0);
    localStorage.setItem(`webinar`, +`${localStorage.getItem(`webinar`)}` * 0);
    localStorage.setItem(`selfstudy`, +`${localStorage.getItem(`selfstudy`)}` * 0);

    renewDayTask();
})


const pieChart = new Chart(cty, {
    type: 'pie',
    data: {
        labels: ['Теория', 'Вопросы', 'Практика', 'Вебинар', 'Дополн.'],
        datasets: [{
            label: 'My First Dataset',
            data: [`${localStorage.getItem(`theory`)}`, `${localStorage.getItem(`questions`)}`, `${localStorage.getItem(`practice`)}`, `${localStorage.getItem(`webinar`)}`, `${localStorage.getItem(`selfstudy`)}`],
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});


//4-й блок: время работы по дням недели
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

            if(localStorage.getItem(dayWork.id) !=0){
                localStorage.setItem(dayWork.id, (parseInt(localStorage.getItem(dayWork.id))) + +dayWork.value);
                //localStorage.setItem(dayWork.id, dayWork.value);
            } else {
            localStorage.setItem(dayWork.id, 0);
            //localStorage.setItem(dayWork.id, dayWork.value);
            localStorage.setItem(dayWork.id, (parseInt(localStorage.getItem(dayWork.id))) + +dayWork.value);
            }
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

document.querySelector('#weekday__button').addEventListener('click', function clearDayWork() {

    localStorage.setItem(`mon_work`, +`${localStorage.getItem(`mon_work`)}` * 0);
    localStorage.setItem(`tue_work`, +`${localStorage.getItem(`tue_work`)}` * 0);
    localStorage.setItem(`wed_work`, +`${localStorage.getItem(`wed_work`)}` * 0);
    localStorage.setItem(`thu_work`, +`${localStorage.getItem(`thu_work`)}` * 0);
    localStorage.setItem(`fri_work`, +`${localStorage.getItem(`fri_work`)}` * 0);
    localStorage.setItem(`sat_work`, +`${localStorage.getItem(`sat_work`)}` * 0);
    localStorage.setItem(`sun_work`, +`${localStorage.getItem(`sun_work`)}` * 0);

    renewDayWork();
})

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
const datepicker = require('js-datepicker');
const picker = datepicker('#datepicker', {
    onSelect: (instance, date) => {
        console.log('Ura! Pyatnitsa!')
    }
})*/


