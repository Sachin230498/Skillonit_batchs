let person = {
    name:"Aman",
    age:26,
    city:"Indore"
}


// for in loop

for(let name in person){
    // console.log( person[name])
}


//  count how many values are greter than  50

let marks = {m1:40,m2:55,m3:92,m4:30,m5:65}

let count = 0
for(let key in marks ){
    if(marks[key]>50){
     count++;
    }
}

console.log(count)