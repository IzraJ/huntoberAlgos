// DESCRIPTION:
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).


// My Code
// function findDeletedNumber(arr, mixArr) {
//     let sortedMix = mixArr.sort()
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.indexOf(mixArr[i])== -1){
//         return words.filter( => word.length > 6);
//         }}
//   }

// Leons Code

function findDeletedNumber(arr,mixArr){
    let sortedMix = mixArr.sort()
    if(arr.length === mixArr.length){
        return 0
    }else{
        
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== sortedMix[i]){
        return arr[i]
        }}
    }
    // return arr.filter( n => mixArr.indexOf(n) === -1)[0] || 0
}

function findDeletedNumber(arr,mixArr){
    if(arr.length === mixArr.length){
        return 0
    }else{
        let arrSum = arr.reduce((a,c)=> a+c,0)
        let mixSum = mixArr.reduce((a,c)=> a+c,0)
        return arrSum - mixSum
    }
    // return arr.filter( n => mixArr.indexOf(n) === -1)[0] || 0
}



