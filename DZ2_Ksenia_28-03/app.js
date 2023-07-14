//1 TASK
var city = ['Bishkek' , 'Los Angeles', 'Chicago',  'New York',
                    'Houston', 'Dallas', 'Philadelphia', 'Seattle']

var cityWithSix = []
for (var i = 0; i < city.length; i++) {
    if (city[i].length > 6 ) {
        cityWithSix.push(city[i])
    }else {
        console.log(`other city - ${city[i]}`)
    }
}
console.log(cityWithSix)

var cityWithS = []
for (var i = 0; i < city.length; i++) {
    if (city[i].includes('s') || city[i].includes('S')){
        cityWithS.push(city[i])
    }else {
        console.log(`other city - ${city[i]}`)
    }
}
console.log(cityWithS)

//2 TASK

var color = {
    red : 'стой',
    yellow:'приготовся',
    green:'иди',
}

var trafficLight = prompt('Введите цвет :')

switch (trafficLight){
    case 'красный':
        alert(color.red)
        break
    case 'жёлтый':
        alert(color.yellow)
        break
    case 'зелёный':
        alert(color.green)
        break
    default:
        alert('Введите цвет светофора (красный, жЁлтый, зелЁный)')
}
