// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// String of words
// Return an array sorted alphabetically by last char.

// Example "Hello world" --> [world, Hello]


function last(x){
    // Turn string into array
    let arr = x.split(' ')
    console.log(arr)
}

function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
   }