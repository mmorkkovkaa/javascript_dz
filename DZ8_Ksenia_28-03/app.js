const letter = 'А рака манила малина Макара'

function revers () {
    const reverseLetter = Array.from(letter)
    reverseLetter.reverse()
    return reverseLetter.join('').toLowerCase().replace(/\s/g, '')
}

console.log(revers())

function palindrome(){
    const reversString = revers()
    const originalString = letter.toLowerCase().replace(/\s/g, '')

    return reversString === originalString
}

console.log(palindrome())