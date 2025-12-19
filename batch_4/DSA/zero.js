// move all zeros to the end

let arr = [0, 1, 0, 3, 12,0];

function zero(arr) {
  let result = [];
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0 ) result.push(arr[i])
    else x++;
  }

  for(let i=0;i<x;i++){
    result.push(0)
  }

  console.log(result)

}

zero(arr);


// console.log(0 !== 0)

// i=0
// r = []
// x = 0
// if 0 !== 0   
// x = 1

// i=1
// x = 1
//  1 !== 0 r[1]

// i =2
// r = [1] , x =1
// 0 !== 0
// x = 2

// i=3 
//  r = [1] , x = 2
// 3 !== 0, r[1,3]
//  x =2

// i=4 
//  r = [1,3] , x = 2
// 12 !== 0, r[1,3,12]
//  x =2

// r = [1, 3, 12];




multiply(2)(3)(4)(5)()  // 120
