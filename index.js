class Cat{
  constructor(name, sex, speak){
    this.name = name
    this.sex = sex
    this.speak = function(){
      return `${this.name} says meow!`
    }
  }
}

// new Cat('Sasha', 'female')
//   console.log(this.name, 'says meow!')


class Dog{
  constructor(name, sex){
    this.name = name
    this.sex = sex
    this.speak = function(){
      return `${this.name} says woof!`
    }
  }
}


class Bird{
  constructor(name, sex){
    this.name = name; 
    this.sex = sex;
  }
  speak(name, sex){
    if (this.sex === "male"){
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
    }
  }