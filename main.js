function letterCapitalize (str) {
// capitalize the first letter in each word of the string
    var wordArray = str.split(' ')
    var cappedWords = []
    wordArray.forEach(function(word) {
        cappedWords.push(word[0].toUpperCase() + word.substring(1))
    });
    cappedWords = cappedWords.join(' ')
    return cappedWords
}

function wordCount (str) {
    return str.split(' ').length
}

function primeTime (number) {
//     return false if number can be evenly divided by anything other than 1 or itself, else return true
    if (number < 2) { return false }
    var isPrime = true
    for (var i = 2; i < 216; i++) {
        if (number % i === 0 && i !== number) {
            isPrime = false
        }
    }
    return isPrime
}