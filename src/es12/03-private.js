class Perro{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        'Hello'
    }
    greeting()
    {
    return `${this.speak}, my name is ${this.age}`
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}
const Poppy = new Perro('Poppy',2);
console.log(Poppy.uAge);
console.log(Poppy.uAge = 4);





