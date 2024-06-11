function countZeroes(arr) {
  
    
}

function getZeros(arr, leftIdx = 0, rightIdx = arr.length -1){
    if(rightIdx >= leftIdx){
        let midIdx = leftIdx + Math.floor((leftIdx-rightIdx)/2)
        if((midIdx === 0 || arr[midIdx - 1] === 1) && arr[mid] == 0){
            return midIdx;
        }else if (arr[midIdx]===1){
            return findFirst(arr, midIdx + 1, rightIdx)
        }
        return findFirst(arr, leftIdx, midIdx - 1)
    }
    return -1;
}

module.exports = countZeroes