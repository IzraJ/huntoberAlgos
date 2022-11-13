// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers


// Return your answer as a number

// assert.strictEqual(sumMix[9,3,7,3], 22)



function sumMix(arr){
    // arr reduce to a sum
    return arr.reduce((a,c)=> a + Number(c),0)
}


console.log(sumMix([9,3,'7','3']),22)