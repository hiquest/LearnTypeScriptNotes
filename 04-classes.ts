// #########################
// ~~~ Learn TypeScript ~~~
// 04. Classes
// #########################

// 💡 A class is also a type
// class Dog {
//   age: number
//   constructor(age: number) {
//     this.age = age
//   }
//   bark() {
//     console.log('whoof')
//   }
// }

// const dog: Dog = new Dog(10)

// 💡 Duck-typing
// const dog: Dog = { age: 5, bark() { } } 

// 💡 Private / protected / public modifiers
// class Dog {
//   age: number
//   constructor(age: number) {
//     this.age = age
//   }
//   bark() {
//     console.log('whoof')
//   }
// }

// const dog = new Dog(5)
// dog.age

// 💡 Readonly modifiers

// 💡 Parameter properties (add a modifier)
// class Dog {
//   constructor(public age: number) { }
// }
// const dog = new Dog(5)
// dog.age // => 5


// ##############
// 🏋️Exercises 🏋️
// ##############

// 1. Implement a class called FullName that
//   - takes firstName and the lastName in constructor, and optional multiple other names
//   - has a `build` method that returns a full name built from the provided data
//   - names should not be accessible from the outside