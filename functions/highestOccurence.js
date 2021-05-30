// function which returns the most frequent element from an array

const highestOccuring = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item] = 1
    if(acc[item] > acc.maxCount){
     acc.maxCount = acc[item]
     acc.maxItem = item
    }
    return acc
  }, {maxItem: arr[0], maxCount: 1}).maxItem
}


// returns all the highest occuring elements in a new array
const highestOccuring = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item] = 1
    if(acc[item] > acc.maxCount){
      acc.maxCount = acc[item]
      acc.maxItem = item 
      acc.maxItems = [item]
    }
    if(item !== acc.maxItem && acc[item] === acc.maxCount){
      acc.maxItems.push(item)
    }
    return acc
  }, {maxItem: arr[0], maxCount: 1, maxItems:[]}).maxItems
}

highestOccuring([2,2,1,1])



// example with 2 loops 
// function mostFrequent(arr){
//     let count = 0
//     let count2 = 0
//     let item 
//     for(let i = 0; i<arr.length; i++){
//       count = 0 
//       for(let j = 0; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//           count++
//           if(count > count2){
//             count2 = count
//             item = arr[i]
//           }
//         }
//       }
//     }
//     return final
// }
