let form = document.querySelector("form");
let tbody = document.querySelector("tbody");


form.addEventListener("submit", getData)

let doc_arr = JSON.parse(localStorage.getItem("docData")) || [] ;
display(doc_arr)

function getData(){
    event.preventDefault()
    let doc_data = {
        name : form.docname.value,
        id : form.docid.value,
        spe:form.spe.value,
        exp:form.exp.value,
        mbl:form.mbl.value,
        email:form.email.value
    }

    doc_arr.push(doc_data)
    // console.log(doc_arr)
    // console.log(doc_data)  
    localStorage.setItem("docData",JSON.stringify(doc_arr) )
    display(doc_arr)
}



function display(data){
    tbody.innerHTML = "";
    data.map(function(el,index){
        // console.log(el)
       
        let row = document.createElement("tr");

        let docname = document.createElement("td")
        docname.innerText = el.name;
        let docid = document.createElement("td")
       docid.innerText = el.id;
        let specail = document.createElement("td")
       specail.innerText = el.spe
        let expirence = document.createElement("td")
       expirence.innerText = el.exp
        let mobile = document.createElement("td")
       mobile.innerText = el.mbl
        let email = document.createElement("td")
        email.innerText = el.email
        let role = document.createElement("td")
        if(el.exp>=5){
            role.innerText = "Seniour"
        }else if(el.exp>=2 && el.exp<=5){
            role.innerText = "Juniour"
        }else{
            role.innerText = "Trainee"
        }
        let del = document.createElement("td")
        del.addEventListener("click",function(){
            delfun(index)
        })
        del.innerText = "Delete";
        del.style.backgroundColor = "red";
        del.style.color = "white"

        row.append(docname,docid,specail,expirence,email,mobile,role,del)

        tbody.append(row)



    })
}


function delfun(indexno){
    // console.log(event.target.parentNode)
    // event.target.parentNode.remove();

    doc_arr.splice(indexno,1)
      localStorage.setItem("docData", JSON.stringify(doc_arr));
    display(doc_arr)

}




// let arr = [1,2,3,4,5,6,7,8]

// // arr.splice(index, no of el delete)
// let index = 3
// arr.splice(index,2,55,12,11)

// console.log(arr)

// let x = 5;
// let y = 6
// let a = 10

// let obj = {
//      x,
//      y,
//      a
// }


// console.log(obj)