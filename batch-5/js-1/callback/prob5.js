// Paratha making steps

function makeDough(cb){
  console.log("Dough is prepared")
  cb()
};

function addfilling(cb){
    console.log("Filling added")
    cb()
}

function rollParatha(cb){
    console.log("Paratha rolled")
    cb()
}

function cookParatha(){
    console.log("Paratha cooked and ready to server")
}

//annonoums
makeDough(function(){
addfilling(function(){
    rollParatha(function(){
        cookParatha()
    })
})
})
