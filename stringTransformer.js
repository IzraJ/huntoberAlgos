// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.




// My Code

function stringTransformer(str) {
    let armap = str.split('')
    let mapped = armap.map( e =>{
        if(e === e.toLowerCase()){
            return e.toUpperCase()
        }else{
            return e.toLowerCase()
        }
    })
    let arr = mapped.join('')
    let hi = arr.split(' ').reverse()
    let result = hi.join(' ')
    return result
  }

  function stringTransformer(str){
    
  }

  const stringTransformer = str => str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')