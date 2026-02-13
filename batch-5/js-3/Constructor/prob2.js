// Adding Methods in Constructor


function Car(brand,model){
    this.brand = brand
    this.model = model

    this.start = function(){
        console.log(this.brand + " is starting.. ")
    }
}


let c1 = new Car("Toyota", "Furtuner")

c1.start()