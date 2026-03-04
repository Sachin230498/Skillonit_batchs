

// let api = "https://jsonplaceholder.typicode.com/albums/2/photos";


// // async await 

// const getData= async()=>{

//     try {
//          let res = await fetch(api);
//          let data = await res.json();
//          console.log(data);
//     } catch (error) {
//         console.log(error)
//     }

  
   
// }


// getData()



// // let getData = fetch(api)


// // getData.then((res)=>{
// //    let data =  res.json()

// //    data.then((realdata)=>{
// //  console.log(realdata)
// //    })
// // }).catch((err)=>{
// // console.log(err)
// // })





let api = "https://jsonplaceholder.typicode.com/photos";
let main = document.getElementById("main")

const getData = async()=>{    
    try {
        let res = await fetch(api);
        let data = await res.json();
        display(data);
        // console.log(data); 

        
    } catch (error) {
        console.log(error)
    }
  
}





const display = (data)=>{
 data.map((el)=>{
   console.log(el)

   let img = document.createElement("img")
//    img.src = el.url
   let id = document.createElement("h2")
   id.innerText = el.id
   let div = document.createElement("div")

   div.append(img,id)

   main.append(div)
 })

}




setTimeout(()=>{
getData();
},1000)



