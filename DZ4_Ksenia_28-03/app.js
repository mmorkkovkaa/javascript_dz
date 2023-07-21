//1 TASK
var button = document.querySelector('.btn')
var output = document.getElementsByClassName('text')
function clickButton(){
    var input = prompt('add text')
    return output[0].innerHTML = input

}
button.addEventListener('click', clickButton)

//2 TASK
var trafficLight = document.querySelector('.tab')
var circle = document.getElementsByClassName('circle')
var txt = document.getElementsByClassName('txt')

function makeLight() {
    var light = prompt('введите любой цвет светофора')
    if (light === 'красный') {
        circle[0].style.backgroundColor = 'red'
        txt[0].innerHTML = 'pleas, STOP'
        circle[1].style.backgroundColor = 'white'
        txt[1].innerHTML = null
        circle[2].style.backgroundColor = 'white'
        txt[2].innerHTML = null
    } else if (light === 'желтый') {
        circle[1].style.backgroundColor = 'yellow'
        txt[1].innerHTML = 'pleas, Wait'
        circle[0].style.backgroundColor = 'white'
        txt[0].innerHTML = null
        circle[2].style.backgroundColor = 'white'
        txt[2].innerHTML = null
    } else if (light === 'зеленый') {
        circle[2].style.backgroundColor = 'green'
        txt[2].innerHTML = 'pleas, GO'
        circle[0].style.backgroundColor = 'white'
        txt[0].innerHTML = null
        circle[1].style.backgroundColor = 'white'
        txt[1].innerHTML = null
    } else {
        alert('введите красный,жЕлтый ли зелЕный')
    }
    return light
}
trafficLight.addEventListener('click', makeLight)