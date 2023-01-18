//Declarando
class User {   
}
//Instancia
const newUser = new User();

class user{
    //metodos
    greeting(){return 'Hello :D';}
}


const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor
class Juanes{
    constructor() {
        console.log('Nuevo Juanes');
    }
    greeting(){return 'Hello :D Juanes';}
    
}
const juanes = new Juanes();

//this

class Gato{
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Miau Miau';
    }
    greeting(){
    return `${this.speak()} ${this.name}`;
    }
}
const Tizon = new Gato('Tizon');
console.log(Tizon.greeting());

//setters getters
class Perro{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        'Hello'
    }
    greeting()
    {
    return `${this.speak}, my name is ${this.age}`
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
const Poppy = new Perro('Poppy',2);
console.log(Poppy.uAge);
console.log(Poppy.uAge = 4);





