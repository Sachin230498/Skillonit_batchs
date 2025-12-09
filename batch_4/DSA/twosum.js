// Two sum => find the indexes of Number Equal to Target

// array  = [3,8,12,4,9]
// target = 13

function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for (let j = i+1; j < arr.length; j++) {
          if(arr[i]+arr[j] === target){
            console.log(i,j)
          }
        }
    }
}
twoSum([3, 8, 12, 4, 9],13);