//1 TASK
function reverseString (){
    var reverseString =prompt('Введите слово или предложение')
    var newString = Array.from(reverseString)
    newString.reverse()
    return newString.join('')

}
console.log(reverseString())

//2 TASK
var type = (num) => {
    return console.log(typeof num)
}
type(56)

var type2 = (word) => {
    return console.log(typeof word)
}
type2('hello')

var type3 = (tf) => {
    return console.log(typeof tf)
}
type3(true)