// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// My Code



// Second time correcting uppcase
function duplicateEncode(word){
    let newArr = word.toLowerCase().split('');
//     let capt = newArr.shift(newArr[0]).toLowerCase()
//     newArr.unshift(capt)
    return newArr.map((element) => {if(newArr.indexOf(element) === newArr.lastIndexOf(element)){
        return "("
    } else {
        return ')'
    }}).join('')
}


function duplicateEncode(word){
    let newArr = word.split('')
    let capt = newArr.shift(newArr[0]).toLowerCase()
    newArr.unshift(capt)
    return newArr.map((element) => {if(newArr.indexOf(element) === newArr.lastIndexOf(element)){
        return "("
    } else {
        return ')'
    }}).join('')
}

// terniary

function duplicateEncode(word){
    let newArr = word.toLowerCase().split('')
    return newArr.map(e =>  newArr.indexOf(e) === newArr.lastIndexOf(e) ? "(" : ")" ).join('')
}


// leons

