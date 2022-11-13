// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!




 function solve(arr){
    // set -> uni values
    // map -> [1,2],[4],[5,6] 2,1,2
    // reduce -> 2*1*2
    // arr.map(sa=>[...new Set(sa)].length)

    return arr.map(sA=> new Set(sA).size).reduce((a,c)=> a*c,1)
 }

const solve = arr => arr.reduce((a,c)=>a * new Set(c).size,1)






function solve(arr) {
    const mySet1 = new Set()
    
    let answer = 0
    arr.map(element => mySet1.add(element)).reduce((a,c)=>a+c,0)
    console.log(mySet1)
  };


  console.log( solve([[1,2],[4],[5,6]]), '4')
  console.log( solve([[1,2],[4,4],[5,6,6]]),'4')
