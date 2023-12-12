class Car {
    static type = "SUV"
    constructor(brand) {
        this.carName = brand;
    }

    show() {
        console.log("I have " + this.carName)
    }
}

class Model extends Car {
    constructor(mod, brand) {
        super(brand)
        this.model = mod;
    }

    present() {
        console.log("I have a " + this.carName + " " + this.model)
    }

}

let Mycar = new Model("800", "Maruti")
let Mycar1 = new Model("i10", "Hyundai")
console.log(Mycar.type, Mycar1.type, Car.type)
Mycar.present()
Mycar.show()